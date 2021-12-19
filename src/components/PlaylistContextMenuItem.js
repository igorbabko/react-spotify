import { ChevronRightIcon } from '@heroicons/react/outline';
import PlaylistContextSubmenu from './PlaylistContextSubmenu';

function PlaylistContextMenuItem({ children: label, subMenuItems }) {
  let classes = '';
  let buttonClasses =
    'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default';
  let icon = null;
  let submenu = null;

  if (subMenuItems) {
    classes = 'relative';
    buttonClasses = `${buttonClasses} flex justify-between items-center`;
    icon = <ChevronRightIcon className="h-4 w-4" />;
    submenu = <PlaylistContextSubmenu menuItems={subMenuItems} />;
  }

  return (
    <li className={classes}>
      <button className={buttonClasses}>
        {label} {icon}
      </button>
      {submenu}
    </li>
  );
}

export default PlaylistContextMenuItem;
