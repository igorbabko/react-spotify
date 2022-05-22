import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextMenu from './PlaylistContextMenu';
import useSubmenu from '../hooks/useContextSubmenu';

function PlaylistContextMenuItemWithSubmenu({
  children: label,
  submenuItems,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) {
  const submenu = useSubmenu(submenuItems, closePreviousSubmenuIfOpen);

  const bgClass = submenu.isOpen ? 'bg-[#3e3e3e]' : 'hover:bg-[#3e3e3e]';

  return (
    <li
      className="relative"
      onMouseEnter={submenu.open}
      ref={submenu.menuItemRef}
    >
      <button
        className={`w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center ${bgClass}`}
      >
        {label} <ChevronRightIcon className="h-4 w-4" />
      </button>
      {submenu.isOpen && (
        <PlaylistContextMenu
          menuItems={submenu.items}
          classes={`absolute ${submenu.positionClasses}`}
        />
      )}
    </li>
  );
}

export default PlaylistContextMenuItemWithSubmenu;
