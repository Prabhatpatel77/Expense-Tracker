import React, { PureComponent } from "react";
import {
  BarChart,  Bar,  Cell,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend,
  ResponsiveContainer,} from "recharts";
import './Barchart.css';

export default function BarChartComponent({ data }) {
  return (
    <div className="barChart">
      <h2 className="barHeader">Top Expenses</h2>

      <div className="barWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" axisLine={false} display="none" />
            <YAxis
              type="category"
                            dataKey="name"
              axisLine={false}
              width={80}
            />
            <Bar dataKey="value" barSize={35} fill="#8884d8"  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
