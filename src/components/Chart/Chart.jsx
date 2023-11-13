import React from 'react';
import Chart from "react-apexcharts";

const ChartTable = ({color, chartValue, chartDate}) => {
    const value = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: chartDate
            },
            markers: {
                size: 5,
            },
            colors: [`${color}`]
        },
        series: [
            {
                name: "Cân nặng (Kg)",
                data: chartValue
            },

        ]
    }

    // const [state2, setState2] = useState({
    //     options: {
    //         chart: {
    //             id: "basic-bar"
    //         },
    //         xaxis: {
    //             categories: ["17/10", "22/10", "27/10", "01/11", "06/11", "11/11", "16/11"]
    //         },
    //         markers: {
    //             size: 5,
    //         },
    //         colors: ['#FF5E5E']
    //     },
    //     series: [
    //         {
    //             name: "Khẩu phần ăn (g)",
    //             data: [100, 300, 450, 200, 100, 300, 350]
    //         }
    //     ]
    // })
    return (
        <Chart
            options={value.options}
            series={value.series}
            type="line"
            width="400"
        />
    );
};

export default ChartTable;