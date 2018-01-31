import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown/index';

class Menu extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <Dropdown.Menu className="infotip bottom-right" {...props}>
        <div className="arrow" />
        {children}
      </Dropdown.Menu>
    );
  }
}

Menu.propTypes = {
  ...Dropdown.propTypes,
  children: PropTypes.node
};

export default Menu;
