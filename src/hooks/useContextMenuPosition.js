import { useLayoutEffect, useRef } from 'react';

function useContextMenuPositon(menuRef, isOpen) {
  const clickCoordsRef = useRef({ x: null, y: null });

  useLayoutEffect(() => {
    if (isOpen) updatePosition();
  });

  function updateClickCoords(x, y) {
    clickCoordsRef.current = { x, y };
  }

  function updatePosition() {
    updateVerticalPosition();
    updateHorizontalPosition();
  }

  function updateVerticalPosition() {
    const menu = menuRef.current;
    const menuHeight = menu.offsetHeight;
    const y = clickCoordsRef.current.y;
    const shouldMoveUp = menuHeight > window.innerHeight - y;

    menu.style.top = shouldMoveUp ? `${y - menuHeight}px` : `${y}px`;
  }

  function updateHorizontalPosition() {
    const menu = menuRef.current;
    const menuWidth = menu.offsetWidth;
    const x = clickCoordsRef.current.x;
    const shouldMoveLeft = menuWidth > window.innerWidth - x;

    menu.style.left = shouldMoveLeft ? `${x - menuWidth}px` : `${x}px`;
  }

  return updateClickCoords;
}

export default useContextMenuPositon;
