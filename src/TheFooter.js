import React from 'react';
import TheFooterList from './TheFooterList';

function TheFooter() {
  const attributes = {
    className: 'mt-auto mb-8 ml-6',
  };

  const child = React.createElement(TheFooterList, null);

  return React.createElement('footer', attributes, child);
}

// function TheFooter() {
//   return (
//     <footer className="mt-auto mb-8 ml-6">
//       <TheFooterList />
//     </footer>
//   );
// }

export default TheFooter;
