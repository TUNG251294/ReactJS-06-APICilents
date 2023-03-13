import React, {useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'

// chương trình hiển thị danh sách User, sử dụng mock API
function AxiosGetApp() {
    const [state, setState] = useState(
        {users:[]}
    );

// Sử dụng hàm axios.get() gọi API http://localhost:3001/api/users
// Sử dụng hàm then() để lấy kết quả trả về, sau đó sử dụng hàm setState để gán giá trị trả về này cho users
// Sử dụng hàm catch để lấy lỗi trả về nếu API trả về lỗi, sử dụng throw để đưa ra lỗi
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/users")
            .then(res => {
                setState({users: res.data});
            })
            .catch(err => {
                throw err;
            })
        },[]);

// Khai báo biến users từ state
    const {users} = state;
    return (
       <div className='App'>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
       </div> 
    )
}
export default AxiosGetApp

// _____________________________________________________________________
// import '../App.css';
// import React, { Component } from "react";
// import axios from "axios";

// // chương trình hiển thị danh sách User, sử dụng mock API
// export default class AxiosGetApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }
  
//   // Sử dụng hàm axios.get() gọi API http://localhost:3001/api/users
//   // Sử dụng hàm then() để lấy kết quả trả về, sau đó sử dụng hàm setState để gán giá trị trả về này cho users
//   // Sử dụng hàm catch để lấy lỗi trả về nếu API trả về lỗi, sử dụng throw để đưa ra lỗi
//   componentDidMount() {
//     axios
//       .get("https://640841502f01352a8a8dc0ad.mockapi.io/api/v1/users")
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   render() {
//     const { users } = this.state;
//     return (
//       <div className='App'>
//         <h1>Users</h1>
//         <ul>
//           {users.map(user => (
//             <li key={user.id}> {user.name} </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }