import { memo } from "react";
import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
interface ContentProps {
  data?: object | string | null;
}

export const Content = memo(({ data }: ContentProps) => {
  return (
    <Prism
      language="json"
      className="h-48 snap-mandatory overflow-scroll text-wrap rounded-lg"
      style={darcula}
    >
      {JSON.stringify(data, null, 4)}
    </Prism>
  );
});
