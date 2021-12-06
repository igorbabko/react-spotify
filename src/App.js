import TheSidebar from './TheSidebar';
import TheSidebarOverlay from './TheSidebarOverlay';
import TheHeader from './TheHeader';
import TheMain from './TheMain';
import TheRegistration from './TheRegistration';

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
