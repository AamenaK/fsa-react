import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ filename }) => {

    const [pages, setPages] = useState([]);

    const onDocLoaded = (evt) => {
        const pagesArr = Array.from(Array(evt.numPages).keys()); 
        setPages(pagesArr);
    }

    return <Document onLoadSuccess={onDocLoaded} file={filename}>
        {pages.map(page => <Page pageNumber={page + 1} />)}
    </Document>
}

export default PDFViewer;