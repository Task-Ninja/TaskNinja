"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const statusCardData = [
  {
    cardLabel: "Total Clients",
    cardStats: "5.6%",
    cardsNumber: "150",
    chartData: {
      series: [
        {
          data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 100,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
    },
  },
  {
    cardLabel: "Total Tasks Done",
    cardStats: "-3.2%",
    cardsNumber: "200",
    chartData: {
      series: [
        {
          data: [20, 40, 60, 80, 100, 120, 140, 160, 110, 20],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 100,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            // borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
    },
  },
  {
    cardLabel: "Total Earnings",
    cardStats: "8.7%",
    cardsNumber: "$12,000",
    chartData: {
      series: [
        {
          data: [
            1000, 15000, 2000, 250, 3000, 4000, 5000, 600, 7000, 8000, 12000,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 100,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
    },
  },
  {
    cardLabel: "Average Rating",
    cardStats: "1.2",
    cardsNumber: "4.7",
    chartData: {
      series: [
        {
          data: [1.0, 2.1, 4.3, 3.4, 4.5, 2.6, 4.7, 4.7, 4.7, 4.7, 4.7],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 100,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
      },
    },
  },
];
console.log(parseFloat(statusCardData[1].cardStats.replace(/[^0-9.-]/g, "")));
const SecondSectionNinjaDashboard = () => {
  return (
    <section
      id="StatusCard"
      style={{ overflowX: "auto", overflowY: "clip" }}
      className="flex  space-x-4 gap-4 mt-4 justify-around py-1"
    >
      {statusCardData.map(
        ({ cardLabel, cardStats, cardsNumber, chartData }, index) => (
          <div key={`status${index}`} className="p-2  rounded-xl  shadow-lg">
            <div className="flex items-center">
              <div className="text-nowrap">
                <div className="text-lg font-semibold ">{cardLabel}</div>

                <div
                  className={`text-sm font-bold ${
                    parseFloat(cardStats.replace(/[^0-9.-]/g, "")) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  } flex`}
                >
                  {parseFloat(cardStats.replace(/[^0-9.-]/g, "")) > 0 ? (
                    <Image
                      src="/greenStatsIcon.svg"
                      width={20}
                      height={20}
                      alt="positive stats icon"
                    />
                  ) : (
                    <Image
                      src="/redStatsIcon.svg"
                      width={20}
                      height={20}
                      alt="negative stats icon"
                    />
                  )}
                  {cardStats}
                </div>
              </div>
              <div>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type={chartData.options.chart.type}
                  height={100}
                  width={100}
                />
              </div>
            </div>
            <div className="text-xl font-bold">{cardsNumber}</div>
          </div>
        )
      )}
    </section>
  );
};

export default SecondSectionNinjaDashboard;
