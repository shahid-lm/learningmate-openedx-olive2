// import { Component } from "react";
// import Highcharts from 'highcharts';
//
// class TestChart extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             text : props.metadata
//         }
//     }
//
//     highChartsRender(metadata) {
//         console.log('Inside highChartsRender')
//         console.log(metadata)
//         Highcharts.chart({
//             chart: {
//               type: 'pie',
//               renderTo: metadata.type
//             },
//             title: {
//               verticalAlign: 'middle',
//               floating: true,
//               text: metadata.type,//'Course Progress',
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
//             }]
//         });
//     }
//
//     componentDidMount() {
//         this.highChartsRender(this.state.text);
//     }
//
//     render(){
//         const {metadata} = this.props
//         return(
//             <div id={metadata.type}>
//
//             </div>
//         )
//     }
// }
// export default TestChart;