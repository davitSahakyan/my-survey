import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  inputSectionContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  typeWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    // height: '240px',
    marginTop: `${theme.customSpacing.large}`
  },
  imageContainer: {
    border: '10px solid transparent',
    cursor: 'pointer',
    filter: 'grayscale(100%) opacity(50%)',
    height: '75px',
    width: '150px'
  },

  typeImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: `${theme.customTypography.fontColor.base}`
  },
  textClicked: {
    color: `${theme.customTypography.fontColor.clicked}`
  },
  imageContainerClicked: {
    border: `10px solid ${theme.color.mainColorGreen}`,
    cursor: 'pointer',
    filter: 'drop-shadow(8px 8px 10px gray)',
    height: '75px',
    width: '150px'
  },
  image: {
    height: 'inherit',
    width: 'inherit'
  },
  imageClicked: {
    filter: 'contrast(110%)',
    height: 'inherit',
    width: 'inherit'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.xLarge}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
