import TheLogo from './TheLogo';
import TheNav from './TheNav';
import TheFooter from './TheFooter';
import PlaylistContextMenu from './PlaylistContextMenu';
import useContextMenu from '../hooks/useContextMenu';

const menuItems = [
  {
    label: 'Item 1',
    subMenuItems: [
      {
        label: 'Item 1.1',
        classes: 'min-w-[150px]',
      },
      {
        label: 'Item 1.2',
      },
      {
        label: 'Item 1.3',
      },
    ],
  },
  {
    label: 'Item 2',
  },
  {
    label: 'Item 3',
    subMenuItems: [
      {
        label: 'Item 3.1',
      },
      {
        label: 'Item 3.2',
      },
    ],
  },
  {
    label: 'Item 4',
  },
];

function TheSidebar() {
  const menu = useContextMenu();

  return (
    <aside
      id="sidebar"
      className="bg-black w-[256px] text-[#b2b2b2] flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer"
      onContextMenu={menu.open}
    >
      <TheLogo />
      <TheNav />
      <TheFooter />
      {menu.isOpen && (
        <PlaylistContextMenu
          ref={menu.ref}
          menuItems={menuItems}
          classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
        />
      )}
    </aside>
  );
}

export default TheSidebar;
