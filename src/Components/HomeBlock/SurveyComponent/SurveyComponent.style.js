import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.customSpacing.base
  },
  surveyComponentContainer: {
    display: 'flex',
    width: '100%',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.base}  ${theme.customSpacing.base} ${theme.customSpacing.xLarge}`,
    borderRadius: `${theme.borders.borderRadius.small}`,
    '@media (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.customSpacing.small} ${theme.customSpacing.large}`
    }
  },
  surveyTitleContainer: {
    display: 'flex',
    color: '#606060',
    alignItems: 'center',
    width: '100%',
    '@media (max-width:768px)': {
      justifyContent: 'center'
    }
  },
  takeAndResultsCellsContainer: {
    alignItems: 'center',
    borderLeft: '1px solid #e4dddd',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.customSpacing.small,
    paddingLeft: theme.customSpacing.midLarge,
    '@media (max-width:768px)': {
      borderTop: `1px solid ${theme.color.lightGreyBorder}`,
      borderLeft: 'none',
      paddingLeft: 0,
      width: 140,
      alignItems: 'center',
      margin: `${theme.customSpacing.base} auto 0`
    }
  },
  removeButton: {
    color: theme.color.redButton
  },
  resultsButton: {
    color: theme.color.yellowButton
  },
  takeSurveyButton: {
    color: theme.color.mainColorGreen
  }
}));
