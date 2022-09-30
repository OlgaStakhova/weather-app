import { FC, useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { getWeatherChart } from "../store/store";
import { useSelector } from "react-redux";
import { OptionsChart } from "../types/OptionsChart";

export const Chart: FC = () => {
  const weatherChartData = useSelector(getWeatherChart)
  const [option, setOption] = useState<OptionsChart | null>(null);

  useEffect(() => {
    if (weatherChartData?.length) {
      const dates = weatherChartData.map(item => item.date);
      const temperature = weatherChartData.map(item => item.averageTemp);

      const options:OptionsChart = {
        title: {
          text: `Average temp for ${weatherChartData?.length} days`
        },
        tooltip: {},
        legend: {
          data: ['ºC']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: dates,
          name: 'Dates',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'ºC',
            data: temperature,
            type: 'line',
            areaStyle: {}
          }
        ]
      };
      setOption(options)
    }
  }, [weatherChartData])


  return (
    <>
      <h2 className="title is-4">Chart</h2>
      <div className="chart">
        {option && <ReactECharts option={option} />}
      </div>
    </>


  );
}