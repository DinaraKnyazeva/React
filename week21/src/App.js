import { Chart } from "react-google-charts";
import "./App.css";

// My Daily Activities:

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 8],
//   ["Eat", 2],
//   ["Studies", 5],
//   ["Walk", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "My Daily Activities",
// };

// function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// }

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

function App() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}

export default App;
