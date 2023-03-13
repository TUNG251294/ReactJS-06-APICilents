import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from '../pages/Users'
import UserDetails from '../pages/UserDetails'

// Tạo và chỉnh sửa User thông qua call API bằng Axios
function AxiosPostApp() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={"/user/add"} element={<UserDetails />} />
        <Route path={`/user/:userId`} element={<UserDetails />} />
      </Routes>
    </BrowserRouter> 
    )
}

export default AxiosPostApp
