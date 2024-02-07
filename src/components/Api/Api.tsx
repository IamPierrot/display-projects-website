import { useState } from "react";
import { Content } from "./Content";
import { BodyEditor } from "./BodyEditor";
import axios from "axios";
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
  const [responseStatus, setResponseStatus] = useState<
    number | null | undefined
  >(null);
  const [responseTiming, setResponseTiming] = useState(0);

  isLoading;

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

    const startTime = performance.now();

    const validateAndNormalizeUrl = (url: string): string | null => {
      if (!url) {
        return null; // Handle empty URLs
      }

      // Construct a URL object for validation and normalization
      const parsedUrl = new URL(url);

      // Validate protocol
      if (!parsedUrl.protocol.startsWith("http")) {
        return null; // Only allow HTTP or HTTPS protocols
      }

      // Normalize protocol to HTTPS if not specified
      parsedUrl.protocol = parsedUrl.protocol.startsWith("https")
        ? "https:"
        : "http:";

      // Normalize hostname to lowercase
      parsedUrl.hostname = parsedUrl.hostname.toLowerCase();

      // Ensure trailing slash for consistency (optional)
      if (!parsedUrl.pathname.endsWith("/")) {
        parsedUrl.pathname += "/";
      }

      // Return the normalized URL string
      return parsedUrl.toString();
    };
    const normalizedUrl = validateAndNormalizeUrl(url);
    console.log(normalizedUrl);
    if (!normalizedUrl) throw setReponseData("Invalid Url Input!");
    try {
      const response = await axios(normalizedUrl, {
        method: method, // Adjust method as needed
        headers: {
          "Content-Type": "apllication/json",
        },
        data:
          method === "POST" || method === "PUT"
            ? JSON.stringify(body)
            : undefined,
      });

      const responseJson = await response.data;
      setReponseData(responseJson);
      setResponseStatus(response.status);
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

    const endTime = performance.now();

    setResponseTiming(endTime - startTime);
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
        />
        <button
          onClick={handleCallApi}
          className="rounded-e-3xl border-l bg-blue-300 px-14 py-2 font-bold text-black transition-all duration-300 ease-linear hover:bg-blue-400"
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
                className="ml-2 px-2 py-1 text-gray-400 hover:text-gray-600"
              >
                <span className={`${index != 0 ? "" : "invisible"}`}>-</span>
              </button>
            </div>
          ))}
          <button
            onClick={addHeader}
            className="ml-2 rounded-lg border-2 border-black px-2 py-1 text-slate-100 transition-colors duration-200 hover:bg-orange-400"
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
        <Content
          data={responseData}
          status={responseStatus}
          time={responseTiming}
        ></Content>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setReponseData({})}
          className="rounded border border-gray-300 px-4 py-2 text-black duration-300 hover:bg-blue-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
