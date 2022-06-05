import { useEffect, useRef } from 'react';
import BasePopover from './components/BasePopover';
import BaseToast from './components/BaseToast';
import TheSidebar from './components/TheSidebar';
import TheSidebarOverlay from './components/TheSidebarOverlay';
import TheHeader from './components/TheHeader';
import TheMain from './components/TheMain';
import TheRegistration from './components/TheRegistration';

function App() {
  const contentWrapperRef = useRef();
  const popoverRef = useRef();
  const toastRef = useRef();

  let isScrollingEnabled = true;

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  });

  function showPopover(title, description, target, offset) {
    popoverRef.current.show(title, description, target, offset);
  }

  function showToast(message) {
    toastRef.current.show(message);
  }

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <>
      <div className="flex grow overflow-auto">
        <TheSidebar showPopover={showPopover} />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain showToast={showToast} toggleScrolling={toggleScrolling} />
        </div>
      </div>
      <TheRegistration />
      <BaseToast ref={toastRef} />
      <BasePopover ref={popoverRef} />
    </>
  );
}

export default App;
