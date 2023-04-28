import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MyStore from './MyStore';
import Item from './Item';
import NotFound from './NotFound';
import './App.css';

const inventory = [
  { id: '1', name: 'Shoes', description: 'Stylish shoes for all occasions' },
  { id: '2', name: 'Backpack', description: 'A durable backpack for your everyday needs' },
  { id: '3', name: 'Travel Mug', description: 'Keep your drinks hot or cold on the go' },
];

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MyStore inventory={inventory} />} />
          <Route path="/store" element={<MyStore inventory={inventory} />} />
          <Route path="/store/:itemId" element={<Item inventory={inventory} />} />
          <Route path="/store/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
