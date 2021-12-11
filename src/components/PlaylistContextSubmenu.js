import PlaylistContextMenuItem from './PlaylistContextMenuItem';

function PlaylistContextSubmenu({ menuItems }) {
  return (
    <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
      {menuItems.map(({ label }) => (
        <PlaylistContextMenuItem key={label}>{label}</PlaylistContextMenuItem>
      ))}
    </ul>
  );
}

export default PlaylistContextSubmenu;
