import { MIN_DESKTOP_WIDTH } from '../utils';
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import usePosition from '../hooks/usePopoverPosition';
import BaseButton from './BaseButton';
import BasePopoverTriangle from './BasePopoverTriangle';

function BasePopover(_, ref) {
  const [classes, setClasses] = useState(getHiddenClasses);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const showTimer = useRef();
  const nodeRef = useRef();
  const { move, target, setTarget, isSmallScreen } = usePosition(nodeRef, hide);

  useEffect(() => {
    function handleClickAway(event) {
      if (target && target.parentNode.contains(event.target)) return;

      if (!nodeRef.current.contains(event.target)) hide();
    }

    document.addEventListener('mousedown', handleClickAway);

    return () => document.removeEventListener('mousedown', handleClickAway);
  });

  useImperativeHandle(ref, () => ({ show }));

  function show(title, description, nextTarget, offset) {
    if (target === nextTarget) return;

    clearTimeout(showTimer.current);

    hide();

    showTimer.current = setTimeout(() => {
      move(nextTarget, offset);
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
