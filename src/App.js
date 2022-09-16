import './index.css';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import UploadForm from './comps/UploadForm';
import { useState } from 'react';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
