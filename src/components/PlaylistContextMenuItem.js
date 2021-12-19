import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextMenu from './PlaylistContextMenu';

function PlaylistContextMenuItem({ children: label, subMenuItems }) {
  if (subMenuItems) {
    return (
      <li className="relative">
        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
          {label} <ChevronRightIcon className="h-4 w-4" />
        </button>
        <PlaylistContextMenu
          menuItems={subMenuItems}
          classes="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default"
        />
      </li>
    );
  }

  return (
    <li>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlaylistContextMenuItem;
