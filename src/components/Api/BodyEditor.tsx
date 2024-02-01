import { memo } from "react";

interface BodyProps {
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
}

export const BodyEditor = memo(({ body, setBody }: BodyProps) => {
  return (
    <div className="flex">
      <textarea
        placeholder="Request body"
        className="h-32 w-full rounded border border-gray-300 p-4 focus:outline"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>
    </div>
  );
});
