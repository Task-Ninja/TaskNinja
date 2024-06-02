"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const FourthSectionNinjaDashboard = () => {
  const totalIncomeData = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Income",
        data: [
          1500, 3000, 450, 2000, 3500, 2500, 1050, 1200, 135, 1500, 1650, 1800,
        ],
      },
    ],
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
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
  };

  const topClientData = [
    {
      clientName: "Navneet",
      likeCount: "74.6K",
      color: "#00A76F",
      gender: "male",
    },
    {
      clientName: "Anay Tiwari",
      likeCount: "54.1K",
      color: "#00B8D9",
      gender: "male",
    },
    {
      clientName: "Jaine",
      likeCount: "34K",
      color: "#FF5630",
      gender: "female",
    },
    {
      clientName: "Samantha",
      likeCount: "24.6K",
      color: "#22D1EE",
      gender: "female",
    },
    {
      clientName: "Samantha",
      likeCount: "24.6K",
      color: "#22D1EE",
      gender: "female",
    },
    {
      clientName: "Samantha",
      likeCount: "24.6K",
      color: "#22D1EE",
      gender: "female",
    },
  ];
  return (
    <section className="grid grid-cols-3 gap-4 ">
      <div className="border border-[#22D1EE] col-span-2  shadow-md rounded-sm relative ">
        <div
          className="flex absolute top-0 m-2 items-center justify-between "
          style={{ width: "90%" }}
        >
          <div>
            <span className="text-lg font-bold">Total Income</span>
            <br />
            <span className="text-2xl font-semibold">$ 1600</span>
          </div>
          <div>
            <span className="font-bold text-md">+2.5% </span>
            <br />
            <span className=" text-xs">than last month</span>
          </div>
        </div>
        <div className="mt-2">
          <ReactApexChart
            options={totalIncomeData}
            series={totalIncomeData.series}
            type="area"
            height={300}
          />
        </div>
      </div>
      <div className="border-[#000] border-2 rounded-2xl p-4  ">
        <h3 className="font-bold text-xl">Top Client</h3>
        <ul className="overflow-y-auto h-[280px]">
          {topClientData.map(
            ({ clientName, likeCount, gender, color }, index) => (
              <li
                className=" mt-2 grid  grid-cols-4 items-center font-bold "
                key={`client${index}`}
              >
                <Image
                  src={`https://xsgames.co/randomusers/avatar.php?g=${gender}`}
                  height={70}
                  width={50}
                  className="rounded-full"
                />
                <span className="col-span-2">
                  {clientName}
                  <div className="flex text-sm gap-1 items-center">
                    <Image
                      src="/favoriteIcon.svg"
                      height={20}
                      width={20}
                      alt="Favourite Icon"
                    />{" "}
                    {likeCount}
                  </div>
                </span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6673 13.6036V13.7253C36.6673 15.1586 36.6673 15.8769 36.3223 16.4636C35.9773 17.0503 35.349 17.3986 34.0957 18.0969L32.774 18.8303C33.684 15.7503 33.989 12.4403 34.1006 9.61027L34.1173 9.24194L34.1207 9.15527C35.2057 9.53194 35.8156 9.81361 36.1956 10.3403C36.6673 10.9953 36.6673 11.8653 36.6673 13.6036ZM3.33398 13.6036V13.7253C3.33398 15.1586 3.33398 15.8769 3.67898 16.4636C4.02398 17.0503 4.65232 17.3986 5.90565 18.0969L7.22898 18.8303C6.31732 15.7503 6.01232 12.4403 5.90065 9.61027L5.88398 9.24194L5.88232 9.15527C4.79565 9.53194 4.18565 9.81361 3.80565 10.3403C3.33398 10.9953 3.33398 11.8669 3.33398 13.6036Z"
                    fill={color}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9993 3.3334C22.9726 3.3334 25.421 3.59507 27.2943 3.91173C29.1926 4.23173 30.141 4.39173 30.9343 5.3684C31.7276 6.34507 31.6843 7.40007 31.601 9.51007C31.3143 16.7584 29.751 25.8101 21.2493 26.6101V32.5001H23.6326C24.0178 32.5003 24.391 32.6339 24.6887 32.8782C24.9865 33.1225 25.1905 33.4624 25.266 33.8401L25.5826 35.4167H29.9993C30.3308 35.4167 30.6488 35.5484 30.8832 35.7828C31.1176 36.0173 31.2493 36.3352 31.2493 36.6667C31.2493 36.9983 31.1176 37.3162 30.8832 37.5506C30.6488 37.785 30.3308 37.9167 29.9993 37.9167H9.9993C9.66778 37.9167 9.34984 37.785 9.11542 37.5506C8.881 37.3162 8.7493 36.9983 8.7493 36.6667C8.7493 36.3352 8.881 36.0173 9.11542 35.7828C9.34984 35.5484 9.66778 35.4167 9.9993 35.4167H14.416L14.7326 33.8401C14.8081 33.4624 15.0121 33.1225 15.3099 32.8782C15.6076 32.6339 15.9808 32.5003 16.366 32.5001H18.7493V26.6101C10.2493 25.8101 8.68597 16.7567 8.3993 9.51007C8.3143 7.40007 8.27264 6.3434 9.06597 5.3684C9.85764 4.39173 10.806 4.23173 12.7043 3.91173C15.1157 3.51653 17.5558 3.32308 19.9993 3.3334ZM21.586 10.3317L21.4226 10.0384C20.7893 8.90007 20.4726 8.3334 19.9993 8.3334C19.526 8.3334 19.2093 8.90007 18.576 10.0384L18.4126 10.3317C18.2326 10.6551 18.1426 10.8151 18.0026 10.9217C17.861 11.0284 17.686 11.0684 17.336 11.1467L17.0193 11.2201C15.7893 11.4984 15.1743 11.6367 15.0276 12.1067C14.881 12.5784 15.301 13.0684 16.1393 14.0484L16.356 14.3017C16.5943 14.5801 16.7143 14.7184 16.7676 14.8917C16.821 15.0651 16.8026 15.2501 16.7676 15.6217L16.7343 15.9601C16.6076 17.2684 16.5443 17.9234 16.926 18.2134C17.3093 18.5034 17.886 18.2384 19.0376 17.7084L19.3343 17.5717C19.6626 17.4217 19.826 17.3467 19.9993 17.3467C20.1726 17.3467 20.336 17.4217 20.6643 17.5717L20.961 17.7084C22.1126 18.2401 22.6893 18.5034 23.0726 18.2134C23.456 17.9234 23.391 17.2684 23.2643 15.9601L23.231 15.6217C23.196 15.2501 23.1776 15.0651 23.231 14.8917C23.2843 14.7201 23.4043 14.5801 23.6426 14.3017L23.8593 14.0484C24.6976 13.0684 25.1176 12.5784 24.971 12.1067C24.8243 11.6367 24.2093 11.4984 22.9793 11.2201L22.6626 11.1467C22.3126 11.0684 22.1376 11.0301 21.996 10.9217C21.856 10.8151 21.766 10.6551 21.586 10.3317Z"
                    fill={color}
                  />
                </svg>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default FourthSectionNinjaDashboard;
