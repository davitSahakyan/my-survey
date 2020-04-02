import React, { useReducer } from 'react';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SurveyContext from '../../../State/context';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { surveyReducer, titleReducer } from '../../../State/reducer';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock() {
  const classes = useStyles();
  const [surveyState, surveyDispatch] = useReducer(surveyReducer, {
    title: '',
    question: ''
  });
  const { title, question } = surveyState;
  const [state, dispatch] = useReducer(titleReducer, {
    title: '',
    isTitle: false
  });
  const { isTitle } = state;

  return (
    <div className={classes.createSurveyBlockContainer}>
      <div className={classes.createSurveyBlockBlockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <SurveyContext.Provider
        value={{ state, dispatch, surveyState, surveyDispatch }}
      >
        <div className={classes.createSurveyBlockCreateSurveyWrapper}>
          <div className={classes.createSurveyBlockTitleWrapper}>
            {!title || !isTitle ? <SurveyTitleCreator /> : <SurveyTitle />}
          </div>
          {question || isTitle ? <QuestionSection /> : null}
        </div>
      </SurveyContext.Provider>
    </div>
  );
}

export default CreateSurveyBlock;
