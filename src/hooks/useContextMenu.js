import { useState, useEffect, useRef } from 'react';
import usePosition from './useContextMenuPosition';

function useContextMenu(items) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const move = usePosition(ref, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickAway({ target }) {
      if (!ref.current.contains(target)) close();
    }

    function handleEsc({ key }) {
      if (key === 'Escape') close();
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
    };
  });

  function open(event) {
    event.preventDefault();

    move(event.clientX, event.clientY);

    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    ref,
    open,
    close,
    isOpen,
    items,
  };
}

export default useContextMenu;
