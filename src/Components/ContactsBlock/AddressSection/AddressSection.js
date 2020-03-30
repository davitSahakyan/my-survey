import React from 'react';
import PropTypes from 'prop-types';

import addressIcon from '../../../assets/icons/address-240px.png';
import emailIcon from '../../../assets/icons/email-240px.png';
import phoneIcon from '../../../assets/icons/phone-240px.png';

const ADDRESS = '3 Hakob Hakobyan, Yerevan, Armenia';
const EMAIL = 'info@aca.am';
const PHONE = '+374 (12) 48-16-32';

function AddressSection({ classes }) {
  return (
    <div className={classes.addressSection}>
      <div className={classes.address}>
        <div className={classes.iconContainer}>
          <img src={addressIcon} alt="address-icon" className={classes.icon} />
        </div>
        <div>
          <span>{ADDRESS}</span>
        </div>
      </div>
      <div className={classes.phone}>
        <div className={classes.iconContainer}>
          <img src={phoneIcon} alt="address-icon" className={classes.icon} />
        </div>
        <div>
          <span>{PHONE}</span>
        </div>
      </div>
      <div className={classes.email}>
        <div className={classes.iconContainer}>
          <img src={emailIcon} alt="address-icon" className={classes.icon} />
        </div>
        <div>
          <span>{EMAIL}</span>
        </div>
      </div>
    </div>
  );
}

AddressSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AddressSection;