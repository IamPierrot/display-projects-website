import { Octokit } from "octokit";
import { Response } from "../components/Page/wesiteType";

const apiKey = import.meta.env.TOKEN;

const authors = [
     { "name": "IamPierrot", "token": apiKey},
     { "name": "CaSapChim", "token":  apiKey}
]

export default async function getAllRespo() {
     const result: {
          "IamPierrot": Response[],
          "CaSapChim": Response[]
     } = {
          IamPierrot: [],
          CaSapChim: []
     }

     for (const author of authors) {
          const { name, token } = author;
          const octokit = new Octokit({
               auth: token
          });
          const find = await octokit.request('GET /users/{username}/repos', {
               // owner: 'IamPierrot',
               // repo: 'display-projects-webite',
               // path: "README.md",
               username: name,
               headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
               }
          })
          const theAuthor = result[name as keyof object] as Response[] | undefined;
          theAuthor?.push(find.data);
     }
     return result;
}
