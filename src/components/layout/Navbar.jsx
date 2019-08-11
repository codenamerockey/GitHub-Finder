import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  //default properties
  static defaultProps = {
    // properties that get passed to nav title
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  //propTypes that checkes that your datatypes are the properties you actually want to pass to your components.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
