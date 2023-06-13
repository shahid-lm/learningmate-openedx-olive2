// import { Component } from "react";
// import Donut from "./utility";
// import SelectCourseDropdown from "../../others/dropdown/Dropdown";
//
// class Weightage extends Component{
//     constructor(props){
//         super(props);
//         console.log(`${props.courseData}`)
//         this.state = {
//             courseData : props.courseData,
//             courseNames : this.getCourseNames(props.courseData),
//             selectedCourse : props.courseData[0] ? props.courseData[0].course_name : '', //props.courseData[0].course_name
//             slectedCourseMetadata : {}
//           }
//     }
//
//     getCourseNames(alldata){
//         const coursenames = []
//         for (const data of alldata){
//           coursenames.push(data.course_name)
//         }
//         return coursenames
//     }
//
//     onSelectHandler = (e)=>{
//         this.setState(()=>{return {selectedCourse : e.target.value}})
//     }
//
//     render(){
//         const filteredCourseData = this.state.courseData.filter((data)=>{
//             return data.course_name === this.state.selectedCourse
//         })
//         let assignmentPolicies = []
//         if (filteredCourseData.length !== 0){
//             console.log(`filteredCourseData ${JSON.stringify(filteredCourseData)}`)
//             assignmentPolicies = filteredCourseData[0].grading_policy.assignment_policies
//         }
//         console.log(`Filtered Course ${filteredCourseData}`)
//         //this.setState(()=>{return {slectedCourseMetadata : filteredCourseData[0].grading_policy.assignment_policies}})
//         return(
//             <>
//                 <div>
//                     <SelectCourseDropdown CourseNames={this.state.courseNames} onSelectHandler={this.onSelectHandler}/>
//                     <Donut selectedCourseMetadata={assignmentPolicies} />
//                 </div>
//             </>
//         )
//     }
// }
//
// export default Weightage;