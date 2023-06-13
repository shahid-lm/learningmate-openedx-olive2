import { Component } from "react";
// import './table.css'

class InstructorCourses extends Component {
    constructor(props){
        super(props);
        this.state = {}

    }

    render(){

        const {courseData} = this.props
        const mounted_data = []
        try {
            for (const data of courseData) {
                const payload = {
                    "course_name": data.sections[0].course_display_name,
                    "course_id": data.sections[0].course_id,
                    "num_sections": data.sections[0].num_sections,
                    "has_started": data.sections[0].has_started ? "True" : "False",
                    "started_date": data.sections[0].start_date,
                    "enrollment_count": data.sections[0].enrollment_count.total,
                    "has_ended": data.sections[0].has_ended ? "True" : "False",
                    "end_date": data.sections[0].end_date
                }
                mounted_data.push(payload)
                console.log(data)
            }}
        catch(err){
            console.log(err)
        }

        return(
            <div className={"demo"}>


                <table className="table table-hover caption-top">
                    <caption><h4> Instructor Table Data</h4></caption>

                <thead className="table-info">

                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course Id</th>
                        <th scope="col">Number Of Sections </th>
                        <th scope="col">Has Started</th>
                        <th scope="col">Started Date</th>
                        <th scope="col">Has Ended</th>
                         <th scope="col">End Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    mounted_data.map(data=>{

                        return(

                            <tr scope="row" key={data.section_key}>
                                <td>{data.course_name}</td>
                                <td>{data.course_id}</td>
                                {/*<td>{data.enrollment_count}</td>*/}
                                <td>{ data.num_sections}</td>
                                <td>{ data.has_started}</td>
                                <td>{ data.started_date}</td>
                                <td>{data.has_ended}</td>
                                <td>{data.end_date}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>


            </div>
        )
    }
}

export default InstructorCourses;