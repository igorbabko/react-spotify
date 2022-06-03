import Playlist from './Playlist';

const playlists = [
  {
    classes: '',
    title: 'Playlist title 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden sm:block',
    title: 'Playlist title 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden lg:block',
    title: 'Playlist title 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden xl:block',
    title: 'Playlist title 4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 2xl:block',
    title: 'Playlist title 5',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 3xl:block',
    title: 'Playlist title 6',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 4xl:block',
    title: 'Playlist title 7',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 5xl:block',
    title: 'Playlist title 8',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 6xl:block',
    title: 'Playlist title 9',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
];

function TheMain({ showToast, toggleScrolling }) {
  return (
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
            {playlists.map((playlist) => (
              <Playlist
                key={playlist.title}
                showToast={showToast}
                toggleScrolling={toggleScrolling}
                {...playlist}
              />
            ))}
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
              <p className="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit.</p>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                odit.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TheMain;
