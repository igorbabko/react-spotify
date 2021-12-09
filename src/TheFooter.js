function TheFooter() {
  return (
    <footer className="mt-auto mb-8 ml-6">
      <ul>
        {['Cookies', 'Privacy'].map((label) => (
          <li>
            <a href="/" className="text-[11px] hover:underline py-2">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default TheFooter;
