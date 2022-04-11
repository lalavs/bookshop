import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import './navbar.scss';

const NavBar = observer(() => {
  const {books} = useContext(Context);

  return (
    <div className='navbar'>
      {books.sections.map((section) =>
        <div
          key={section.id}
          onClick={() => books.setSelectedSection(section)}
          className='navbar-item'>
          {section.name}
        </div>,
      )}
    </div>
  );
});

export default NavBar;
