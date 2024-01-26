

import { useSelector } from "react-redux";
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
); 

const MyGraphic = () => {
  /*  console.log(useSelector(state => state)); */
  //
  const forecast = useSelector((state) => {
    return state.meteo.forecast;
  });

   const forecastList = forecast.list || []; // qui è necessario tenere un or [] perche il dato viene dal sevizio quindi all'in it sarà undefined

  const forecastListFiltered = []; // lista di appoggio

  forecastList.forEach((element) => {
    // trovo il nome del giorno
    let dayName = new Date(element?.dt * 1000).toDateString().slice(0, 3);

    // controllo se il nome del giorno esiste già nella lista di appoggo
    const existDayName = forecastListFiltered.find(
      (filtered) => filtered.dayName === dayName
    );

    
    if (!existDayName) {
      // pusco solo i giorni che non esistono nella lista di appoggio
      forecastListFiltered.push({ dayName, element }); // in questo oggetto avrò il nome del giorno e tutti i dettagli afferenti al giono (temperature, umidità ecc.)
    }
  }); 
   

  //  
  const currentDays =  forecastListFiltered?.map((d)=>(d.dayName))
  const temp = forecastListFiltered?.map((d)=>(d.element.main.temp))

  // dati per il graphic
  const options ={
    responsive: true,
    position: 'center',
    title: {
      display: true,
      text: 'Temperatures in the next 5 days... ',
    },
    scales :{
      y : {
        min: 0,
        max:40,
        ticks:{
          color: 'black'
        }
      },
      x: {
        ticks:{
          color: 'black'
        }
      }
    },
    plugins: {
      legend: {
        display : false
      }
    }
  }
 
  const data = {
    labels: currentDays,
    datasets: [ // cada una de las lineas del gràfico
      {
        label : 'Temperature' ,
        data: temp,
        tension: 0.5,
        fill: true,
        /* borderColor: 'rgb(255,99,132)', */
        backgroundColor: 'rgb(255,99,132, 0.5)',
       /*  pointRadius: 2, */
        /* pointBorderColor: 'rgb(255,99,132)',
        pointBackgroundColor: 'rgb(255,99,132)' */
      },
    ],
  };
  

  return (
    <div className='d-flex justify-content-center'>
      <Line options={options} data={data}   />
    </div>
  )
};
export default MyGraphic;
