import { useState, useEffect, useRef } from 'react';
import usePosition from './useContextMenuPosition';

function useContextMenu(generateMenuItems = () => {}) {
  // const [menuItems, setMenuItems] = useState(generateMenuItems());
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const { setClickPosition } = usePosition(ref, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickAway(event) {
      if (!ref.current.contains(event.target)) {
        close();
      }
    }

    function handleEsc({ key }) {
      if (key === 'Escape') {
        close();
      }
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

    setClickPosition(event);

    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    ref,
    open,
    isOpen,
    // menuItems,
  };
}

export default useContextMenu;
