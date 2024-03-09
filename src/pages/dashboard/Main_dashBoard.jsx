import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Grid } from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { BarChart } from "@mui/x-charts/BarChart";

export default function Main_dashBoard() {
  const pieParams = { height: 200, margin: { right: 5 } };
  const palette = ["red", "blue", "green"];
  const chartSetting = {
    xAxis: [
      {
        label: "rainfall (mm)",
      },
    ],
    width: 500,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Fev",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: "Oct",
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: "Nov",
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </Grid>

        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ my: 2 }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={600}
            height={300}
          />
        </Grid>

        <Grid item lg={6}>
          <Stack direction="row" width="100%" textAlign="center" spacing={2}>
            <Box flexGrow={1}>
              <Typography>Default</Typography>
              <PieChart
                series={[
                  { data: [{ value: 10 }, { value: 15 }, { value: 20 }] },
                ]}
                {...pieParams}
              />
            </Box>
            <Box flexGrow={1}>
              <Typography>Palette</Typography>
              <PieChart
                colors={palette}
                series={[
                  { data: [{ value: 10 }, { value: 15 }, { value: 20 }] },
                ]}
                {...pieParams}
              />
            </Box>
            <Box flexGrow={1}>
              <Typography>Item</Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { value: 10, color: "orange" },
                      { value: 15 },
                      { value: 20 },
                    ],
                  },
                ]}
                {...pieParams}
              />
            </Box>
          </Stack>
          <Box component={"h1"} sx={{ my: 2 }}>
            Buisness Overview Fy: 2023-24
          </Box>
          <hr />
          <h2>Recent Transactions: 3800 </h2>
          <h2> OverAll Earnings: $4500 </h2>
        </Grid>

        <Grid item lg={6}>
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "seoul", label: "Seoul rainfall", valueFormatter },
            ]}
            layout="horizontal"
            {...chartSetting}
          />
        </Grid>
      </Grid>
    </div>
  );
}
