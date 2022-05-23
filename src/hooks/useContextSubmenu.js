import { useState, useEffect, useRef } from 'react';

function useContextSubmenu(items, closePreviousIfOpen, menuItemRef) {
  const [state, setState] = useState({
    isOpen: false,
    positionClasses: '',
  });
  const closeTimer = useRef(null);

  function open() {
    closePreviousIfOpen(startCloseTimer);

    setState({
      isOpen: true,
      positionClasses: getPositionClasses(),
    });
  }

  function close() {
    setState({
      isOpen: false,
      positionClasses: '',
    });
  }

  function startCloseTimer() {
    closeTimer.current = setTimeout(close, 100);
  }

  function stopCloseTimer() {
    clearTimeout(closeTimer.current);
  }

  useEffect(() => stopCloseTimer);

  function getPositionClasses() {
    return `${getPositionYClass()} ${getPositionXClass()}`;
  }

  function getPositionYClass() {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * items.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveUp ? 'bottom-0' : 'top-0';
  }

  function getPositionXClass() {
    const menuItem = menuItemRef.current;
    const menuItemWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemRightCoordX = menuItem.getBoundingClientRect().right;
    const shouldMoveLeft = menuItemWidth > windowWidth - menuItemRightCoordX;

    return shouldMoveLeft ? 'right-full' : 'left-full';
  }

  return {
    open,
    items,
    ...state,
  };
}

export default useContextSubmenu;
