"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"

const generateData = () => {
  return [
    { name: "Jan", total: 1800 },
    { name: "Feb", total: 2200 },
    { name: "Mar", total: 2800 },
    { name: "Apr", total: 2400 },
    { name: "May", total: 2900 },
    { name: "Jun", total: 3500 },
    { name: "Jul", total: 3200 },
    { name: "Aug", total: 3800 },
    { name: "Sep", total: 4200 },
    { name: "Oct", total: 4800 },
    { name: "Nov", total: 4100 },
    { name: "Dec", total: 5200 },
  ]
}

export function Overview() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          tickCount={6}
        />
        <Bar dataKey="total" fill="#ffffff" radius={[4, 4, 0, 0]} className="fill-primary opacity-70" />
      </BarChart>
    </ResponsiveContainer>
  )
}

