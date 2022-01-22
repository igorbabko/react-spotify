function PlaylistContextMenuItem({
  children: label,
  onMouseEnter: closeSubmenuIfOpen,
}) {
  return (
    <li onMouseEnter={() => closeSubmenuIfOpen()}>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlaylistContextMenuItem;
