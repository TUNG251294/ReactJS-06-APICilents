import React, {useState, useEffect} from 'react'
import '../App.css'
import axios from "axios";

// chương trình hiển thị danh sách User kèm theo số bài article tương ứng, sử dụng mock API
export default function AxiosAllApp() {
    const[user, setUser] = useState({
        users: []
    });
  
    useEffect(() => {
      const getUsers = axios.get("http://localhost:3001/api/users");
      const getArticle = axios.get("http://localhost:3001/api/articles");
      axios
        .all([getUsers, getArticle])
        .then(
          axios.spread((res1, res2) => {
            const users = res1.data.map(user => {
              return {
                ...user,
                article: res2.data.filter(item => {
                  return item.user_id === user.id;
                })
              };
            });
            setUser({ users: users });
          })
        )
        .catch(err => {
          throw err;
        });
}, []);
    
      const {users} = user;
      return (
        <div className='App'>
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Article numbers</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td> {user.name} </td>
                  <td> {user.article.length} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

// __________________________________________________________________
// import '../App.css';
// import React, { Component } from "react";
// import axios from "axios";

// // chương trình hiển thị danh sách User kèm theo số bài article tương ứng, sử dụng mock API
// export default class AxiosAllApp extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         users: []
//       };
//     }
  
//     componentDidMount() {
//       const getUsers = axios.get("http://localhost:3001/api/users");
//       const getArticle = axios.get("http://localhost:3001/api/articles");
//       axios
//         .all([getUsers, getArticle])
//         .then(
//           axios.spread((res1, res2) => {
//             const users = res1.data.map(user => {
//               return {
//                 ...user,
//                 article: res2.data.filter(item => {
//                   return item.user_id === user.id;
//                 })
//               };
//             });
//             this.setState({ users: users });
//           })
//         )
//         .catch(err => {
//           throw err;
//         });
//     }
  
//     render() {
//       const { users } = this.state;
//       return (
//         <div className='App'>
//           <h1>Users</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Article numbers</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td> {user.name} </td>
//                   <td> {user.article.length} </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   }
  

  
