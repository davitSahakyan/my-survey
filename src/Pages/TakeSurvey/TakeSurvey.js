import React from 'react';
import PropTypes from 'prop-types';

import TakeSurveyBlock from '../../Components/TakeSurveyBlock';

function TakeSurvey(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TakeSurveyBlock />
    </div>
  );
}

TakeSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TakeSurvey;