import React, { useEffect, useReducer, useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { addSurveys, addSurveyAnswers } from '../../State/actions';
import Contacts from '../Contacts';
import CreateSurvey from '../CreateSurvey';
import { doGet } from '../../FetchAPI/fetchData';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Home from '../Home';
import {
  initialState,
  surveyAnswerReducer,
  surveyReducer
} from '../../State/reducer';
import Results from '../Results';
import ROUTES from '../../Routes/Routes';
import ScrollToTop from '../../Components/ScrollToTop';
import SnackbarComponent from '../../Components/Snackbar/SnackbarComponent';
import StoreContext from '../../State/context';
import TakeSurvey from '../TakeSurvey/TakeSurvey';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [isConnectionError, setIsConnectionError] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);
  const [snackbarText, setSnackbarText] = useState('');
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, initialState);
  const [stateSurveyAnswer, dispatchSurveyAnswer] = useReducer(
    surveyAnswerReducer,
    initialState
  );

  const getData = async () => {
    try {
      setLoadingData(true);

      const surveys = await doGet('surveys');
      const surveyAnswers = await doGet('survey-answers');
      const reversedSurveys = await surveys.slice().reverse();

      dispatchSurvey(addSurveys(reversedSurveys));
      dispatchSurveyAnswer(addSurveyAnswers(surveyAnswers));
    } catch (e) {
      setLoadingData(false);

      setIsConnectionError(true);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleShowSnackbar = (bool, text) => {
    setShowSuccess(bool);

    setSnackbarText(text);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.mainContainer}>
      <StoreContext.Provider
        value={{
          stateSurvey,
          stateSurveyAnswer,
          dispatchSurvey,
          dispatchSurveyAnswer,
          handleOpenSnackbar,
          handleShowSnackbar,
          isConnectionError,
          loadingData
        }}
      >
        <Router>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route exact path={ROUTES.home}>
                <Home />
              </Route>
              <Route path={ROUTES.create}>
                <CreateSurvey />
              </Route>
              <Route path={`${ROUTES.survey}/:id`}>
                <TakeSurvey />
              </Route>
              <Route path={`${ROUTES.results}/:id`}>
                <Results />
              </Route>
              <Route path={ROUTES.contacts}>
                <Contacts />
              </Route>
              <Route path="*">
                <Redirect to={ROUTES.home} />
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </StoreContext.Provider>
      <SnackbarComponent
        onClose={handleClose}
        open={open}
        showSuccess={showSuccess}
        snackbarText={snackbarText}
      />
    </div>
  );
}

export default Main;
