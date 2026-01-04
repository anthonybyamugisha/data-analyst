import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Download, 
  RotateCcw, 
  Printer,
  FileText,
  Minus,
  Plus
} from 'lucide-react';
import { useToast } from '../hooks/useToast';

const CV = () => {
  const [scale, setScale] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [rotation, setRotation] = useState(0);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const { toast } = useToast();

  // CV file path
  const cvPath = '/documents/cv.pdf';

  useEffect(() => {
    // Check if PDF file exists
    fetch(cvPath, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setPdfError(true);
        } else {
          setPdfLoaded(true);
        }
      })
      .catch(() => {
        setPdfError(true);
      });
  }, [cvPath]);

  // Handle zoom in
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 3));
  };

  // Handle zoom out
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  // Handle fit to page
  const handleFitToPage = () => {
    setScale(1);
  };

  // Handle rotate left
  const handleRotateLeft = () => {
    setRotation(prev => (prev - 90) % 360);
  };


  // Handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Anthony_Byamugisha_CV.pdf';
    link.click();
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  // Handle more options
  const handleMoreOptions = () => {
    alert('More options functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* PDF Viewer Section with Document Info Header - positioned below navbar */}
      <div className="bg-transparent pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left side - Document Info with Zoom Controls */}
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">Anthony_Byamugisha_CV.pdf</span>
              <div className="flex items-center space-x-2 ml-4">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                >
                  <Minus className="w-4 h-4 text-foreground" />
                </button>
                <span className="text-sm font-medium text-foreground min-w-[40px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button 
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                >
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* Right side - Action Icons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleFitToPage}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="Fit to Page"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button 
                onClick={handleRotateLeft}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-foreground" />
              </button>
              <button 
                onClick={handleDownload}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="Download"
              >
                <Download className="w-4 h-4 text-foreground" />
              </button>
              <button 
                onClick={handlePrint}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="Print"
              >
                <Printer className="w-4 h-4 text-foreground" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 flex items-center justify-center p-4 mt-20">
        <div className="relative max-w-6xl w-full">
          <div 
            className="relative bg-white shadow-lg mx-auto"
            style={{ 
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-in-out',
              width: '210mm',
              height: '297mm'
            }}
            
          >
            {/* PDF Content */}
            <div className="w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
              {pdfError ? (
                <div className="text-center p-8 max-w-md">
                  <div className="text-6xl mb-4">📄</div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">CV Document</h2>
                  <p className="text-muted-foreground mb-4">Could not load CV file</p>
                  <div className="text-sm text-muted-foreground bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold text-yellow-800 mb-2">Please ensure:</p>
                    <ul className="text-left space-y-1">
                      <li>• File is named "cv.pdf"</li>
                      <li>• File is placed in public/documents/ folder</li>
                      <li>• File is a valid PDF</li>
                      <li>• File is not corrupted</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setPdfError(false);
                      fetch(cvPath, { method: 'HEAD' })
                        .then(response => {
                          if (!response.ok) {
                            setPdfError(true);
                          } else {
                            setPdfLoaded(true);
                          }
                        })
                        .catch(() => {
                          setPdfError(true);
                        });
                    }}
                    className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Retry Loading
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <object 
                    data={cvPath}
                    type="application/pdf"
                    width="100%"
                    height="800px"
                    className="max-w-4xl"
                    title="CV Document"
                  >
                    <div className="text-center p-8">
                      <p className="text-muted-foreground mb-4">Your browser does not support PDF viewing.</p>
                      <a 
                        href={cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Open CV in New Tab
                      </a>
                    </div>
                  </object>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;