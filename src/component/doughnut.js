import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Green',
		'Grey'
	],
	datasets: [{
		data: [75, 25],
		backgroundColor: [
		'#00a1ab',
		'#515151'
		],
		hoverBackgroundColor: [
		'#00a1ab',
		'#515151'
		],
		borderColor: [
		'transparent',
		'transparent'
		]
	}]
};
const DoughnutExample = () =>{
    return (
      <div>
        <Doughnut data={data} options={{ 
			maintainAspectRatio: false,
			responsive: false,
			cutoutPercentage: 80
		}}
			legend={{display:false}} width={145} height={145} />
      </div>
    );
};

export default DoughnutExample;


