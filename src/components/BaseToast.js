function BaseToast({ children: message }) {
  return (
    <div className="fixed left-1/2 bottom-28 -translate-x-1/2 z-30 bg-[#2e76d0] text-white tracking-wide whitespace-nowrap rounded-lg shadow-3xl py-3 px-8 pointer-events-none">
      {message}
    </div>
  );
}

export default BaseToast;
