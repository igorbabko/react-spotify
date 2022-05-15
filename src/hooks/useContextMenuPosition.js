import { useLayoutEffect, useRef } from 'react';

function useContextMenuPositon(ref, isOpen) {
  const clickPositionRef = useRef({ x: null, y: null });

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  });

  function setClickPosition(event) {
    clickPositionRef.current.x = event.clientX;
    clickPositionRef.current.y = event.clientY;
  }

  function updatePosition() {
    updateVerticalPosition();
    updateHorizontalPosition();
  }

  function updateVerticalPosition() {
    const menuHeight = ref.current.offsetHeight;
    const shouldMoveUp = menuHeight > window.innerHeight - clickPositionRef.current.y;

    ref.current.style.top = shouldMoveUp
      ? `${clickPositionRef.current.y - menuHeight}px`
      : `${clickPositionRef.current.y}px`;
  }

  function updateHorizontalPosition() {
    const menuWidth = ref.current.offsetWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - clickPositionRef.current.x;

    ref.current.style.left = shouldMoveLeft
      ? `${clickPositionRef.current.x - menuWidth}px`
      : `${clickPositionRef.current.x}px`;
  }

  return {
    setClickPosition
  }
}

export default useContextMenuPositon;
