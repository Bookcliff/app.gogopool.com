import { Box, BoxProps, Heading, Text, TextProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface BoxPropsWithStyles extends BoxProps {
  customStyles?: React.CSSProperties;
}

interface TextPropsWithStyles extends TextProps {
  customStyles?: React.CSSProperties;
}

export const Card = forwardRef<HTMLDivElement, BoxPropsWithStyles>(
  (
    {
      children,
      backgroundColor = "white",
      maxWidth = "auto",
      width = "588px",
      maxHeight = "auto",
      height = "auto",
      p = "1.5rem", // 24px
      boxShadow = "default",
      borderRadius = "0.625rem", // 8px
      customStyles,
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        {...rest}
        width={width}
        p={p}
        height={height}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        borderRadius={borderRadius}
        bg={backgroundColor}
        boxShadow={boxShadow}
        sx={customStyles}
      >
        {children}
      </Box>
    );
  }
);

export const Title = forwardRef<HTMLDivElement, TextPropsWithStyles>(
  ({ children, customStyles, ...rest }, ref) => {
    return (
      <Heading
        ref={ref}
        size="h5"
        fontWeight="bold"
        mb="8"
        sx={customStyles}
        {...rest}
      >
        {children}
      </Heading>
    );
  }
);

export const Content = forwardRef<HTMLDivElement, BoxPropsWithStyles>(
  ({ children, customStyles, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest} sx={customStyles}>
        {children}
      </Box>
    );
  }
);

export const Footer = forwardRef<HTMLDivElement, BoxPropsWithStyles>(
  ({ children, customStyles, ...rest }, ref) => {
    return (
      <Box ref={ref} mt="8" {...rest} sx={customStyles}>
        {children}
      </Box>
    );
  }
);

const _default = Object.assign(Card, { Title, Content, Footer });

export default _default;
