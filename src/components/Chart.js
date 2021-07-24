import React from "react";
import PropTypes from "prop-types";

import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
} from "victory";

export default function Chart({
  data,
  yLabel,
  x_dy = 20,
  y_dy = -25,
  xLabel = "Date",
}) {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      scale={{ x: "time" }}
      padding={{ left: 50, top: 10, right: 10, bottom: 50 }}
    >
      <VictoryAxis
        label={xLabel}
        axisLabelComponent={<VictoryLabel dy={x_dy} />}
      />
      <VictoryAxis
        dependentAxis
        label={yLabel}
        axisLabelComponent={<VictoryLabel dy={y_dy} />}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
      />
    </VictoryChart>
  );
}

Chart.propTypes = {
  data: PropTypes.array,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
};
