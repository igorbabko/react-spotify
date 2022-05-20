import { useLayoutEffect } from 'react';

const clickPosition = { x: null, y: null };

function useContextMenuPosition(ref, isOpen) {
  useLayoutEffect(() => {
    if (isOpen) updatePosition();
  });

  function updatePosition() {
    updateVerticalPosition();
    updateHorizontalPosition();
  }

  function updateVerticalPosition() {
    const y = clickPosition.y;
    const menuHeight = ref.current.offsetHeight;
    const shouldMoveUp = menuHeight > window.innerHeight - y;

    ref.current.style.top = `${shouldMoveUp ? y - menuHeight : y}px`;
  }

  function updateHorizontalPosition() {
    const x = clickPosition.x;
    const menuWidth = ref.current.offsetWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - x;

    ref.current.style.left = `${shouldMoveLeft ? x - menuWidth : x}px`;
  }

  function updateClickCoordinates(x, y) {
    clickPosition.x = x;
    clickPosition.y = y;
  }

  return updateClickCoordinates;
}

export default useContextMenuPosition;
