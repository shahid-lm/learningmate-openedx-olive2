//
// import Highcharts from 'highcharts';
// import { Component } from "react";
//
// class Bullet extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       courseData : props.courseData
//     }
//   }
//
//   componentDidMount(){
//     const [courseName,currentGrade,passignGrade] = [[],[],[]]
//     for (const data of this.state.courseData){
//       // console.log(data.grading_policy.grade_range.Pass)
//       passignGrade.push(Math.round(data.grading_policy.grade_range.Pass * 100))
//       currentGrade.push(Math.round(data.course_grade.percent * 100))
//       courseName.push(data.course_name)
//     }
//     //console.log(courseName)
//     Highcharts.chart('container', {
//       chart: {
//           type: 'column'
//       },
//       title: {
//           text: 'Grades'
//       },
//       xAxis: {
//           categories: courseName
//       },
//       yAxis: [{
//         min: 0,
//         title: {
//             text: 'Grade Points (%)'
//         }
//     }],
//       legend: {
//           shadow: true
//       },
//       tooltip: {
//         enabled: false
//       //     // shared: false
//       //   formatter: function() {
//       //       return this.x + '<br>' + 'progress: ' + this.y + '%';
//       //   }
//       // },
//       },
//       plotOptions: {
//           column: {
//               grouping: false,
//               shadow: false,
//               borderWidth: 0,
//               dataLabels: {
//                 enabled: true,
//                 useHTML: true,
//                 formatter: function() {
//                   return '<div style="text-align:top;"><div>' + this.y + '%' + '</div></div>';
//                 }
//               }
//           }
//       },
//       series: [{
//           name: 'Passing Grade (%)',
//           color: '#D3D3D3',
//           data: passignGrade,
//           pointPadding: 0.3,
//           pointPlacement: -0.2
//       }, {
//           name: 'Current Grade (%)',
//           color: '#3498db',
//           data: currentGrade,
//           pointPadding: 0.4,
//           pointPlacement: -0.2
//       }
//     ]
//   });
//   }
//
//   render(){
//     console.log('Render called')
//     return(
//       <div id="container">
//       </div>
//     )
//   }
// }
//
// export default Bullet;