import React, { useState, useImperativeHandle } from 'react';

function BaseToast({ children: message }, ref) {
  const [opacityClass, setOpacityClass] = useState('opacity-0');

  useImperativeHandle(ref, () => ({
    show: () => setOpacityClass('opacity-1'),
    hide: () => setOpacityClass('opacity-0'),
  }));

  return (
    <div
      className={`fixed left-1/2 bottom-28 -translate-x-1/2 z-30 bg-[#2e76d0] text-white tracking-wide whitespace-nowrap rounded-lg shadow-3xl py-3 px-8 pointer-events-none transition-opacity duration-700 ${opacityClass}`}
    >
      {message}
    </div>
  );
}

export default React.forwardRef(BaseToast);
