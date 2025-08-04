import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red"],
  datasets: [
    {
      label: "# of Votes",
      data: [12],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
      
      ],
      borderColor: [
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 3,
    },
  ],
};

export function MyCom() {

  return (
    <div >
      <Pie data={data} />;
    </div>
  );
}
