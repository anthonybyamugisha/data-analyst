import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Download, 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Printer,
  MoreVertical,
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
  const [isDrawing, setIsDrawing] = useState(false);
  const [annotations, setAnnotations] = useState([]);
  const [currentAnnotation, setCurrentAnnotation] = useState(null);
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

  // Handle rotate right
  const handleRotateRight = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  // Handle previous page
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  // Handle next page
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
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

  // Handle drawing toggle
  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
  };

  // Handle undo
  const handleUndo = () => {
    if (annotations.length > 0) {
      setAnnotations(prev => prev.slice(0, -1));
    }
  };

  // Handle redo
  const handleRedo = () => {
    // Redo functionality would require maintaining a redo stack
    // For simplicity, we'll just clear annotations
    setAnnotations([]);
  };

  // Handle mouse down for drawing
  const handleMouseDown = (e) => {
    if (!isDrawing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCurrentAnnotation({ x, y, path: [] });
  };

  // Handle mouse move for drawing
  const handleMouseMove = (e) => {
    if (!isDrawing || !currentAnnotation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCurrentAnnotation(prev => ({
      ...prev,
      path: [...prev.path, { x, y }]
    }));
  };

  // Handle mouse up for drawing
  const handleMouseUp = () => {
    if (currentAnnotation && currentAnnotation.path.length > 0) {
      setAnnotations(prev => [...prev, currentAnnotation]);
    }
    setCurrentAnnotation(null);
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
            {/* Left side - Document Info */}
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">Anthony_Byamugisha_CV.pdf</span>
            </div>

            {/* Center - Page Navigation */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm font-medium text-foreground">
                {currentPage} / {totalPages}
              </span>
              <button 
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right side - Action Icons */}
            <div className="flex items-center space-x-2">
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
                onClick={toggleDrawing}
                className={`p-2 rounded-lg glass transition-colors ${isDrawing ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
                title="Draw/Annotate"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button 
                onClick={handleUndo}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="Undo"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </button>
              <button 
                onClick={handleRedo}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="Redo"
              >
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                </svg>
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
              <button 
                onClick={handleMoreOptions}
                className="p-2 rounded-lg glass hover:bg-accent transition-colors"
                title="More Options"
              >
                <MoreVertical className="w-4 h-4 text-foreground" />
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
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
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

            {/* Annotations Layer */}
            {annotations.map((annotation, index) => (
              <svg 
                key={index} 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: 10 }}
              >
                <path
                  d={`M ${annotation.x} ${annotation.y} ${annotation.path.map(p => `L ${p.x} ${p.y}`).join(' ')}`}
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
            
            {/* Current annotation being drawn */}
            {currentAnnotation && currentAnnotation.path.length > 0 && (
              <svg 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: 10 }}
              >
                <path
                  d={`M ${currentAnnotation.x} ${currentAnnotation.y} ${currentAnnotation.path.map(p => `L ${p.x} ${p.y}`).join(' ')}`}
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;