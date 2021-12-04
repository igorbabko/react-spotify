function App() {
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <aside
          id="sidebar"
          className="bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer"
        >
          <a href="/" className="text-white inline-block my-6 px-6 w-full">
            <svg viewBox="0 0 1134 340" className="w-[130px]">
              <title>Spotify</title>
              <path
                fill="currentColor"
                d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
              ></path>
            </svg>
          </a>
          <nav>
            <a
              href="/"
              className="flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-4 text-sm font-semibold">Home</span>
            </a>
            <a
              href="/"
              className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="ml-4 text-sm font-semibold">Search</span>
            </a>
            <a
              href="/"
              className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300 mb-6"
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
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
              <span className="ml-4 text-sm font-semibold">Your Library</span>
            </a>
            <a
              href="/"
              className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
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
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-4 text-sm font-semibold">
                Create Playlist
              </span>
            </a>
            <a
              href="/"
              className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="ml-4 text-sm font-semibold">Liked Songs</span>
            </a>
          </nav>
          <footer className="mt-auto mb-8 ml-6">
            <ul>
              <li>
                <a href="/" className="text-[11px] hover:underline py-2">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/" className="text-[11px] hover:underline py-2">
                  Privacy
                </a>
              </li>
            </ul>
          </footer>
        </aside>
        <a
          href="#main"
          className="fixed inset-0 bg-black opacity-0 peer-target:opacity-50 pointer-events-none peer-target:pointer-events-auto z-20 lg:hidden cursor-default transition-opacity"
        >
          &nbsp;
        </a>
        <div className="flex-1 overflow-auto">
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
              <a
                href="/"
                className="mr-[8px] text-[#969696] p-1 cursor-not-allowed"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="ml-[8px] text-[#969696] p-1 cursor-not-allowed"
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
          <main className="text-white relative">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
              <div>
                <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                  <div>
                    <h2 className="text-2xl font-semibold hover:underline capitalize">
                      <a href="/">Lorem ipsum dolor sit</a>
                    </h2>
                  </div>
                  <a
                    href="/"
                    className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                  >
                    See all
                  </a>
                </div>
                <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  <a
                    href="/"
                    className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                    <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Add to Your Library
                        </button>
                      </li>
                      <li className="relative">
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                          Share
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        </button>
                        <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Copy link to playlist
                            </button>
                          </li>
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Embed playlist
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          About recommendations
                        </button>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Open in Desktop app
                        </button>
                      </li>
                    </ul>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                  <div>
                    <h2 className="text-2xl font-semibold hover:underline capitalize">
                      <a href="/">Lorem ipsum dolor</a>
                    </h2>
                    <p className="text-sm text-[#b3b3b3]">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                  >
                    See all
                  </a>
                </div>
                <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  <a
                    href="/"
                    className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                    <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Add to Your Library
                        </button>
                      </li>
                      <li className="relative">
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                          Share
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        </button>
                        <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Copy link to playlist
                            </button>
                          </li>
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Embed playlist
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          About recommendations
                        </button>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Open in Desktop app
                        </button>
                      </li>
                    </ul>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                  <div>
                    <h2 className="text-2xl font-semibold hover:underline capitalize">
                      <a href="/">Lorem ipsum</a>
                    </h2>
                    <p className="text-sm text-[#b3b3b3]">
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                  >
                    See all
                  </a>
                </div>
                <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  <a
                    href="/"
                    className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                    <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Add to Your Library
                        </button>
                      </li>
                      <li className="relative">
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                          Share
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        </button>
                        <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Copy link to playlist
                            </button>
                          </li>
                          <li>
                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Embed playlist
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          About recommendations
                        </button>
                      </li>
                      <li>
                        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                          Open in Desktop app
                        </button>
                      </li>
                    </ul>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                  <a
                    href="/"
                    className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                  >
                    <div className="relative">
                      <img
                        src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster"
                        className="rounded shadow-lg"
                        alt=""
                      />
                      <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </button>
                    </div>
                    <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">
                      Playlist title
                    </h3>
                    <p className="text-sm text-[#b3b3b3] line-clamp-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, odit.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <a
        href="/"
        className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2"
      >
        <div>
          <p className="text-xs uppercase tracking-wider mb-1">
            Preview of Spotify
          </p>
          <p className="leading-6 text-[14px] tracking-wide">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="bg-white text-[#2c77d0] text-[14px] font-semibold leading-5 tracking-widest uppercase py-[9px] px-[48px] rounded-full hover:scale-105">
          Sign up free
        </button>
      </a>
    </>
  );
}

export default App;
