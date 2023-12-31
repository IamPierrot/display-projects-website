import { Octokit } from "octokit";

export default async function getAllRespo(token: string) {
     const octokit = new Octokit({
          auth: token
     });

     const result = await octokit.request('GET /users/{username}/repos', {
          // owner: 'IamPierrot',
          // repo: 'display-projects-webite',
          // path: "README.md",
          username: "IamPierrot",
          headers: {
               'X-GitHub-Api-Version': '2022-11-28'
          }
     })
     return result ?? undefined;
}
