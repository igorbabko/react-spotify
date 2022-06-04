import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import BaseButton from './BaseButton';

const isSmallScreen = window.innerWidth < 700;
const translateClass = isSmallScreen ? 'translate-y-1' : 'translate-x-1';
const HIDDEN_CLASSES = `opacity-0 ${translateClass} pointer-events-none`;

function BasePopover(_, ref) {
  const [classes, setClasses] = useState(HIDDEN_CLASSES);
  const [target, setTarget] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const showTimer = useRef();
  const nodeRef = useRef();

  useEffect(() => {
    if (!target) return;

    function handleClickAway(event) {
      if (target.parentNode.contains(event.target)) return;

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
      moveTo(offset ? offset : calculateTargetOffset(nextTarget));
      setTarget(nextTarget);
      setTitle(title);
      setDescription(description);
      setClasses();
    }, 100);
  }

  function hide() {
    setTarget(null);
    setClasses(HIDDEN_CLASSES);
  }

  function moveTo(offset) {
    nodeRef.current.style.top = `${offset.top}px`;
    nodeRef.current.style.left = `${offset.left}px`;
  }

  function calculateTargetOffset(target) {
    const { top, right, left, height } = target.getBoundingClientRect();

    return {
      top: isSmallScreen ? top + height * 2 : top - (height / 3) * 2,
      left: isSmallScreen ? left : right + 30,
    };
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
      <div className="w-20 h-20 absolute -top-4 -left-20 flex justify-end items-center overflow-hidden pointer-events-none">
        <div className="w-3 h-3 bg-[#0e72ea] translate-x-1/2 rotate-45 shadow-3xl pointer-events-auto"></div>
      </div>
    </div>
  );
}

export default forwardRef(BasePopover);
