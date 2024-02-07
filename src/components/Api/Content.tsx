import { memo } from "react";
import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
interface ContentProps {
  data?: object | string | null;
  status?: number | null;
  time?: number;
}

export const Content = memo(
  ({ data = "Result here", status, time }: ContentProps) => {
    return (
      <div className="items-ends flex h-full w-full flex-col">
        <div className="flex items-center justify-end">
          <ul className="flex space-x-4 text-nowrap text-xs font-thin">
            <li className="">Status: {status || "_"}</li>
            <li className="">Time: {time?.toFixed(0) || "_"} ms</li>
          </ul>
        </div>
        <Prism
          language="json"
          className="h-48 snap-mandatory overflow-scroll text-wrap rounded-lg"
          style={darcula}
        >
          {JSON.stringify(data, null, 4) || "Result here!"}
        </Prism>
      </div>
    );
  },
);
