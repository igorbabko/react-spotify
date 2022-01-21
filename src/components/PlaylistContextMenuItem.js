import { useState, useRef } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextMenu from './PlaylistContextMenu';

function PlaylistContextMenuItem({ children: label, subMenuItems }) {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: '',
  });
  const menuItemRef = useRef(null);

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

  if (subMenuItems) {
    return (
      <li
        className="relative"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={menuItemRef}
      >
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

  return (
    <li>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
}

export default PlaylistContextMenuItem;
