import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './context/UserContext';
import userService from './services/userService';
import ShouldRender from './utils/ShouldRender';
import { useNavigate } from 'react-router-dom';
// import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function Header() {
    const { isLoggedIn, setLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const onLogout = () => {
        userService.logout();
        setLogin(false);
        navigate('/login');
    }

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">FSA Jobs</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
        <ShouldRender cond={!isLoggedIn}>
            <div>
                <Link to="/register" className="btn btn-sm btn-danger">Register</Link>=
            </div>
            <div>
                <Link to="/login" className="btn btn-sm btn-danger">Login</Link>
            </div>
        </ShouldRender>
        <ShouldRender cond={isLoggedIn}>
        <button onClick={onLogout} className="btn btn-sm btn-danger">Logout</button>
        </ShouldRender>
    </div>
    </nav>
}

export default Header;