import {
  HomeIcon,
  SearchIcon,
  ViewBoardsIcon,
  PlusCircleIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import NavItem from './NavItem';

const activeNavItemClasses =
  'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded';
const navItemClasses =
  'flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300';

function TheNav({ showPopover }) {
  const navItems = [
    {
      label: 'Home',
      classes: activeNavItemClasses,
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      label: 'Search',
      classes: navItemClasses,
      icon: <SearchIcon className="h-6 w-6" />,
    },
    {
      label: 'Your Library',
      classes: `${navItemClasses} mb-6`,
      icon: <ViewBoardsIcon className="h-6 w-6" />,
    },
    {
      label: 'Create Playlist',
      classes: navItemClasses,
      icon: <PlusCircleIcon className="h-6 w-6" />,
      action: showPopover,
    },
    {
      label: 'Liked Songs',
      classes: navItemClasses,
      icon: <HeartIcon className="h-6 w-6" />,
    },
  ];

  return (
    <nav>
      {navItems.map(({ classes, icon, label, action }) => (
        <NavItem key={label} classes={classes} icon={icon} onClick={action}>
          {label}
        </NavItem>
      ))}
    </nav>
  );
}

export default TheNav;
