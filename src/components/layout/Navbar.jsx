import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};

//default properties
Navbar.defaultProps = {
  // properties that get passed to nav title
  title: 'Github Finder',
  icon: 'fab fa-github'
};

//propTypes that checkes that your datatypes are the properties you actually want to pass to your components.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
