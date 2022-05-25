import { useState, useEffect, useRef } from 'react';
import BaseToast from './components/BaseToast';
import TheSidebar from './components/TheSidebar';
import TheSidebarOverlay from './components/TheSidebarOverlay';
import TheHeader from './components/TheHeader';
import TheMain from './components/TheMain';
import TheRegistration from './components/TheRegistration';

function App() {
  const [toastMessage, setToastMessage] = useState();
  const closeToastTimer = useRef();
  const toastRef = useRef();
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  function showToast(message) {
    clearTimeout(closeToastTimer.current);

    setToastMessage(message);

    toastRef.current.show();

    closeToastTimer.current = setTimeout(toastRef.current.hide, 3000);
  }

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  });

  return (
    <>
      <div className="flex grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain showToast={showToast} toggleScrolling={toggleScrolling} />
        </div>
      </div>
      <TheRegistration />
      <BaseToast ref={toastRef}>{toastMessage}</BaseToast>
    </>
  );
}

export default App;
