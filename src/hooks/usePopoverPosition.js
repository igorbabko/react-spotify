import { useState, useEffect, useRef } from 'react';
import { MIN_DESKTOP_WIDTH, debounce } from '../utils';

function isCurrentWindowWidthSmall() {
  return window.innerWidth < MIN_DESKTOP_WIDTH;
}

function isCurrentWindowWidthBig() {
  return window.innerWidth >= MIN_DESKTOP_WIDTH;
}

function usePopoverPosition(ref, screenChangeCallback) {
  const [isSmallScreen, setIsSmallScreen] = useState(isCurrentWindowWidthSmall);
  const [target, setTarget] = useState();
  const changeWidthTimer = useRef();

  useEffect(() => {
    function handleResize() {
      if (!screenHasBecomeSmall() && !screenHasBecomeBig()) return;

      screenChangeCallback();

      clearTimeout(changeWidthTimer.current);

      changeWidthTimer.current = setTimeout(
        () => setIsSmallScreen(isCurrentWindowWidthSmall),
        300
      );
    }

    const debounceResize = debounce.bind(null, handleResize, 300);

    window.addEventListener('resize', debounceResize);

    return () => window.removeEventListener('resize', debounceResize);
  });

  function move(target, offset) {
    offset = offset || calculateTargetOffset(target);

    ref.current.style.top = `${offset.top}px`;
    ref.current.style.left = `${offset.left}px`;

    setTarget(target);
  }

  function calculateTargetOffset(target) {
    const { top, right, left, height } = target.getBoundingClientRect();

    return {
      top: isSmallScreen ? top + height * 2 : top - (height / 3) * 2,
      left: isSmallScreen ? left : right + 30,
    };
  }

  function screenHasBecomeSmall() {
    return isCurrentWindowWidthSmall() && !isSmallScreen;
  }

  function screenHasBecomeBig() {
    return isCurrentWindowWidthBig() && isSmallScreen;
  }

  return {
    move,
    target,
    setTarget,
    isSmallScreen,
  };
}

export default usePopoverPosition;
