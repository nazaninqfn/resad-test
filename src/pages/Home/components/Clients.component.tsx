import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Clients = () => {
  const [series, setSeries] = useState([
    {
      name: "تعداد درخواست",
      data: [0],
    },
  ]);
  const [options, setOptions] = useState<ApexCharts.ApexOptions>({
    chart: {
      height: 350,
      type: "bar",
    },
    // colors: ["#008FFB", "#FF4933", "#33FFA5", "#FFA833", "#9C33FF"],
    colors: ["#00E4FF" ],

    plotOptions: {
      bar: {
        columnWidth: "70%",
        distributed: false,
        borderRadius: 4,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },

    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      categories: [""],
      labels: {
        style: {
          colors: "#9E9E9E",
          fontSize: "12px",
        },
      },
    },
  });

  useEffect(() => {
    setSeries([
      { data: [2, 11, 5, 7, 3, 6], name: "تعداد درخواست های این روز" },
    ]);
    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        categories: [
          "چهارشنبه",
          "سه شنبه",
          "دوشنبه",
          "یکشنبه",
          "شنبه",
          "پنجشنبه",
        ],
        labels: {
          style: {
            colors: "#9E9E9E",
            fontSize: "12px",
          },
        },
      },
    }));
  }, []);
  return (
    <div className="clients box-item">
      <div className="title-box d-flex align-items-center justify-content-between">
        <h6>ثبت مراجعین</h6>
        <div className="more">
          <FaAngleLeft />
        </div>
      </div>
      <div className="box-body">
        <div className="d-flex align-items-center justify-content-between user-info mb-2">
          <div className="d-flex flex-column me-2">
            <div className="mb-1">
              <span>تاکنون 4 نفر</span>
            </div>
            <span className="name" style={{ fontSize: "13px" }}>
              تعداد مراجعین
            </span>
          </div>
          <div className="">
            <Button color="success" size="small" variant="contained">
              ثبت مورد جدید
            </Button>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
      </div>
    </div>
  );
};

export default Clients;
