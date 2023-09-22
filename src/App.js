import './App.css';
import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { Document, Page, pdfjs } from "react-pdf";
import 'pdfjs-dist/web/pdf_viewer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Components/Loading';
import SamplePdf from "./pdf.pdf"
import { setCurrentPage, setFile, setLoading } from './slices/pdfSlice';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const { image,file,currentPage, loading } = useSelector(state=>state.file);
  const [pageImage, setPageImage] = useState(null);
  const [TotalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();


  useEffect(()=>{

    
    
  },[file]);

  function onDocumentLoadSuccess({numPages}){
    console.log("this is number of pages : ", numPages);
    setTotalPages(numPages);
    setCurrentPage(1);
    dispatch(setLoading(false));
  }

  if(loading){
    return (<div className='w-screen h-screen overflow-hidden flex justify-center items-center'> <Loading/> </div>)
  }

  function goToPreviousPage(){

  }

  function goToNextPage(){

  }

  return (
    <div className="h-screen overflow-x-hidden w-screen bg-[#f0f0f0]">
        <button onClick={goToPreviousPage}  disabled={currentPage === 1}>
        Previous Page 
      </button>
      <button onClick={goToNextPage} disabled={currentPage === file ?.numPages}>
        Next Page
      </button>.
      <Document file={'./pdf.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
        <Page key={currentPage} pageNumber={currentPage} />
      </Document>
      <p>
        Page {currentPage} of {TotalPages}
      </p>
      {/* <div>
        {pageImage && <img src={pageImage} alt={`Page ${currentPage}`} />}
      </div> */}
    </div>
  );
}

export default App;
