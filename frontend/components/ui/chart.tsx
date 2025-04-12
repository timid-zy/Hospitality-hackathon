import type React from "react"
export const ChartTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>
}

export const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded-md shadow-md p-2">
        <p className="font-semibold">{`${label}`}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-gray-700">{`${item.name}: ${item.value}`}</p>
        ))}
      </div>
    )
  }

  return null
}

export const ChartLegend = () => {
  return null
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}
