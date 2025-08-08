// src/ReactImage.jsx
import React from 'react';
import React360Viewer from 'react-360-view';

const ReactImages = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>360° View</h2>
      <React360Viewer
        amount={3}
        imagePath="/images/"
        fileName="image{index}.avif"
        autoplay
        spin
        speed={100}
        width={600}
        height={600}
        loadingText="Loading 360° view..."
      />
    </div>
  );
};

export default ReactImages;
