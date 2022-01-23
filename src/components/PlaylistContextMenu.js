import React, { useRef } from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';
import PlaylistContextMenuItemWithSubmenu from './PlaylistContextMenuItemWithSubmenu';

function PlaylistContextMenu({ classes, menuItems }, ref) {
  let closeSubmenuRef = useRef();

  function closeSubmenuIfOpen(closeSubmenu = null) {
    if (closeSubmenuRef.current && closeSubmenuRef.current !== closeSubmenu) {
      closeSubmenuRef.current();
    }

    closeSubmenuRef.current = closeSubmenu;
  }

  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => {
        if (subMenuItems) {
          return (
            <PlaylistContextMenuItemWithSubmenu
              key={label}
              subMenuItems={subMenuItems}
              onMouseEnter={closeSubmenuIfOpen}
            >
              {label}
            </PlaylistContextMenuItemWithSubmenu>
          );
        }

        return (
          <PlaylistContextMenuItem
            key={label}
            onMouseEnter={closeSubmenuIfOpen}
          >
            {label}
          </PlaylistContextMenuItem>
        );
      })}
    </ul>
  );
}

export default React.forwardRef(PlaylistContextMenu);
