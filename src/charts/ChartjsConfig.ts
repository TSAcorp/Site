import {
  Chart,
  LineController,
  BarController,
  DoughnutController,
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  Tooltip,
} from 'chart.js';

Chart.register(
  LineController,
  BarController,
  DoughnutController,
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  Tooltip
);
