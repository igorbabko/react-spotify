import TheLogo from './TheLogo';
import TheNav from './TheNav';
import TheFooter from './TheFooter';

function TheSidebar({ showPopover }) {
  return (
    <aside
      id="sidebar"
      className="bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer"
    >
      <TheLogo />
      <TheNav showPopover={showPopover} />
      <TheFooter />
    </aside>
  );
}

export default TheSidebar;
