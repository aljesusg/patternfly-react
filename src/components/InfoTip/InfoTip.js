import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown/index';

class InfoTip extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <Dropdown componentClass="li" id="info-tip-user" {...props}>
        {children}
      </Dropdown>
    );
  }
}

InfoTip.propTypes = {
  ...Dropdown.propTypes,
  children: PropTypes.node
};

export default InfoTip;
