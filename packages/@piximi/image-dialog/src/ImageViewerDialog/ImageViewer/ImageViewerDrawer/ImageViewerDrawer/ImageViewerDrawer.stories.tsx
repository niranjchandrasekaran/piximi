import React from "react";

import {storiesOf} from "@storybook/react";
import {ImageViewerDrawer} from "./ImageViewerDrawer";

const src: string = "https://picsum.photos/256/256";

storiesOf("ImageViewer/ImageViewerDrawer", module).add(
  "ImageViewerDrawer",
  () => {
    return React.createElement(() => {
      return <div />;
    });
  }
);
