import React, { useRef } from 'react';
import PlaylistContextMenuItem from './PlaylistContextMenuItem';
import PlaylistContextMenuItemWithSubmenu from './PlaylistContextMenuItemWithSubmenu';

function PlaylistContextMenu({ classes, menuItems }, ref) {
  let closePreviousSubmenu = useRef(null);

  function closePreviousSubmenuIfOpen(closeSubmenu = null) {
    if (closePreviousSubmenu.current) closePreviousSubmenu.current();

    closePreviousSubmenu.current = closeSubmenu;
  }

  return (
    <ul
      className={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded cursor-default whitespace-nowrap z-10 shadow-3xl ${classes}`}
      ref={ref}
    >
      {menuItems.map(({ label, subMenuItems, classes: menuItemClasses }) => {
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
            classes={menuItemClasses}
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
