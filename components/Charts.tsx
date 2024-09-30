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
  { month: "January", views: 123456 + 654321 + 234567 },
  { month: "February", views: 345678 + 765432 + 876543 },
  { month: "March", views: 456789 + 876543 + 567890 },
  { month: "April", views: 567890 + 987654 + 678901 },
  { month: "May", views: 2678901 + 2543210 + 2789012 },
  { month: "June", views: 789012 + 432109 + 890123 },
  { month: "July", views: 890123 + 321098 + 901234 },
  { month: "August", views: 901234 + 210987 + 123456 },
  { month: "September", views: 123456 + 654321 + 234567 },
  { month: "October", views: 234567 + 765432 + 876543 },
  // { month: "November", views: 345678 + 876543 + 567890 },  // Added November
  // { month: "December", views: 456789 + 987654 + 678901 },  // Added December
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
