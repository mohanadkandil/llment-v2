import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Skeleton } from "@/components/ui/skeleton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = ({ file }: any) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Track loading status

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setIsLoading(false); // Update loading status when the document is fully loaded
  }

  function onDocumentLoadError(error: any) {
    console.error("PDF load error: ", error);
    setIsLoading(false); // Also update loading status on error
  }

  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="pdf-viewer-container flex flex-col items-center my-4">
      {/* {isLoading && <Skeleton className="h-[250px] w-[200px] rounded" />} */}
      <div className="pdf-container w-[200px] relative h-[250px] overflow-hidden">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={200} />
        </Document>
      </div>
      <div className="pdf-viewer-controls flex gap-2 justify-center items-center w-[200px] mt-2">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="p-1 bg-gray-200 text-black rounded"
        >
          <GrPrevious />
        </button>
        <button
          onClick={goToNextPage}
          // @ts-ignore
          disabled={pageNumber >= !numPages}
          className="p-1 bg-gray-200 text-black rounded"
        >
          <GrNext />
        </button>
        <a href={file} download className="p-1 bg-gray-200 text-black rounded">
          <FaDownload />
        </a>
        <button
          onClick={() => window.open(file, "_blank")}
          className="p-1 bg-gray-200 text-black rounded"
        >
          <MdFullscreen />
        </button>
      </div>
    </div>
  );
};

const PdfViewer = ({ files }: any) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {files.map((file: any, index: any) => (
        <Pdf key={index} file={file} />
      ))}
    </div>
  );
};

export default PdfViewer;
