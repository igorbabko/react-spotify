import { useEffect, useRef } from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';

function PlaylistContextMenu({ classes, menuItems, onClose: handleClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickAway(event) {
      if (!menuRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  });

  return (
    <ul className={classes} ref={menuRef}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlaylistContextMenuItem>
      ))}
    </ul>
  );
}

export default PlaylistContextMenu;
