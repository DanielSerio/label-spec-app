import { makeStyles, Theme } from "@material-ui/core";

const useAppContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.default
  }
}));

export default useAppContainerStyles;