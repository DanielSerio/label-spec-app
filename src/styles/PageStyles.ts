import { makeStyles, Theme } from "@material-ui/core";

const usePageStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: `${theme.spacing(3) / 16}rem auto 0`,
    width: '95%',
    maxWidth: theme.breakpoints.values.sm
  },
  header: {
    textAlign: 'center'
  }
}));


export default usePageStyles;