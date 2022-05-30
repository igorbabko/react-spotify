import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import BaseButton from './BaseButton';

const HIDDEN_CLASSES = 'opacity-0 translate-x-1 pointer-events-none';

function BasePopover(_, ref) {
  const [classes, setClasses] = useState(HIDDEN_CLASSES);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const showTimer = useRef();
  const nodeRef = useRef();

  useEffect(() => {
    function handleClickAway({ target }) {
      if (!nodeRef.current.contains(target)) hide();
    }

    document.addEventListener('mousedown', handleClickAway);

    return () => document.removeEventListener('mousedown', handleClickAway);
  });

  useImperativeHandle(ref, () => ({ show }));

  function show(title, description) {
    clearTimeout(showTimer.current);

    hide();

    showTimer.current = setTimeout(() => {
      setClasses('');
      setTitle(title);
      setDescription(description);
    }, 100);
  }

  function hide() {
    setClasses(HIDDEN_CLASSES);
  }

  return (
    <div
      className={`fixed top-[227px] left-[215px] z-30 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 w-[330px] select-none transition duration-300 ${classes}`}
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