import { makeStyles, Theme } from "@material-ui/core";

const useFormStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    maxWidth: theme.breakpoints.values.sm,
    margin: `0 auto ${(theme.spacing(2) / 16)}rem`,
    display: 'flex',
    flexDirection: 'column',
    '& > .MuiFormControl-root': {
      margin: `${theme.spacing(1) / 16}rem 0`
    }
  },
  footer: {
    marginTop: theme.spacing(2)
  }
}));

export default useFormStyles;