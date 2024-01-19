const iconArray = [
  <a href="https://www.facebook.com/groups/neyugang" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    </svg>
  </a>,
  <a href="https://discord.gg/neyuq" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-discord"
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
  </a>,
];

export const Footer = () => {
  return (
    <footer className=" h-64 w-full justify-between text-balance bg-[--primary-footer-color]  pl-10 pt-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex w-fit space-x-4">
        {iconArray.map((value, index) => {
          return (
            <div className="hover:text-sky-900" key={index}>
              {value}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 pt-5 font-mono">
        <h1 className="text-pretty text-2xl font-extrabold">
          <div className="w-fit">
            <h1>YÊU ĐƯƠNG VỚ VẨN</h1>
            <h1>LOVE IS NONSENSE</h1>
            <hr className="h-1 bg-gray-700"></hr>
            <ul className="text-xl">
              <li>Quote: @kry</li>
              <li>Design: @kry</li>
            </ul>
          </div>
        </h1>

        <div>
          <label className="text-pretty text-3xl font-bold text-stone-900">
            CONTACT
          </label>
          <ul className="hover:font-blue pt-5 transition delay-150 duration-300 ease-in-out">
            <li className="">chomeo836@gmail.com</li>
            <li className="">dinhuynhyen913@gmail.com</li>
            <li className="whitespace-nowrap text-lg font-bold">
              <button className="underline">SEND NOW&#8599;</button>
            </li>
          </ul>
        </div>

        <div className="w-fit items-center justify-center text-pretty text-3xl font-bold text-stone-900">
          <label>LANGUAGES & TOOLS</label>
          <div className="pt-5">
            <div className="h-fit text-2xl">
              <img
                src="https://skillicons.dev/icons?i=ts,js,nodejs,cpp,py,vscode,visualstudio,github,git,discord&theme=dark&perline=5"
                alt="Languages and Tools"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
