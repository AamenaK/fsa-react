import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UserList from "./users/UserList";
import NotFound from "./NotFound";
import Footer from "./footer";

const AppRoutes = () => <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users" element={<UserList/>} />
        {/* <Route path="*" element={<Home/>} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</BrowserRouter>

export default AppRoutes;