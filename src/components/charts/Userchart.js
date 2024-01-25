import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import "../../App.css";

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

const ProductOverViewChart = () => {
  const [chartData, setChartData] = useState({
    series: [{ data: [] }],
    options: {
      chart: {
        height: 200,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // Handle click event if needed
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [], 
        labels: {
          style: {
            colors: colors,
            fontSize: '12px',
          },
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/users');
        const brand = response.data.map((users) => users.role);
        const brandCount = {};

        brand.forEach((role) => {
          brandCount[role] = (brandCount[role] || 0) + 1;
        });

        setChartData({
          ...chartData,
          series: [{ data: Object.values(brandCount) }],
          options: {
            ...chartData.options,
            xaxis: {
              categories: Object.keys(brandCount),
              labels: {
                style: {
                  colors: colors,
                  fontSize: '12px',
                },
              },
            },
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="chart" className='chart-heading'>
        <h4 >User Data Summary</h4>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} />
    </div>
  );
};

export default ProductOverViewChart;
