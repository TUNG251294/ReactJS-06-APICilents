import React,{useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios'

function Users() {
    const [state, setState] = useState({users: []});
    const navigate = useNavigate();
    // su dung navigate de xu ly su kien dan toi 1 url thay vi phai tao handle method

useEffect(() => {
    axios
    .get('http://localhost:3001/api/users')
// .get("https://64084a2c2f01352a8a8e9fe1.mockapi.io/api/users")
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

            {users.map(user => (
                <div key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </div>
            ))}
            
            <button type='button' onClick={() => navigate('/user/add')}>Create</button>
        </div>
    )
}
export default Users

// _____________________________________________________________________________
// import React, { Component } from "react";
// import axios from "axios";
// import '../App.css';

// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3001/api/users")
//   // .get("https://64084a2c2f01352a8a8e9fe1.mockapi.io/api/users")
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   handleCreate = () => {
//     window.location.href = "/user/add";
//   };

//   render() {
//     const { users } = this.state;
//     return (
//       <div className='App'>
//         <h1>Users</h1>
//         {users.map(user => (
//           <div key={user.id}>
//             <a href={`/user/${user.id}`}> {user.name} </a>
//           </div>
//         ))}
//         <button type="button" onClick={this.handleCreate}>
//           Create
//         </button>
//       </div>
//     );
//   }
// }

// export default Users;