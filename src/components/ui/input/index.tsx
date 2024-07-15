"use client";

import React, { ComponentProps } from "react";
import { Input as NextInput } from "@nextui-org/react";

type InputProps = ComponentProps<typeof NextInput>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "faded", errorMessage, labelPlacement = "outside", ...rest },
    ref
  ) => {
    return (
      <NextInput
        ref={ref}
        variant={variant}
        errorMessage={errorMessage}
        isInvalid={errorMessage !== undefined}
        labelPlacement={labelPlacement}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
