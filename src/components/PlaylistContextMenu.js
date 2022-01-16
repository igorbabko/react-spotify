import React from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';

function PlaylistContextMenu({ classes, menuItems }, ref) {
  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlaylistContextMenuItem>
      ))}
    </ul>
  );
}

export default React.forwardRef(PlaylistContextMenu);
