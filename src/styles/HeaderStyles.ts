import { makeStyles, Theme } from "@material-ui/core";

const useHeaderStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

export default useHeaderStyles;