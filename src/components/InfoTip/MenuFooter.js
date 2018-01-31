import React from 'react';
import PropTypes from 'prop-types';

class MenuFooter extends React.Component {
  render() {
    const { children } = this.props;

    return <div className="footer">{children}</div>;
  }
}

MenuFooter.propTypes = {
  children: PropTypes.node
};

export default MenuFooter;
