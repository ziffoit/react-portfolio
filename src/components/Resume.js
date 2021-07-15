import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resumePdf from "../assets/Resume.pdf";

function Resume() {
    const [totalPages, setTotalPages] = useState(null);

    function onDocumentLoadSuccess(pdf) {
        const { numPages } = pdf;
        setTotalPages(numPages);
    }

    return (
        <div>
            <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(totalPages), (el, index) => (
                    <>
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    <p>
                        Page {index + 1} of {totalPages}
                    </p>
                    </>
                ))}
            </Document>
        </div>
    );
}

export default Resume;
