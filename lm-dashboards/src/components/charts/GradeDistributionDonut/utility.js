// import Highcharts from 'highcharts';
// import { Component } from 'react';
// import TestChart from './Donut';
// import './donut.css'
//
// class Donut extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             metadata : props.courseData,
//             selectedCourse : props.selectedCourse,
//
//         }
//     }
//
//     highChartsRender(metadata) {
//       console.log(metadata)
//       Highcharts.chart({
//           chart: {
//             type: 'pie',
//             renderTo: metadata//'leaner-dashboard'
//           },
//           title: {
//             verticalAlign: 'middle',
//             floating: true,
//             text: metadata,//'Course Progress',
//             style: {
//               fontSize: '20px',
//             }
//           },
//           plotOptions: {
//             pie: {
//               dataLabels: {
//                   format: '{point.name}: {point.percentage:.1f} %'
//               },
//               innerSize: '70%'
//             }
//           },
//           series: [{
//             name: 'Progress',
//             data: [
//                 {
//                   name: 'Completed',
//                   y: 0.6,
//                   color: '#3498db'
//                 },
//                 {
//                   name: 'Not Completed',
//                   y: 0.4,
//                   color: '#9b59b6'
//                 },
//             ]
//         }],
//       });
//   }
//
//    	render() {
//         const {selectedCourseMetadata} = this.props
//         console.log(this.props)
//        	return (
//               <div className='parent'>
//               {
//                 selectedCourseMetadata.map((data)=>{
//                     return (
//                         <div key={data.type} className='child'>
//                           <TestChart metadata={data}/>
//                         </div>
//                   )
//                 })
//               }
//               </div>
//        	);
//    	}
// }
//
// export default Donut;