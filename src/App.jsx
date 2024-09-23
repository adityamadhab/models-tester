import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { IndexPage } from './pages/IndexPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import ModelPage from './pages/ModelPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-screen no-scrollbar">
        <Header/>
        <main className="mx-auto w-screen no-scrollbar">
          <Routes>
            <Route index path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/model" element={<ModelPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
