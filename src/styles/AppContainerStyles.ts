import { makeStyles, Theme } from "@material-ui/core";

const useAppContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.default
  },
  loader: {
    fontSize: '2rem',
    margin: '1rem auto'
  }
}));

export default useAppContainerStyles;