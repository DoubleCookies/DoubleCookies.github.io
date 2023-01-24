import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import React from "react";
import geometryDashData from "../data/GeometryDashData";

function geometryDashChart() {
  return (
    <AreaChart width={950} height={420} data={geometryDashData}>
      <defs>
        <linearGradient id="gd-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#66b0ff" stopOpacity={0.95}/>
          <stop offset="95%" stopColor="#3f2c9e" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="WAM" stroke="#464dc7" fillOpacity={1} activeDot={{ stroke: 'black' }}
            fill="url(#gd-chart)"/>
      <XAxis tick={{ fontSize: 14 }} dataKey="key" interval="preserveStartEnd" tickSize={10}/>
      <YAxis domain={[40, 100]} tick={{ fontSize: 14 }}/>
      <Tooltip itemStyle={{ color: "#3f2c9e", fontWeight: "bold" }} separator={": "}/>
    </AreaChart>
  );
}

export default geometryDashChart;