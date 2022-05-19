import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const clickPosition = { x: null, y: null };

function useContextMenu() {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  function updateContextMenuVerticalPosition() {
    const menuHeight = contextMenuRef.current.offsetHeight;
    const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;

    contextMenuRef.current.style.top = shouldMoveUp
      ? `${clickPosition.y - menuHeight}px`
      : `${clickPosition.y}px`;
  }

  function updateContextMenuHorizontalPosition() {
    const menuWidth = contextMenuRef.current.offsetWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

    contextMenuRef.current.style.left = shouldMoveLeft
      ? `${clickPosition.x - menuWidth}px`
      : `${clickPosition.x}px`;
  }

  function updateContextMenuPosition() {
    updateContextMenuVerticalPosition();
    updateContextMenuHorizontalPosition();
  }

  useLayoutEffect(() => {
    if (isContextMenuOpen) updateContextMenuPosition();
  });

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway({ target }) {
      if (!contextMenuRef.current.contains(target)) closeContextMenu();
    }

    function handleEsc({ key }) {
      if (key === 'Escape') closeContextMenu();
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
    };
  });

  function openContextMenu(event) {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;

    setIsContextMenuOpen(true);
  }

  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }

  return {
    openContextMenu,
    isContextMenuOpen,
    contextMenuRef,
  };
}

export default useContextMenu;
