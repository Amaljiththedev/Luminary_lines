"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

// Updated chartData to reflect monthly data for all 12 months
const chartData = [
  { month: "January", views: 20123456 },
  { month: "February", views: 18987654 },
  { month: "March", views: 21567890 },
  { month: "April", views: 21000000 },
  { month: "May", views: 19345678 },
  { month: "June", views: 19876543 },
  { month: "July", views: 20567890 },
  { month: "August", views: 19765432 },
  { month: "September", views: 20000000 },
  { month: "October", views: 21123456 }, // This month may be adjusted
]
const chartConfig = {
  Views: {
    label: "Views",
    color: "black",
  },
} satisfies ChartConfig

export function Component() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("Views")

  const total = React.useMemo(
    () => ({
      Views: chartData.reduce((acc, curr) => acc + curr.views, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row text-white">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 text-white">
          <CardTitle>Social Media Growth</CardTitle>
          <CardDescription>
            Total Views And Counting
          </CardDescription>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start">
          {Object.keys(chartConfig).map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-black sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-white">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl text-white">
                  {total.Views.toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 text-white">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
              stroke="white" // Ensure the X-axis is visible
              tick={{ fill: "white", fontSize: "8px" }} // Corrected syntax for font size
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return value // Use month name directly
                  }}
                />
              }
            />
            <Bar dataKey={activeChart === "Views" ? "views" : "views"} fill="white" /> {/* Used "views" for the Bar component */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
