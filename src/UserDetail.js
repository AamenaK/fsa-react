import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "./services/userService";
import User from "./users/User";
import { Document, Page, pdfjs } from 'react-pdf';
import ShouldRender from "./utils/ShouldRender";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const UserDetail = (props) => {

    const[user, setUser] = useState({});
    const[pages, setPages] = useState([]);
    const params = useParams();

    useEffect(async () => {
        const res = await userService.getUserByEmail(params.email);
        setUser(res.data);
    }, []);

    const onDocLoaded = (evt) => {
        const pagesArr = Array.from(Array(evt.numPages).keys());
        setPages(pagesArr);
    }

    return <div>
        <User user={user} />
        <ShouldRender cond = {user.resume}>
            <Document onLoadSuccess={onDocLoaded} file={`https://fsa-node-api.herokuapp.com/uploads/${user.resume}`}>
                {pages.map(page => <Page pageNumber={page + 1} />)}
            </Document>
        </ShouldRender>
    </div>
}

export default UserDetail;