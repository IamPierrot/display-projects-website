export const Api = () => {
  return (
    <div className="flex-grow p-4 pt-12 font-mono">
      <div className="mb-4 flex border-collapse items-center rounded-3xl border border-none bg-gray-600">
        <div className="relative flex rounded-s-3xl border-r px-14 py-2 transition-colors duration-300 hover:bg-green-400 hover:bg-opacity-100">
          <h1 className="">GET</h1>
          <span className="absolute right-2 top-0.5 text-xl">&#11024;</span>
        </div>
        <input
          type="text"
          placeholder="API URL"
          className="!important flex-grow rounded-r border-none bg-gray-600 py-2 placeholder-white focus:outline-0 focus:ring-0"
        />
        <button className="rounded-e-3xl border-l px-4 py-2 text-white hover:bg-blue-400">
          Send Request
        </button>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-2 text-lg font-bold text-white">Headers</h3>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Key"
            className="mr-4 flex-grow rounded-l border border-gray-300 px-4 py-2"
          />
          <input
            type="text"
            placeholder="Value"
            className="flex-grow rounded-r border border-gray-300 px-4 py-2"
          />
          <button className="ml-2 px-2 py-1 text-gray-400 hover:text-gray-600">
            +
          </button>
        </div>
        <h3 className="mb-2 text-lg font-bold text-white">Body</h3>
        <textarea
          placeholder="Request body"
          className="h-32 rounded border border-gray-300 p-4"
        ></textarea>
      </div>

      <div className="mt-4 flex justify-between">
        <button className="rounded border border-gray-300 px-4 py-2 duration-300 hover:bg-gray-100">
          Clear
        </button>
      </div>
    </div>
  );
};
