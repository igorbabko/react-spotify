import PlaylistCover from './PlaylistCover';
import PlaylistButtonPlay from './PlaylistButtonPlay';
import PlaylistTitle from './PlaylistTitle';
import PlaylistDescription from './PlaylistDescription';
import PlaylistContextMenu from './PlaylistContextMenu';

const menuItems = [
  {
    label: 'Add to Your Library',
  },
  {
    label: 'Share',
    subMenuItems: [
      {
        label: 'Copy link to playlist',
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
      <PlaylistContextMenu
        menuItems={menuItems}
        classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block"
      />
    </a>
  );
}

export default Playlist;
