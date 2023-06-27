async function allData() {
  let obj;

  const res = await fetch('https://gorest.co.in/public/v2/users')

  obj = await res.json();

  return obj

  // console.log(obj)
}

// const studentData = () =>{
    // let url = "https://tutor.bhbazar.com/api/course_home/progress/learner_dashboard_statistics";
    // let url = "https://gorest.co.in/public/v2/users"
    // let all_data;
    // axios.get(url)
    //     .then(response => response.data)
    //     .then((responseJson) => {
    //       all_data = responseJson
    //     })
    //   .catch((error) => {
    //       console.log(error.response.status);
    //       console.log(error.response.data);
    //       console.log(error.response.headers);
    //     });
//   return all_data
// };

// console.log(`############ ${studentData()}`)
export default allData;