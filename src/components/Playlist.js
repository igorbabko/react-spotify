import { useState, useEffect, useLayoutEffect } from 'react';
import useMenu from '../hooks/useContextMenu';
import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';

function Playlist({
  classes,
  coverUrl,
  title,
  description,
  showToast,
  toggleScrolling,
}) {
  function generateMenuItems(isAlternate = false) {
    return [
      {
        label: 'Add to Your Library',
        action: () => {
          menu.close();
          document.querySelector('nav a:nth-child(4)').click();
        },
      },
      {
        label: 'Share',
        submenuItems: [
          {
            label: isAlternate ? 'Copy Spotify URI' : 'Copy link to playlist',
            classes: 'min-w-[150px]',
            action: () => {
              navigator.clipboard.writeText(title).then(() => {
                menu.close();
                showToast('Link copied to clipboard');
              });
            },
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

  const [menuItems, setMenuItems] = useState(generateMenuItems);
  const menu = useMenu(menuItems);

  useLayoutEffect(() => toggleScrolling(!menu.isOpen));

  useEffect(() => {
    if (!menu.isOpen) return;

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

  const bgClasses = menu.isOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]';

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}`}
      onClick={(event) => event.preventDefault()}
      onContextMenu={menu.open}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {menu.isOpen && (
        <PlaylistContextMenu
          ref={menu.ref}
          menuItems={menu.items}
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
    </a>
  );
}

export default Playlist;
