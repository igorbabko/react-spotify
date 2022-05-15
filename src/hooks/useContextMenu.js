import { useState, useEffect, useRef } from 'react';
import usePosition from './useContextMenuPosition';

function generateMenuItems(isAlternate = false) {
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

function useContextMenu() {
  const [menuItems, setMenuItems] = useState(generateMenuItems());
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

    function handleAltKeydown({ key }) {
      if (key === 'Alt' && isOpen) {
        setMenuItems(generateMenuItems(true));
      }
    }

    function handleAltKeyup({ key }) {
      if (key === 'Alt' && isOpen) {
        setMenuItems(generateMenuItems());
      }
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('keydown', handleAltKeydown);
    document.addEventListener('keyup', handleAltKeyup);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('keydown', handleAltKeydown);
      document.removeEventListener('keyup', handleAltKeyup);
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
    menuItems,
  };
}

export default useContextMenu;
