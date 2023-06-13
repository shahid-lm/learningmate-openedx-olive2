// import Highcharts from 'highcharts';
// import { Component } from 'react';
//
// class Bar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             series : [],
//             allCourseData : props.courseData
//         }
//     }
//
//     componentDidMount() {
//         //console.log('component mount called')
//         // Let's create the payload
//         const [completed, not_completed, course_names] = [[],[],[]]
//         for (let data of this.state.allCourseData){
//             // console.log()
//             const total = data.completion_summary.complete_count + data.completion_summary.incomplete_count
//             const completed_percent = Math.round(data.completion_summary.complete_count/total *100)
//             const incomplete_percent = Math.round(data.completion_summary.incomplete_count/total *100)
//             completed.push(completed_percent)
//             not_completed.push(incomplete_percent)
//             course_names.push(data.course_name)
//         };
//
//         this.setState(
//             ()=>{ return {
//                 series: [{
//                     name: 'Completed',
//                     data: completed,
//                     color: '#3498db',
//                     index: 1
//                 },] //{
//                 //     name: 'Not Completed',
//                 //     data: not_completed,
//                 //     color: '#9b59b6',
//                 //     index: 0
//                 // }]
//             }},
//             // ()=>{console.log(this.state.series)}
//             ()=>{console.log(this.state.series);this.highChartsRender(course_names);}
//             )
//     }
//     highChartsRender = (coursenames)=> {
//         //console.log('highChartsRender called')
//         Highcharts.chart({
//             chart: {
//                 type: 'column',
//                 renderTo: 'leaner-dashboard2'
//             },
//             title: {
//                 text: 'Overall Course Progress (%)'
//             },
//             xAxis: {
//                 categories: coursenames
//             },
//             yAxis: {
//                 min: 0,
//                 max: 100,
//                 title: {
//                     text: ''
//                 }
//             },
//             credits: {
//                 enabled: false
//             },
//             legend: {
//                 reversed: true
//             },
//             plotOptions: {
//                 series: {
//                     stacking: 'normal'
//                 },
//                 column: {
//                     dataLabels: {
//                       enabled: true,
//                       useHTML: true,
//                       formatter: function() {
//                         return '<div style="text-align:top;"><div>' + this.y + '%' + '</div></div>';
//                       }
//                     }
//                 },
//             },
//             tooltip: {
//                 formatter: function() {
//                     return this.x + '<br>' + 'progress: ' + this.y + '%';
//                 }
//             },
//             series: this.state.series
//         });
//     };
//
//     render() {
//         console.log('Render called')
//         return (
//          <div id="leaner-dashboard2">
//          </div>
//         );
//     }
// }
//
// export default Bar;