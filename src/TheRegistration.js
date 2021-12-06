function TheRegistration() {
  return (
    <a
      href="/"
      className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2"
    >
      <div>
        <p className="text-xs uppercase tracking-wider mb-1">
          Preview of Spotify
        </p>
        <p className="leading-6 text-[14px] tracking-wide">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button className="bg-white text-[#2c77d0] text-[14px] font-semibold leading-5 tracking-widest uppercase py-[9px] px-[48px] rounded-full hover:scale-105">
        Sign up free
      </button>
    </a>
  );
}

export default TheRegistration;
