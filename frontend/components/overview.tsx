"use client"

import { Chart, ChartContainer, ChartLegend, ChartLegendItem } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    housekeeping: 4.5,
    maintenance: 4.2,
    frontdesk: 4.0,
  },
  {
    name: "Feb",
    housekeeping: 4.6,
    maintenance: 4.3,
    frontdesk: 4.1,
  },
  {
    name: "Mar",
    housekeeping: 4.7,
    maintenance: 4.4,
    frontdesk: 4.2,
  },
  {
    name: "Apr",
    housekeeping: 4.6,
    maintenance: 4.5,
    frontdesk: 4.3,
  },
  {
    name: "May",
    housekeeping: 4.7,
    maintenance: 4.6,
    frontdesk: 4.4,
  },
  {
    name: "Jun",
    housekeeping: 4.8,
    maintenance: 4.5,
    frontdesk: 4.3,
  },
]

export function Overview() {
  // Calculate the maximum value for scaling
  const maxValue = 5.0
  const minValue = 3.5
  const range = maxValue - minValue

  return (
    <div className="space-y-4">
      <ChartLegend className="justify-center">
        <ChartLegendItem name="Housekeeping" color="#10b981" />
        <ChartLegendItem name="Maintenance" color="#3b82f6" />
        <ChartLegendItem name="Front Desk" color="#f97316" />
      </ChartLegend>

      <ChartContainer className="h-[300px] p-4">
        <Chart>
          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            {data.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </div>

          {/* Chart grid */}
          <div className="relative h-[250px] w-full">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-1 grid-rows-4 border-b border-l">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-t border-dashed border-muted-foreground/20 flex items-center">
                  <span className="text-xs text-muted-foreground -ml-8 w-6 text-right">
                    {(maxValue - (i * range) / 3).toFixed(1)}
                  </span>
                </div>
              ))}
            </div>

            {/* Housekeeping line */}
            <svg className="absolute inset-0 h-full w-full overflow-visible">
              <polyline
                points={data
                  .map(
                    (d, i) => `${(i / (data.length - 1)) * 100}% ${100 - ((d.housekeeping - minValue) / range) * 100}%`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              {data.map((d, i) => (
                <circle
                  key={`housekeeping-${i}`}
                  cx={`${(i / (data.length - 1)) * 100}%`}
                  cy={`${100 - ((d.housekeeping - minValue) / range) * 100}%`}
                  r="4"
                  fill="#10b981"
                />
              ))}
            </svg>

            {/* Maintenance line */}
            <svg className="absolute inset-0 h-full w-full overflow-visible">
              <polyline
                points={data
                  .map(
                    (d, i) => `${(i / (data.length - 1)) * 100}% ${100 - ((d.maintenance - minValue) / range) * 100}%`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              {data.map((d, i) => (
                <circle
                  key={`maintenance-${i}`}
                  cx={`${(i / (data.length - 1)) * 100}%`}
                  cy={`${100 - ((d.maintenance - minValue) / range) * 100}%`}
                  r="3"
                  fill="#3b82f6"
                />
              ))}
            </svg>

            {/* Front Desk line */}
            <svg className="absolute inset-0 h-full w-full overflow-visible">
              <polyline
                points={data
                  .map((d, i) => `${(i / (data.length - 1)) * 100}% ${100 - ((d.frontdesk - minValue) / range) * 100}%`)
                  .join(" ")}
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              {data.map((d, i) => (
                <circle
                  key={`frontdesk-${i}`}
                  cx={`${(i / (data.length - 1)) * 100}%`}
                  cy={`${100 - ((d.frontdesk - minValue) / range) * 100}%`}
                  r="3"
                  fill="#f97316"
                />
              ))}
            </svg>
          </div>
        </Chart>
      </ChartContainer>
    </div>
  )
}
