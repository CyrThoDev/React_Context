import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProverbsPage from './components/ProverbsPage';
import SettingsPage from './components/SettingsPage';
import { LanguagesContextProvider } from './contexts/LanguagesContext';

function App() {
  // To be instanciate in the languageContext that you should do

  return (
    <Router>
      <LanguagesContextProvider>
        <Routes>
          <Route path="/" element={<ProverbsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </LanguagesContextProvider>
    </Router>
  );
}

export default App;
