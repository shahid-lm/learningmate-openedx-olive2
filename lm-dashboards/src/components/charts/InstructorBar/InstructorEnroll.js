import Highcharts from 'highcharts';
import { Component } from 'react';

class InstructorBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }



    highChartsRender = (coursenames, series,max_enrollment)=> {
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo: 'leaner-dashboard2'
            },
            title: {
                text: 'Enrollment Counts Status'
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
                    return this.x + '<br>' + 'progress: ' + this.y;
                }
            },
            series: series
        });
    };

    render() {
        const {courseData} = this.props
        console.log(courseData)
        try{
            const [enrollment_counts, course_names] = [[],[]]
            if(courseData.length > 0){
                for (let data of courseData){
                    const course_name = data.sections[0].course_display_name
                    const enrollment_count = data.sections[0].enrollment_count.total
                    enrollment_counts.push(enrollment_count)
                    course_names.push(course_name)
                    console.log(enrollment_counts)
                    console.log(course_names)
                };
                const series = [{
                                name: 'Enrollment',
                                data: enrollment_counts,
                                color: '#3498db',
                                index: 1
                            }]
                const max_enrollment =Math.max(...enrollment_counts)
                console.log(max_enrollment)
                console.log(typeof (max_enrollment))

                this.highChartsRender(course_names,series,max_enrollment)
            }
            else{
                const series = [{
                    name: 'Enrollment',
                    data:  enrollment_counts,
                    color: '#3498db',
                    index: 1,
                }]
                 const max_enrollment=0

                this.highChartsRender(course_names,series,max_enrollment)
            }

            }
        catch(err){
            console.log(err)
        }
        console.log('Render called')
        return (
         <div id="leaner-dashboard2">
         </div>
        );
    }
}




export default InstructorBar;