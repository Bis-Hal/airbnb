import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import DonutChart from "../charts/donut_chart";

export const stats_mock = [
    {
        title : "Yearly Breakup",
        indicator: faTemperatureArrowUp,
        years: [2023,2024],
        amount: "100,000",
        stats: "+9% last year",
        chart: <DonutChart/>
    },
    {
        title : "Yearly Breakup",
        indicator: faTemperatureArrowUp,
        years: [2023,2024],
        amount: "100,000",
        stats: "+9% last year",
        chart: <DonutChart/>
    },

]