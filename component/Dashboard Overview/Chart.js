import React from "react";
import styles from "../../styles/Overview.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart() {
   
    const series = [
        {
          name: 'Series 1',
          data: [
            { category: 'A', value: Math.random() },
            { category: 'B', value: Math.random() },
            { category: 'C', value: Math.random() },
          ],
        },
        {
          name: 'Series 2',
          data: [
            { category: 'B', value: Math.random() },
            { category: 'C', value: Math.random() },
            { category: 'D', value: Math.random() },
          ],
        },
        {
          name: 'Series 3',
          data: [
            { category: 'C', value: Math.random() },
            { category: 'D', value: Math.random() },
            { category: 'E', value: Math.random() },
          ],
        },
      ]

  return (
    <div className={styles.chart}>
        <div className={styles.chartTitle}>
        <h3>Sales Analytics</h3>
        <form>
        <div className="dropdown-div">
                            <div className="dropdown-inner-div">
                                
                                <select  >
                                    <option>Last 30 days</option>
                                    <option>Last 20 days</option>
                                    <option>Last 10 days</option>
                                  
                                </select>
                            </div>
                            </div>
        </form>
        </div>
       
      <ResponsiveContainer width="100%" height="100%">
       
        <LineChart width={100} height={80}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </ResponsiveContainer>
   
    </div>
  );
}