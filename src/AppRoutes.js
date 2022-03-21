import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UserList from "./users/UserList";
import NotFound from "./NotFound";
import Footer from "./footer";
import Register from "./Register";
import Login from "./Login";
import UpdateUser from "./UpdateUser";
import AutoCounter from "./utils/AutoCounter";

const AppRoutes = () => <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/update" element={<UpdateUser />} />
        {/* <Route path="*" element={<Home/>} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<AutoCounter />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</BrowserRouter>

export default AppRoutes;