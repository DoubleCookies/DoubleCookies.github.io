import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import React from "react";
import undertaleData from "../data/UndertaleData";

function UndertaleChart() {
  return (
    <AreaChart width={950} height={420} data={undertaleData}>
      <defs>
        <linearGradient id="ut-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#b209b5" stopOpacity={0.9}/>
          <stop offset="95%" stopColor="#471347" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="WAM" stroke="#5c2169" activeDot={{ stroke: 'black' }} fillOpacity={1}
            fill="url(#ut-chart)"/>
      <XAxis tick={{ fontSize: 14 }} dataKey="key" interval="preserveStartEnd" tickSize={10}/>
      <YAxis domain={[40, 100]} tick={{ fontSize: 14 }}/>
      <Tooltip itemStyle={{ color: "#78007a", fontWeight: "bold" }} separator={": "}/>
    </AreaChart>
  );
}

export default UndertaleChart;