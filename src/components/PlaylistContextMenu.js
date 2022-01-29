import React, { useRef } from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';
import PlaylistContextMenuItemWithSubmenu from './PlaylistContextMenuItemWithSubmenu';

function PlaylistContextMenu({ classes, menuItems }, ref) {
  let closePreviousSubmenu = useRef(null);

  function closePreviousSubmenuIfOpen(closeSubmenu = null) {
    if (closePreviousSubmenu.current) {
      closePreviousSubmenu.current();
    }

    closePreviousSubmenu.current = closeSubmenu;
  }

  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, alternateLabel, subMenuItems, classes }) => {
        if (subMenuItems) {
          return (
            <PlaylistContextMenuItemWithSubmenu
              key={label}
              subMenuItems={subMenuItems}
              onMouseEnter={closePreviousSubmenuIfOpen}
            >
              {label}
            </PlaylistContextMenuItemWithSubmenu>
          );
        }

        return (
          <PlaylistContextMenuItem
            key={label}
            classes={classes}
            alternateLabel={alternateLabel}
            onMouseEnter={closePreviousSubmenuIfOpen}
          >
            {label}
          </PlaylistContextMenuItem>
        );
      })}
    </ul>
  );
}

export default React.forwardRef(PlaylistContextMenu);
