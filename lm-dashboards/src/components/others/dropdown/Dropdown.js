//
//
// import { Component } from "react";
// import './dropdown.css'
// import Donut from "../../charts/GradeDistributionDonut/utility";
//
// class SelectCourseDropdown extends Component{
//   constructor(props){
//     // console.log(1)
//     super(props);
//
//     this.state = {}
//   }
//
//   render(){
//     const {CourseNames , onSelectHandler} = this.props
//     return(
//     <>
//       <div>
//         <input type="search" list="data" onChange={onSelectHandler} placeholder="Select course" style={{width : '20%', alignSelf : 'center'}}/>
//             <datalist id="data">
//               {
//               CourseNames.map((option)=>{
//                   return <option>{option}</option>
//               })
//               }
//             </datalist>
//         </div>
//     </>
//     )
//   }
// }
//
// export default SelectCourseDropdown;