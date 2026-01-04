import React from 'react';

const ImageTest = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test</h1>
      <p className="mb-4">Testing image paths for GitHub Pages deployment</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Anthony Image</h2>
          <img 
            src="../images/anthony.jpg" 
            alt="Anthony" 
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/300x300/3b82f6/ffffff?text=Anthony';
            }}
          />
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Vendor Sync</h2>
          <img 
            src="../images/Vendor sync.jpeg" 
            alt="Vendor Sync" 
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/300x300/3b82f6/ffffff?text=Vendor+Sync';
            }}
          />
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Forex Giants</h2>
          <img 
            src="../images/forex giants mobile app.jpeg" 
            alt="Forex Giants" 
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/300x300/3b82f6/ffffff?text=Forex+Giants';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTest;