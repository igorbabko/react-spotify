function NavItem({ classes, icon, onClick, children: label }) {
  function handleClick(event) {
    if (!onClick) return;

    event.preventDefault();

    onClick();
  }

  return (
    <a href="/" className={classes} onClick={handleClick}>
      {icon}
      <span className="ml-4 text-sm font-semibold">{label}</span>
    </a>
  );
}

export default NavItem;
