import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown/index';
import { Icon } from '../Icon/index';

class Toggle extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <Dropdown.Toggle useAnchor className="nav-item-iconic" noCaret {...props}>
        <Icon type="pf" name="info" /> {children}
      </Dropdown.Toggle>
    );
  }
}

Toggle.propTypes = {
  ...Dropdown.propTypes,
  children: PropTypes.node
};

export default Toggle;
