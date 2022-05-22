function useContextSubmenu(menuItemRef, submenuItems) {
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
    const menuHeight = menuItem.offsetHeight * submenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? 'bottom-0' : 'top-0';
  }

  function getMenuPositionClasses() {
    return `${getMenuPositionYClass()} ${getMenuPositionXClass()}`;
  }
}

export default useContextSubmenu;
