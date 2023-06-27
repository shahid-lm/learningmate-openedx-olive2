// import Highcharts from 'highcharts';
// // import HighchartsReact from 'highcharts-react-official';
// import { Component } from 'react';
// import ApiTest from '../api/Api';
//
// class Donut extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             series: [{
//                 name: 'Progress',
//                 data: [
//                     {
//                       name: 'Completed',
//                       y: 0.6,
//                       color: '#3498db'
//                     },
//                     {
//                       name: 'Not Completed',
//                       y: 0.4,
//                       color: '#9b59b6'
//                     },
//                 ]
//             }],
//           selectedCourse : props.selectedCourse
//         }
//     }
//
//     highChartsRender() {
//         Highcharts.chart({
//             chart: {
//               type: 'pie',
//               renderTo: 'leaner-dashboard'
//             },
//             title: {
//               verticalAlign: 'middle',
//               floating: true,
//               text: this.state.selectedCourse,//'Course Progress',
//               style: {
//                 fontSize: '20px',
//               }
//             },
//             plotOptions: {
//               pie: {
//                 dataLabels: {
//                     format: '{point.name}: {point.percentage:.1f} %'
//                 },
//                 innerSize: '70%'
//               }
//             },
//             series: this.state.series
//         });
//     }
//
//     componentDidMount() {
//         this.highChartsRender();
//     }
//
//    	render() {
//        	return (
//             <div id="leaner-dashboard">
//                 {/* <ApiTest /> */}
//             </div>
//        	);
//    	}
// }
//
// export default Donut;