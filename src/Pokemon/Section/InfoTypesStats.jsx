import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const InfostatsCard = ({ details }) => {
 
    
    const data = {
        labels: ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'], // Etiquetas de las estadísticas
        datasets: [
          {
            label: 'Stats',
            data: [
                details.stats.hp, 
                details.stats.attack, 
                details.stats.defense, 
                details.stats.specialAttack, 
                details.stats.specialDefense, 
                details.stats.speed
            ], // Valores de las estadísticas
            backgroundColor: details.background, // Color de las barras
            borderColor: details.background, // Color del borde de las barras
            borderWidth: 1, // Grosor del borde
          },
        ],
      };
    
   
      const options = {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 255 
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
      };
    
      return (
        <div className='element-bar-stats'>
          <Bar data={data} options={options} />
        </div>
      );
}
