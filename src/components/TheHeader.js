import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import BaseButton from './BaseButton';

function TheHeader() {
  return (
    <header className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
      <div className="flex">
        <a
          href="#sidebar"
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </a>
        <a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
          <ChevronLeftIcon className="h-6 w-6" />
        </a>
        <a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
          <ChevronRightIcon className="h-6 w-6" />
        </a>
      </div>
      <div>
        <BaseButton classes="text-gray-400 hover:text-white">
          Sign up
        </BaseButton>
        <BaseButton primary>Log in</BaseButton>
      </div>
    </header>
  );
}

export default TheHeader;
