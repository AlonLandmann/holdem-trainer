import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function UserHistory({ history }) {
  const data = {
    labels: new Array(history.length).fill(''),
    datasets: [
      {
        label: 'Training History',
        data: history,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Training History',
      }
    },
    maintainAspectRatio: false
  }

  return (
    <Line data={data} options={options} />
  )
}
