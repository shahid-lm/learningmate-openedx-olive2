import { Component } from "react";
import axios from 'axios';

class ApiTest1 extends Component {
    constructor(){
        super()
        this.state = {"data" : []}
    }

    componentDidMount() {
        let url = "https://tutor.bhbazar.com/api/course_home/progress/learner_dashboard_statistics";
        // const url ="https://randomuser.me/api/";
        let config = {
          headers: {
            Authorization: "Bearer RoF7cvbqrUORaHjgDghJfXLHRndj14",
            // 'Access-Control-Allow-Origin': 'http://localhost:3000',
            // 'Access-Control-Allow-Credentials': true,
            // 'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
        // let headers = {
        //     // Accept: "*/*",
        //     "Content-Type": "application/json",
        //     "Authorization": "Bearer RoF7cvbqrUORaHjgDghJfXLHRndj14"};

        // fetch(url,
        //   { mode: 'cors' },
        //   {
        //     method: "GET",
        //     headers,
        //     // body: JSON.stringify({
        //     //   email: this.username,
        //     //   password: this.password,
        //     // }),
        //   })
        //   .then((response) => {
        //     if (response.status===200) {
        //       return response.json();
        //     }
        //     throw new Error('Some error');
        //   })
        // .then((responseJson) => {
        //     console.log(responseJson)
        //   })
        // .catch((error) => {
        //     console.log(error)
        //   });

      axios.get(url, config)
      .then((response) => {
        if (response.status===200) {
          return response.data;
        }
        throw new Error('Some error');
      })
      .then((responseJson) => {
        console.log(responseJson)
      })
    .catch((error) => {
        console.log(error)
      });
    }

    render() {
        return (
         <div id="api-test">
            Call to API js
         </div>
        );
    }
}

export default ApiTest1;