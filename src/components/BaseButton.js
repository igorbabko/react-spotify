function BaseButton({
  primary,
  classes,
  onClick: handleClick,
  children: label,
}) {
  const typeClasses = primary
    ? 'bg-white hover:bg-gray-100 text-[#2e2e2e]'
    : 'text-white';

  return (
    <button
      className={`font-semibold leading-5 py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105 ${typeClasses} ${classes}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default BaseButton;
