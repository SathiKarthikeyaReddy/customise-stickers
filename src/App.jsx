import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Placeholder for AI sticker generation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      // Simulate sticker generation
      setLoading(true);
      setTimeout(() => {
        const url = URL.createObjectURL(file);
        setStickers([
          ...stickers,
          { url, name: file.name.replace(/\.[^/.]+$/, '') + '-bino-sticker.png' },
        ]);
        setLoading(false);
      }, 1500);
    }
  };

  const handleDownload = (url, name) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
  };

  return (
    <>
      <div className="bino-banner">
        🚀 Try <b>Bino</b> AI Search Bot for WhatsApp! <a href="https://bino.bot/" style={{color:'#fff',textDecoration:'underline'}}>Check this for more services at exclusive discounts</a>
      </div>
      <div className="upload-section">
        <h2>AI WhatsApp Sticker Generator</h2>
        <p>Upload your image to create WhatsApp/Snapchat-like stickers with a Bino watermark!</p>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {loading && <p>Generating sticker...</p>}
        <div className="sticker-preview">
          {stickers.map((sticker, idx) => (
            <div key={idx} style={{position:'relative'}}>
              <img src={sticker.url} alt="sticker" className="sticker-img" />
              {/* Bino watermark overlay (placeholder) */}
              <span style={{position:'absolute',bottom:8,right:8,background:'#1e90ffcc',color:'#fff',padding:'2px 8px',borderRadius:'6px',fontSize:'0.8em'}}>Bino</span>
              <button onClick={() => handleDownload(sticker.url, sticker.name)} style={{marginTop:'0.5rem',width:'100%'}}>Download</button>
            </div>
          ))}
        </div>
        <p style={{fontSize:'0.9em',marginTop:'1rem'}}>You can import these stickers into WhatsApp using the "Add Stickers" feature in your app.</p>
      </div>
    </>
  );
}

export default App;
