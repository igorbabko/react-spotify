import { useState, useEffect, useLayoutEffect } from 'react';
import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';
import useContextMenu from '../hooks/useContextMenu';

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

function Playlist({ classes, coverUrl, title, description, toggleScrolling }) {
  const [menuItems, setMenuItems] = useState(generateMenuItems);

  const {
    openContextMenu: openMenu,
    isContextMenuOpen: isMenuOpen,
    contextMenuRef: menuRef,
  } = useContextMenu();

  useLayoutEffect(() => toggleScrolling(!isMenuOpen));

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleAltKeydown({ key }) {
      if (key === 'Alt') setMenuItems(generateMenuItems(true));
    }

    function handleAltKeyup({ key }) {
      if (key === 'Alt') setMenuItems(generateMenuItems());
    }

    document.addEventListener('keydown', handleAltKeydown);
    document.addEventListener('keyup', handleAltKeyup);

    return () => {
      document.removeEventListener('keydown', handleAltKeydown);
      document.removeEventListener('keyup', handleAltKeyup);
    };
  });

  const bgClasses = isMenuOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]';

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={openMenu}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isMenuOpen && (
        <PlaylistContextMenu
          ref={menuRef}
          menuItems={menuItems}
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
    </a>
  );
}

export default Playlist;
