import React, { useState } from 'react';

const ToggleButton = ({ setView }) => {
  const [view, setLocalView] = useState('grid');

  const toggleView = () => {
    const newView = view === 'grid' ? 'list' : 'grid';
    setLocalView(newView);
    setView(newView);
  };

  return <button onClick={toggleView}>{view === 'grid' ? 'List View' : 'Grid View'}</button>;
};

export default ToggleButton;
