function PlaylistContextMenuItem({
  children: label,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) {
  return (
    <li onMouseEnter={() => closePreviousSubmenuIfOpen()}>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlaylistContextMenuItem;
