import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';

function Playlist() {
  return (
    <a
      href="/"
      className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
    >
      <div className="relative">
        <PlaylistCover />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle />
      <PlaylistDescription />
      <PlaylistContextMenu />
    </a>
  );
}

export default Playlist;
