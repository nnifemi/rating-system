import React, { useState } from 'react';
import './css/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(prevState => !prevState);
  };

  return (
    <main>
      <div className='container'>
        <StarRating />
        {isDialogOpen && <Dialog toggleDialog={toggleDialog} />}
        <button className="dialog-button" onClick={toggleDialog}>Toggle Dialog</button>
      </div>
    </main>
  );
}

export default App;