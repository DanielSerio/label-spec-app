import { ComponentProps } from "react";

export default interface PageProps extends ComponentProps<'main'> {
  title?: string;
}