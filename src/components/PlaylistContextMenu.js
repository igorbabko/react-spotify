import { useEffect } from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';

function PlaylistContextMenu({ classes, menuItems, onClose }) {
  useEffect(() => {
    document.addEventListener('mousedown', onClose);

    return () => {
      document.removeEventListener('mousedown', onClose);
    };
  });

  return (
    <ul className={classes}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlaylistContextMenuItem>
      ))}
    </ul>
  );
}

export default PlaylistContextMenu;
