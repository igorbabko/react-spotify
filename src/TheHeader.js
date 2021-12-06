function TheHeader() {
  return (
    <header className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
      <div className="flex">
        <a
          href="#sidebar"
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
        <a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        <a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      <div>
        <button className="text-white text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105">
          Sign Up
        </button>
        <button className="bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105">
          Log In
        </button>
      </div>
    </header>
  );
}

export default TheHeader;
