import { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextMenu from './PlaylistContextMenu';

function PlaylistContextMenuItemWithSubmenu({
  children: label,
  subMenuItems,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: '',
  });
  const menuItemRef = useRef(null);
  const closeMenuTimer = useRef(null);

  function getMenuPositionXClass() {
    const menuItem = menuItemRef.current;
    const menuItemWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemRightCoordX = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft =
      menuItemWidth > windowWidth - menuItemRightCoordX;

    return shouldMoveMenuLeft ? 'right-full' : 'left-full';
  }

  function getMenuPositionYClass() {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? 'bottom-0' : 'top-0';
  }

  function getMenuPositionClasses() {
    return `${getMenuPositionYClass()} ${getMenuPositionXClass()}`;
  }

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
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
        {label} <ChevronRightIcon className="h-4 w-4" />
      </button>
      {menuState.isOpen && (
        <PlaylistContextMenu
          menuItems={subMenuItems}
          classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuState.positionClasses}`}
        />
      )}
    </li>
  );
}

export default PlaylistContextMenuItemWithSubmenu;
