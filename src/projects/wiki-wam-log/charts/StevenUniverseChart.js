import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import React from "react";
import stevenUniverseData from "../data/StevenUniverseData";

function StevenUniverseChart() {
  return (
    <AreaChart width={950} height={420} data={stevenUniverseData}>
      <defs>
        <linearGradient id="steven-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#49f6fc" stopOpacity={0.9}/>
          <stop offset="95%" stopColor="#517fc4" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="WAM" stroke="#55bbe0" activeDot={{ stroke: 'black' }} fillOpacity={1}
            fill="url(#steven-chart)"/>
      <XAxis tick={{ fontSize: 14 }} dataKey="key" interval="preserveStartEnd" tickSize={10}/>
      <YAxis domain={[40, 100]} tick={{ fontSize: 14 }}/>
      <Tooltip itemStyle={{ color: "#1d36a1", fontWeight: "bold" }} separator={": "}/>
    </AreaChart>
  );
}

export default StevenUniverseChart;