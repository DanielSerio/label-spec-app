import firebase from 'firebase'
import { ComponentProps } from "react";

export default interface HeaderProps extends ComponentProps<'header'> {
  user?: firebase.User|null;
  loading?: boolean;
}