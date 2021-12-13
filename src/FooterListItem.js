import React from 'react';

function FooterListItem({ children: label }) {
  const attributes = {
    href: '/',
    className: 'text-[11px] hover:underline py-2',
  };

  const child = React.createElement('a', attributes, label);

  return React.createElement('li', null, child);
}

// function FooterListItem({ children: label }) {
//   return (
//     <li>
//       <a href="/" className="text-[11px] hover:underline py-2">
//         {label}
//       </a>
//     </li>
//   );
// }

export default FooterListItem;
