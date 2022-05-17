import { useState, useEffect, useLayoutEffect, useRef } from 'react';

function generateContextMenuItems(isAlternate = false) {
  return [
    {
      label: 'Add to Your Library',
    },
    {
      label: 'Share',
      subMenuItems: [
        {
          label: isAlternate ? 'Copy Spotify URI' : 'Copy link to playlist',
          classes: 'min-w-[150px]',
        },
        {
          label: 'Embed playlist',
        },
      ],
    },
    {
      label: 'About recommendations',
    },
    {
      label: 'Open in Desktop app',
    },
  ];
}

const clickPosition = { x: null, y: null };

function useContextMenu(toggleScrolling = () => {}) {
  const [contextMenuItems, setContextMenuItems] = useState(
    generateContextMenuItems
  );
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const bgClasses = isContextMenuOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]';

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
    toggleScrolling(!isContextMenuOpen);

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

  useEffect(() => {
    function handleAltKeydown({ key }) {
      if (key === 'Alt' && isContextMenuOpen) {
        setContextMenuItems(generateContextMenuItems(true));
      }
    }

    function handleAltKeyup({ key }) {
      if (key === 'Alt' && isContextMenuOpen) {
        setContextMenuItems(generateContextMenuItems());
      }
    }

    document.addEventListener('keydown', handleAltKeydown);
    document.addEventListener('keyup', handleAltKeyup);

    return () => {
      document.removeEventListener('keydown', handleAltKeydown);
      document.removeEventListener('keyup', handleAltKeyup);
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
    bgClasses,
    openContextMenu,
    isContextMenuOpen,
    contextMenuRef,
    contextMenuItems,
  };
}

export default useContextMenu;
