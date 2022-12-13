import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { DataContextProvider } from './hooks/DataContext';
import { BrowseErrors } from './pages/BrowseErrors';
import { StructureExplorer } from './pages/StructureExplorer';

export default function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen bg-lightgray font-Archivo font-medium tracking-wide">
      <Navbar setShowAbout={setShowAbout} />
      <DataContextProvider>
        <BrowserRouter>
          <div className="pt-14">
            <Routes>
              <Route
                path="/errors"
                element={
                  <BrowseErrors
                    showAbout={showAbout}
                    setShowAbout={setShowAbout}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <StructureExplorer
                    showAbout={showAbout}
                    setShowAbout={setShowAbout}
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </DataContextProvider>
      <Footer />
    </div>
  );
}
