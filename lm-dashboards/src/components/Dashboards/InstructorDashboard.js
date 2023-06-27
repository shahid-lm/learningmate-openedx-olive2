import courseData from '../../API/DataInstrutor.json'
import TimeData from '../../API/data1.json'
import { Component } from 'react'
import '../../API/api.css'
import InstructorCourses from '../charts/InstrutorTable/InstructorData'
import InstructorCards from '../charts/InstructorCard/InstructorCards'
import InstructorBar from "../charts/InstructorBar/InstructorEnroll"
import CourseTimeBar from "../charts/CourseTimeLogBar/CourseTimeLog";


class InstructorDashboardContent extends Component {
    constructor(){
        console.log('Constructor called')
        super();
        this.state = {
            allCourseData : [],
            allCourseTimeData: []

        }
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     console.log('ComponentDidMount called');
        //     this.setState({allCourseData : courseData.instructor_dashboard_data})
        //     this.setState({allCourseTimeData : TimeData.course_time_spend_data})
        //
        // },200)
        console.log('ComponentDidMount called')
        fetch(`${window.location.origin}/api/instructor/v1/instructor_dashboard_data/`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allCourseData : [...res.instructor_dashboard_data]
                })
            })
            .catch((error => {
                console.error(error);
            }));
        fetch(`${window.location.origin}/api/instructor/v1/course_activity_time_log/`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allCourseTimeData : [...res.course_time_spend_data]
                })
            })
            .catch((error => {
                console.error(error);
            }));

    };



    render(){
        console.log('Render called')
        const allCourseData = this.state.allCourseData
        const allCourseTimeData =this.state.allCourseTimeData
        // console.log(allCourseTimeData)
        console.log(`#########${JSON.stringify(allCourseTimeData)}`)
        return(
    <div>

        <div className="row justify-content-center demo" >
             <div className="card w-100 card-margin-right">
                <div className="card-body">
                    <InstructorCards courseData={allCourseData}/>
                </div>
                <CourseTimeBar timeData={allCourseTimeData}/>
                <InstructorBar courseData={allCourseData}/>
                <InstructorCourses courseData={allCourseData}/>
             </div>
        </div>
    </div>
        )
    }
}

export default InstructorDashboardContent;