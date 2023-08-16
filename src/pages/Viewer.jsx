import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const pdfView = (state) => {
    const [numPages, setNumPages] = useState(null); // 총 페이지수
    const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
    const [pageScale, setPageScale] = useState(1); // 페이지 스케일

    const location = useLocation();
    const pdfName = location.state.pdfName;
    console.log(pdfName);

    function onDocumentLoadSuccess({numPages}) {
        console.log(`numPages ${numPages}`);
        setNumPages(numPages);
    }

    return (
        <>
            <div>
                <Link to="/search">검색창으로 돌아가기</Link>
            </div>
            {/* pdf 크기가 1280 * 720이 넘는 경우, overflow 처리 */}
            <div style={{width: '1280px', height: '720px', overflow: 'auto'}}>
                <Document file={`/public/${pdfName}.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page width={1280} height={720} scale={pageScale} pageNumber={pageNumber}/>
                </Document>
            </div>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>

                <p>페이지 이동 버튼</p>
                <button onClick={() => {
                    setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1)
                }}> +
                </button>
                <button onClick={() => {
                    setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
                }}> -
                </button>

                <p>페이지 스케일</p>
                <button onClick={() => {
                    setPageScale(pageScale === 3 ? 3 : pageScale + 0.1)
                }}> +
                </button>
                <button onClick={() => {
                    setPageScale((pageScale - 1) < 1 ? 1 : pageScale - 1)
                }}> -
                </button>
            </div>
        </>
    );
};

export default pdfView;