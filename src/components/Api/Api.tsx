import { useState } from "react";
import { Content } from "./Content";
import { BodyEditor } from "./BodyEditor";
const methodColors = {
  GET: "text-green-500",
  POST: "text-yellow-400",
  DELETE: "text-red-500",
  PUT: "text-orange-400",
};
export const Api = () => {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [responseData, setReponseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const updateHeader = (index: number, key: string, value: string) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index] = { key, value };
    setHeaders(updatedHeaders);
  };
  const addHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };
  const removeHeader = (index: number) => {
    if (index == 0) return;
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const handleCallApi = async () => {
    setIsLoading(true);

    if (!url) return setReponseData(`invalid url input`);
    let URL: string = url;
    if (!url.startsWith("https://")) URL = "https://" + url;
    try {
      const response = await fetch(URL, {
        method: method, // Adjust method as needed
        headers: headers.reduce(
          (obj, header) => Object.assign(obj, { [header.key]: header.value }),
          {},
        ),
        body:
          method === "POST" || method === "PUT"
            ? JSON.stringify(body)
            : undefined,
      });

      if (!response.ok) {
        return setReponseData(
          `API request failed with status ${response.status}`,
        );
      }

      const responseJson = await response.json();
      setReponseData(responseJson);
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        console.error("API error:", error);
        setReponseData(
          error!.message || "An error occurred while fetching data",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow p-4 pt-12 font-mono">
      <div className="mb-4 flex border-collapse items-center rounded-3xl border border-none bg-gray-600">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className={`relative flex cursor-pointer rounded-s-3xl border-r bg-slate-700 px-14 py-2 font-bold transition-all duration-300 hover:bg-opacity-100 ${
            methodColors[method as keyof object]
          }`}
        >
          <option value="GET" className="text-green-500">
            GET
          </option>
          <option value="POST" className="text-yellow-400">
            POST
          </option>
          <option value="PUT" className="text-orange-400">
            PUT
          </option>
          <option value="DELETE" className="text-red-500">
            DELETE
          </option>
        </select>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="API URL"
          className="!important flex-grow rounded-r border-none bg-gray-600 py-2 text-slate-200 placeholder-white focus:outline-0 focus:ring-0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCallApi();
            }
          }}
        />
        <button
          onClick={handleCallApi}
          className="rounded-e-3xl border-l px-14 py-2 text-white transition-all duration-300 hover:bg-blue-400"
        >
          SEND
        </button>
      </div>

      <div className="flex flex-row">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">Headers</h3>
          {headers.map((header, index) => (
            <div key={index * 101} className="mb-4 flex items-center">
              <input
                type="text"
                placeholder="Key"
                className="mr-4 flex-grow rounded-l border border-gray-300 px-4 py-2"
                value={header.key}
                onChange={(e) =>
                  updateHeader(index, e.target.value, header.value)
                }
              />
              <input
                type="text"
                placeholder="Value"
                className="flex-grow rounded-r border border-gray-300 px-4 py-2"
                value={header.value}
                onChange={(e) =>
                  updateHeader(index, header.key, e.target.value)
                }
              />
                <button
                  onClick={() => removeHeader(index)}
                  className={`ml-2 px-2 py-1 text-gray-400 hover:text-gray-600 ${index != 0 ? "" : "cursor-default"}`}
                >
                  <span className={`${index != 0 ? "" : "invisible"}`}>-</span>
                </button>
            </div>
          ))}
          <button
            onClick={addHeader}
            className="ml-2 px-2 py-1 text-gray-400 hover:text-gray-600"
          >
            Add Header
          </button>
        </div>

        <div className="h-full w-full">
          <h3 className="mb-2 text-lg font-bold text-white">Body</h3>
          <BodyEditor body={body} setBody={setBody}></BodyEditor>
        </div>
      </div>
      <div className="">
        <h3 className="mb-2 text-lg font-bold text-white">Result</h3>
        <Content data={responseData}></Content>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setReponseData({})}
          className="rounded border border-gray-300 px-4 py-2 text-white duration-300 hover:bg-blue-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
