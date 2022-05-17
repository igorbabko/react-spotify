import TheLogo from './TheLogo';
import TheNav from './TheNav';
import TheFooter from './TheFooter';
import PlaylistContextMenu from './PlaylistContextMenu';
import useContextMenu from '../hooks/useContextMenu';

function TheSidebar() {
  const {
    openContextMenu,
    isContextMenuOpen,
    contextMenuRef,
    contextMenuItems,
  } = useContextMenu();

  return (
    <aside
      id="sidebar"
      className="bg-black w-[256px] text-[#b2b2b2] flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer"
      onContextMenu={openContextMenu}
    >
      <TheLogo />
      <TheNav />
      <TheFooter />
      {isContextMenuOpen && (
        <PlaylistContextMenu
          ref={contextMenuRef}
          menuItems={contextMenuItems}
          classes="fixed divide-y divide-[#3e3e3e]"
        />
      )}
    </aside>
  );
}

export default TheSidebar;
