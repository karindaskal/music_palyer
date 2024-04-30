import { Bar } from 'react-chartjs-2';
import './grap.css'
export default function Graph({ labels, count }) {
    console.log(labels);
    return (
        <div className='divGrap'>
            <Bar
                data={{
                    labels: labels,
                    datasets: [{
                        label: "My Dataset",
                        data: count,
                        barThickness: 50,

                        barPercentage: 0.5,
                    }]
                }}
            />
        </div>
    );
}
