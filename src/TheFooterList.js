import FooterListItem from './FooterListItem';

function TheFooterList() {
  return (
    <ul>
      {['Cookies', 'Privacy'].map((label) => (
        <FooterListItem key={label}>{label}</FooterListItem>
      ))}
    </ul>
  );
}

export default TheFooterList;
