function PlaylistContextMenu() {
  return (
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
  );
}

export default PlaylistContextMenu;
