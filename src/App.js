import TheSidebar from './TheSidebar';
import TheHeader from './TheHeader';
import TheMain from './TheMain';
import TheRegistration from './TheRegistration';
import TheSidebarOverlay from './TheSidebarOverlay';

function App() {
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto">
          <TheHeader />
          <TheMain />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;
