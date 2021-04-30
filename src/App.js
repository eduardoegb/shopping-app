import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectActiveTab } from './app/appSlice';
import Navbar from './components/Navbar';
import View from './views/View';

function App() {
  const activeTab = useSelector(selectActiveTab);

  return (
    <div className="App">
      <Navbar activeTab={activeTab} />
      <View activeTab={activeTab} />
    </div>
  );
}

export default App;
