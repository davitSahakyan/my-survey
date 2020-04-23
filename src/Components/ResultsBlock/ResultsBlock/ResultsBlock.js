import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {
  Route,
  Link,
} from "react-router-dom";

import { SURVEY } from '../SurveyResultsData'
import { useStyles } from './ResultsBlock.style';

function ResultsBlock() {
  const classes = useStyles();
  

  return (
    <Route>
      <div className={classes.container}>
        <div className={classes.resultsContainer}>
          <Grid container spacing={3}>

            { SURVEY.map((survey, index) => (
              <Grid item lg={6} md={3} sm={4} xs={12}>
                <Card className={classes.root} key={survey.id} sm={12}>
                  <CardActionArea className={classes.cardHeader}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Survey
                        {` ${index + 1} `}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.cardTitle}>
                        {survey.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardButton}>
                    <Button size="small" className={classes.dateButton}>
                      <DateRangeIcon />
                      {survey.date}
                    </Button>
                    <Button size="small" variant='outlined' className={classes.seeAnswersButton}>
                      <Link to={`results/${survey.surveyId}`}>See answers</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </div>
      </div>        
    </Route>
  )
}

export default ResultsBlock;




