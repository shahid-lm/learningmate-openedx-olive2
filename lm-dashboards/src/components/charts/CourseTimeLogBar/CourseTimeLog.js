import Highcharts from 'highcharts';
import { Component } from 'react';

class CourseTimeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }



    highChartsRender = (coursenames, series,max_enrollment)=> {
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo: 'leaner-dashboard3'
            },
            title: {
                text: 'Time Spent Per Course (Hours)'
            },
            xAxis: {
                categories: coursenames
            },
            yAxis: {
                min: 0,
                max: max_enrollment,
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                },
                column: {
                    dataLabels: {
                      enabled: true,
                      useHTML: true,
                      formatter: function() {
                        return '<div style="text-align:top;"><div>' + this.y +  '</div></div>';
                      }
                    }
                },
            },
            tooltip: {
                formatter: function() {
                    return this.x + '<br>' + 'Total Time (Hours): ' + this.y;
                }
            },
            series: series
        });
    };

    render() {
        const {timeData} = this.props
        console.log(timeData)
        try{
            const [total_times, course_names] = [[],[]]
            if(timeData.length > 0){
                for (let data of timeData){
                    const course_name = data.course_id
                    const total_time = parseFloat(((data.total_time)/3600).toFixed(2))
                    total_times.push(total_time)
                    course_names.push(course_name)
                console.log(total_times)
                console.log(course_names)
                };
                const series = [{
                                name: 'Total Time Spent (Hours)',
                                data: total_times,
                                color: '#3498db',
                                index: 1
                            }]
                console.log(series)
                const max_time =Math.max(...total_times)
                console.log(max_time)
                console.log(typeof (max_time))

                this.highChartsRender(course_names,series,max_time)
            }
            else{
                const series = [{
                    name: 'Total Time Spent (Hours)',
                    data:  total_times,
                    color: '#3498db',
                    index: 1,

                }]
                 const max_time=0

                this.highChartsRender(course_names,series,max_time)
            }

            }
        catch(err){
            console.log(err)
        }
        console.log('Render called')
        return (
         <div id="leaner-dashboard3">
         </div>
        );
    }
}




export default CourseTimeBar;