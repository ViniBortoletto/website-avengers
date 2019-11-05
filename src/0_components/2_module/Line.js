import React from "react";

import { LineStyle } from "../../2_styles/3_module/LineStyle";

export default function Line({ opacity, width, background }) {
  return <LineStyle opacity={opacity} width={width} background={background} />;
}
