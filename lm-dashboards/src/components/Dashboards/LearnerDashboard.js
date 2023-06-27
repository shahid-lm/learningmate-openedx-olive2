// import courseData from '../../API/data.json'
// // import allData from '../../API/api_test'
// import { Component } from 'react'
// import Bar from '../charts/CourseProgressBar/ProgressCompleted';
// import CetificateStatusPaid from '../charts/CertificateTable/CertificatePaid';
// import CetificateStatusAudit from '../charts/CertificateTable/CertificateAudit';
// import Bullet from '../charts/TargetGrade/Grades';
// import Weightage from '../charts/GradeDistributionDonut/WeightageDistribution'
// import '../../API/api.css'
//
// class LearnerDashboardContent extends Component {
//     constructor(){
//         console.log('Constructor called')
//         super();
//         this.state = {
//             // allCourseData : courseData.all_enrolled_course_metadata,
//             allCourseData : []
//         }
//         // this.fetchStudentData()
//     }
//
//     componentDidMount(){
//         console.log('ComponentDidMount called')
//         fetch('https://tutor.bhbazar.com/api/course_home/progress/learner_dashboard_statistics')
//             .then(res => res.json())
//             .then(res => {
//                 this.setState({
//                     allCourseData : [...res]
//                 })
//             })
//             .catch((error => {
//                 console.error(error);
//             }));
//     };
//
//
//
//     render(){
//         console.log('Render called')
//         const allCourseData = this.state.allCourseData
//         console.log(`#########${JSON.stringify(allCourseData)}`)
//         return(
//     <div>
//         <div className="row justify-content-center">
//             <div className="card w-50 card-margin-right">
//                 <div className="card-body">
//                     <Bar courseData={allCourseData}/>
//                 </div>
//             </div>
//             <div className="card w-auto card-margin-right">
//                 <div className="card-body">
//                     <Bullet courseData={allCourseData}/>
//                 </div>
//             </div>
//         </div>
//         <div className="row justify-content-center">
//             <div className="card w-50 card-margin-right">
//                 <div className="card-body">
//                     <CetificateStatusPaid courseData={allCourseData}/>
//                 </div>
//             </div>
//             <div className="card w-auto card-margin-right">
//                 <div className="card-body">
//                     <CetificateStatusAudit courseData={allCourseData}/>
//                 </div>
//             </div>
//         </div>
//         <div className="row justify-content-center">
//             <div className="card w-100 card-margin-right">
//                 <div className="card-body">
//                     <Weightage courseData={allCourseData}/>
//                 </div>
//             </div>
//         </div>
//     </div>
//         )
//     }
// }
//
// export default LearnerDashboardContent;