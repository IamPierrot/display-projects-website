import React from "react";

interface Card {
  visible: boolean;
  close: () => void;
  title: string;
  desc: string | null | undefined;
  language: string | null | undefined;
  create_at: undefined | null | string;
}

const languageType: Record<string, string> = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  TypeScript: "ts",
  Python: "python",
  "C++": "c++",
};

// chuyển dạng yyyy-mm-ddThh:mm:ssZ sang dạng dd/mm/yyyy
const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};

export const ModalCard: React.FC<Card> = ({
  visible,
  close,
  title,
  desc,
  language,
  create_at,
}) => {
  if (!visible) return;

  return (
    <div className="fixed inset-0 top-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative h-1/2 w-2/5 animate-popupModal rounded-xl bg-white p-3">
        <header className="flex h-[3vh] w-full items-center justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          <h3 className="cursor-pointer text-2xl font-bold" onClick={close}>
            &#10539;
          </h3>
        </header>
        <div className="mt-4 text-center">
          <span>{desc}</span>
        </div>
        {desc?.length && (
          <div className="flex w-full justify-center">
            <div className="mt-3 w-2/3 border border-gray-300"></div>
          </div>
        )}
        <div className="mt-3">
          <span className="flex items-center gap-2">
            {language?.length && (
              <>
                Ngôn ngữ chính:
                <img
                  src={`../../src/assets/${languageType[language]}.png`}
                  alt="language's image"
                  className="h-[30px] w-[30px]"
                />
              </>
            )}
          </span>
        </div>
        <div className="flex h-1/2 w-full items-center justify-center">
          <button className="rounded-lg border-none bg-blue-400 p-2">
            View Source
          </button>
        </div>
        <h2 className="absolute bottom-2">{formatDate(create_at!)}</h2>
      </div>
    </div>
  );
};
