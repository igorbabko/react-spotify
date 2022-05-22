import { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextMenu from './PlaylistContextMenu';

function PlaylistContextMenuItemWithSubmenu({
  children: label,
  submenuItems,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: '',
  });
  const menuItemRef = useRef(null);
  const closeMenuTimer = useRef(null);
  const bgClass = menuState.isOpen ? 'bg-[#3e3e3e]' : 'hover:bg-[#3e3e3e]';

  useContextSubmenu(menuItemRef, submenuItems);

  function openMenu() {
    closePreviousSubmenuIfOpen(startCloseMenuTimer);

    setMenuState({
      isOpen: true,
      positionClasses: getMenuPositionClasses(),
    });
  }

  function closeMenu() {
    setMenuState({
      isOpen: false,
      positionClasses: '',
    });
  }

  function startCloseMenuTimer() {
    closeMenuTimer.current = setTimeout(closeMenu, 100);
  }

  function stopCloseMenuTimer() {
    clearTimeout(closeMenuTimer.current);
  }

  useEffect(() => stopCloseMenuTimer);

  return (
    <li className="relative" onMouseEnter={openMenu} ref={menuItemRef}>
      <button
        className={`w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center ${bgClass}`}
      >
        {label} <ChevronRightIcon className="h-4 w-4" />
      </button>
      {menuState.isOpen && (
        <PlaylistContextMenu
          menuItems={submenuItems}
          classes={`absolute ${menuState.positionClasses}`}
        />
      )}
    </li>
  );
}

export default PlaylistContextMenuItemWithSubmenu;
