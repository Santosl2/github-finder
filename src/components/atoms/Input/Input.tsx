/* eslint-disable react/jsx-props-no-spreading */
import { Input, InputProps } from "@chakra-ui/react";

export function InputCustom({ ...props }: InputProps): JSX.Element {
  return (
    <Input {...props} borderRadius="0" h="50px" padding="0 6.25rem 0 2.2rem" />
  );
}
