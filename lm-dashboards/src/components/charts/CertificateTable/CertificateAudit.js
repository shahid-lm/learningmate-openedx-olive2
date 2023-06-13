//
// import { Component } from "react";
// import './table.css'
//
// class CetificateStatusAudit extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             certificates : [],
//             courseData : this.props.courseData
//         }
//     }
//
//     componentDidMount(props){
//         const mounted_data = []
//         for (const data of this.state.courseData){
//             const payload = {
//                 "course_name" : data.course_name,
//                 "couse_mode" : data.certificate_data.cert_status === "audit_passing" ? "Audit" : data.certificate_data.cert_status,
//                 "certificate_status" : data.certificate_data.cert_status === "audit_passing" ? "NA" : data.certificate_data.cert_status,
//                 "certificate_url" : data.certificate_data.download_url === null ? "NA" : data.certificate_data.download_url
//             }
//             mounted_data.push(payload)
//         }
//         this.setState(()=>{ return {
//             certificates : mounted_data
//         }
//
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 <table className="table table-hover caption-top">
//                 <caption><h4>Audited Courses</h4></caption>
//                 <thead className="table-info">
//                     <tr>
//                     <th scope="col">Course Name</th>
//                     <th scope="col">Course Mode</th>
//                     <th scope="col">Certificate Status</th>
//                     <th scope="col">Certificate URL</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     this.state.certificates.map(data=>{
//                         return(
//                             <tr scope="row" key={data.course_name}>
//                                 <td>{data.course_name}</td>
//                                 <td>{data.couse_mode}</td>
//                                 <td>{data.certificate_status}</td>
//                                 <td>{data.certificate_url}</td>
//                             </tr>
//                         )
//                     })
//                 }
//                 </tbody>
//                 </table>
//
//             </div>
//         )
//     }
// }
//
// export default CetificateStatusAudit;