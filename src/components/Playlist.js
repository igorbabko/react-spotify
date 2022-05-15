import { useState, useEffect, useLayoutEffect } from 'react';
import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';
import useContextMenu from '../hooks/useContextMenu';

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

function Playlist({ classes, coverUrl, title, description, toggleScrolling }) {
  const [contextMenuItems, setContextMenuItems] = useState(
    generateContextMenuItems()
  );

  const {
    open: openContextMenu,
    ref: contextMenuRef,
    isOpen: isContextMenuOpen,
  } = useContextMenu();

  const bgClasses = isContextMenuOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]';

  useEffect(() => {
    if (!isContextMenuOpen) return;

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

  useLayoutEffect(() => toggleScrolling(!isContextMenuOpen));

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={openContextMenu}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isContextMenuOpen && (
        <PlaylistContextMenu
          ref={contextMenuRef}
          menuItems={contextMenuItems}
          classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
        />
      )}
    </a>
  );
}

export default Playlist;
