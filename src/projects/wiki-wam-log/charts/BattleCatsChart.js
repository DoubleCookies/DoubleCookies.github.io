import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import React from "react";
import battleCatsData from "../data/BattleCatsData";

function BattleCatsChart() {
  return (
    <AreaChart width={950} height={420} data={battleCatsData}>
      <defs>
        <linearGradient id="bc-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffb330" stopOpacity={0.95}/>
          <stop offset="95%" stopColor="#fff2ba" stopOpacity={1}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="WAM" stroke="#d9721e" fillOpacity={1} activeDot={{ stroke: 'black' }}
            fill="url(#bc-chart)"/>
      <XAxis tick={{ fontSize: 14 }} dataKey="key" interval="preserveStartEnd" tickSize={10}/>
      <YAxis domain={[40, 100]} tick={{ fontSize: 14 }}/>
      <Tooltip itemStyle={{ color: "#d46e2f", fontWeight: "bold" }} separator={": "}/>
    </AreaChart>
  );
}

export default BattleCatsChart;