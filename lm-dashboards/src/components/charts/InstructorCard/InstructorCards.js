import { Component } from "react";
import './card.css'

class InstructorCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}





    }




    render() {

        const mounted_data = []
        const {courseData} = this.props

        try {
            for (const data of courseData) {
                const payload = {
                "course_name": data.sections[0].course_display_name,
                "enrollment_count": data.sections[0].enrollment_count.total
            }
                 mounted_data.push(payload)
        }
        }
        catch(err){
            console.log(err)
        }


        return (
            <div>

                <div className="card-total-course demo w-25 " style={{width: "18rem"}}>
                    {/*    <div className="cardd w-10">*/}
                    <div className="card-body">
                        <h5 className="card-title">Total Courses</h5>
                        <p className="card-text">{courseData.length} </p>
                    </div>
                </div>
                {/*<h5><center> Courses:</center> </h5>*/}
                <caption><h5><center> Courses:</center> </h5></caption>
                <div className="card-group ">

                    {
                        mounted_data.map(data => {

                            return (

                                <div className="course-card ">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.course_name}</h5>
                                        <p className="card-text">Enrollment Count: {data.enrollment_count} </p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        )
    }

}







export default InstructorCards;