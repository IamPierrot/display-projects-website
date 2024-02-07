import React from "react"

interface Card {
    visible: boolean;
    close: () => void;
    title: string;
    desc: string | null | undefined;
    language: string | null | undefined;
    create_at: undefined | null | string;
}

const languageType: Record<string, string> = {
    "HTML": "html",
    "CSS": "css",
    "JavaScript": "js",
    "TypeScript": "ts",
    "Python": "python",
    "C++": "c++"
}

// chuyển dạng yyyy-mm-ddThh:mm:ssZ sang dạng dd/mm/yyyy
const formatDate = (inputDate: string): string => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};
  
  
export const ModalCard: React.FC<Card> = ({visible, close, title, desc, language, create_at}) => {
    if (!visible) return;

    return (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="relative bg-white w-2/5 h-1/2 p-3 rounded-xl animate-popupModal">
                <header className="w-full h-[3vh] flex justify-between items-center">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <h3
                        className="cursor-pointer font-bold text-2xl"
                        onClick={close}
                        >
                        &#10539;
                    </h3>
                </header>
                <div className="text-center mt-4">
                    <span>{desc}</span>
                </div>
                {
                    desc?.length && 
                    <div className="w-full flex justify-center">
                        <div className="w-2/3 border border-gray-300 mt-3"></div>
                    </div>
                }
                <div className="mt-3">
                    <span className="flex items-center gap-2">
                        {
                            language?.length && 
                            <>
                                Ngôn ngữ chính: 
                                <img 
                                    src={`../../src/assets/${languageType[language]}.png`} alt="language's image" 
                                    className="w-[30px] h-[30px]"
                                />
                            </>
                        }
                    </span>
                </div>
                <div className="w-full h-1/2 flex justify-center items-center">
                    <button className="border-none bg-blue-400 p-2 rounded-lg">
                        View Source
                    </button>
                </div>
                <h2 className="absolute bottom-2">{formatDate(create_at!)}</h2>
            </div>
        </div>
    )
}
