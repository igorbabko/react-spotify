import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';
import useContextMenu from '../hooks/useContextMenu';

function Playlist({ classes, coverUrl, title, description, toggleScrolling }) {
  const {
    bgClasses,
    openContextMenu,
    isContextMenuOpen,
    contextMenuRef,
    contextMenuItems,
  } = useContextMenu(toggleScrolling);

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
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
    </a>
  );
}

export default Playlist;
