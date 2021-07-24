import React, { useEffect, useState } from "react";
import Chart from "./Chart";

function setData(data, yKey, setter, multiplier = 1) {
  if (data) {
    const processedData = data.map((datum) => {
      return {
        x: new Date(datum.timestamp * 1000),
        y: datum[yKey] * multiplier,
      };
    });
    console.log("processedData", processedData);
    setter(processedData);
  }
}

export default function Graph() {
  const [graphData, setGraphData] = useState();
  const [luxData, setLuxData] = useState();
  const [temperatureData, setTemperatureData] = useState();
  const [pressureData, setPressureData] = useState();
  const [graphNo, setGraphNo] = useState(0);

  useEffect(() => {
    fetch(
      "https://m2a6re6b9d.execute-api.us-east-2.amazonaws.com/default/get_all_plant_data"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setGraphData(data);
      });
  }, []);

  useEffect(() => {
    setData(graphData, "lux", setLuxData, 1);
    setData(graphData, "temperature", setTemperatureData);
    setData(graphData, "pressure", setPressureData);
  }, [graphData]);

  const graphs = [
    {
      graph: <Chart data={luxData} yLabel="Luminescence" y_dy={-30} />,
      label: "Luminescence",
      action: () => {
        setGraphNo(0);
      },
    },
    {
      graph: <Chart data={temperatureData} yLabel="Temperature" y_dy={-30} />,
      label: "Temperature",
      action: () => {
        setGraphNo(1);
      },
    },
    {
      graph: <Chart data={pressureData} yLabel="Pressure" y_dy={-30} />,
      label: "Pressure",
      action: () => {
        setGraphNo(2);
      },
    },
  ];

  return (
    <div>
      <div>{graphs[graphNo].graph}</div>
      <div className="flex flex-col md:flex-row place-content-center border-gray-500 border-2 md:border-0 lg:border-2 rounded-md">
        {graphs.map((item, index) => (
          <button
            onClick={item.action}
            className={`p-2 m-2 ${
              index === graphNo ? "bg-green-700" : "bg-green-500"
            } hover:bg-green-800 border-gray-500 border-2 rounded-md`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
