import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

import { colors } from "./colors";
import { Accordion } from "./components/accordion";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { config } from "./config";
import { fonts } from "./fonts";

const theme = extendTheme(
  {
    components: {
      Accordion,
      Heading,
      Text,
      Button,
      Card,
    },
    fonts,
    colors,
    config,
  },
  withProse()
);

export default theme;
