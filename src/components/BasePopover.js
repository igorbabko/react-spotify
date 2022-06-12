import { MIN_DESKTOP_WIDTH, debounce } from '../utils';
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import BaseButton from './BaseButton';
import BasePopoverTriangle from './BasePopoverTriangle';

function isCurrentWindowWidthSmall() {
  return window.innerWidth < MIN_DESKTOP_WIDTH;
}

function isCurrentWindowWidthBig() {
  return window.innerWidth >= MIN_DESKTOP_WIDTH;
}

function BasePopover(_, ref) {
  const [isSmallScreen, setIsSmallScreen] = useState(isCurrentWindowWidthSmall);
  const [classes, setClasses] = useState(getHiddenClasses);
  const [target, setTarget] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const showTimer = useRef();
  const nodeRef = useRef();
  const changeWidthTimer = useRef();

  useEffect(() => {
    function handleResize() {
      if (!screenHasBecomeSmall() && !screenHasBecomeBig()) return;

      hide();

      clearTimeout(changeWidthTimer.current);

      changeWidthTimer.current = setTimeout(
        () => setIsSmallScreen(isCurrentWindowWidthSmall),
        300
      );
    }

    function handleClickAway(event) {
      if (target && target.parentNode.contains(event.target)) return;

      if (!nodeRef.current.contains(event.target)) hide();
    }

    const debounceResize = debounce.bind(null, handleResize);

    window.addEventListener('resize', debounceResize);
    document.addEventListener('mousedown', handleClickAway);

    return () => {
      window.removeEventListener('resize', debounceResize);
      document.removeEventListener('mousedown', handleClickAway);
    };
  });

  useImperativeHandle(ref, () => ({ show }));

  function show(title, description, nextTarget, offset) {
    if (target === nextTarget) return;

    clearTimeout(showTimer.current);

    hide();

    showTimer.current = setTimeout(() => {
      moveTo(offset ? offset : calculateTargetOffset(nextTarget));
      setTarget(nextTarget);
      setTitle(title);
      setDescription(description);
      setClasses();
    }, 100);
  }

  function hide() {
    setTarget(null);
    setClasses(getHiddenClasses);
  }

  function getHiddenClasses() {
    const translateClass =
      window.innerWidth < MIN_DESKTOP_WIDTH
        ? 'translate-y-10'
        : 'translate-x-10';

    return `opacity-0 ${translateClass} pointer-events-none`;
  }

  function moveTo({ top, left }) {
    nodeRef.current.style.top = `${top}px`;
    nodeRef.current.style.left = `${left}px`;
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

  return (
    <div
      className={`fixed z-30 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 w-[330px] select-none transition duration-300 ${classes}`}
      ref={nodeRef}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs">{description}</p>
      <div className="mt-6 text-right">
        <BaseButton onClick={hide}>Not now</BaseButton>
        <BaseButton primary>Log in</BaseButton>
      </div>
      <BasePopoverTriangle side={isSmallScreen ? 'top' : 'left'} />
    </div>
  );
}

export default forwardRef(BasePopover);
