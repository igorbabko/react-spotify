import React from 'react';
import FooterListItem from './FooterListItem';

function TheFooterList() {
  const children = ['Cookies', 'Privacy'].map((label) => {
    return React.createElement(FooterListItem, { key: label }, label);
  });

  return React.createElement('ul', null, children);
}

// function TheFooterList() {
//   return (
//     <ul>
//       {['Cookies', 'Privacy'].map((label) => (
//         <FooterListItem key={label}>{label}</FooterListItem>
//       ))}
//     </ul>
//   );
// }

export default TheFooterList;
