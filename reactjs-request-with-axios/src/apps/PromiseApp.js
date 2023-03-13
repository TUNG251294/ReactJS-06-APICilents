import '../App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PromiseApp() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

// Khởi tạo hàm getUsers, hàm này sẽ trả về một Promise gọi API get User sau 3s
// Sử dụng setTimeOut để tạo bộ hẹn giờ gọi API sau khoảng 3s
// Sử dụng axios.get() gọi API ‘http://localhost:3001/api/users
// Sử dụng hàm then() để lấy kết quả trả về là res, sử dụng hàm resolve đưa res làm kết quả trả về của Promise
// Sử dụng hàm catch để lấy lỗi err trả về nếu API trả về lỗi, sử dụng hàm reject đưa err làm kết quả trả về của Promise
  const getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get('http://localhost:3001/api/users')
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          })
        },3000);
    });
  }

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if (loading) return <p>loading...</p>;
  return (
    <div className='App'>
      <h1>Users</h1>
      <ul>
      {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PromiseApp






// import '../App.css';
// import React, { Component } from "react";
// import axios from "axios";

// // Demo sử dụng Promise để hiện loading trong thời gian gọi API
// export default class PromiseApp extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         users: [],
//         loading: false
//       };
//     }
  
//     componentDidMount() {
//       this.setState({ loading: true });
//       this.getUsers()
//         .then(res => {
//           this.setState({ users: res.data });
//         })
//         .catch(err => {
//           throw err;
//         })
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     }
  
//     getUsers = () => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           axios
//             .get("http://localhost:3001/api/users")
//             .then(res => {
//               resolve(res);
//             })
//             .catch(err => {
//               reject(err);
//             });
//         }, 3000);
//       });
//     };
  
//     render() {
//       const { loading, users } = this.state;
//       if (loading) return <p>loading...</p>;
//       return (
//         <div className='App'>
//           <h1>Users</h1>
//           <ul>
//             {users.map(user => (
//               <li key={user.id}> {user.name} </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
  