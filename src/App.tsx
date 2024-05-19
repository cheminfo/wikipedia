import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { DataContextProvider } from './contexts/data_context.provider';
import { MoleculeContextProvider } from './contexts/molecule_context.provider';
import { BrowseErrors } from './pages/BrowseErrors';
import { StructureExplorer } from './pages/StructureExplorer';

export default function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen bg-lightgray font-Archivo font-medium tracking-wide">
      <DataContextProvider>
        <MoleculeContextProvider>
          <TooltipProvider>
            <HashRouter>
              <Navbar showAbout={showAbout} setShowAbout={setShowAbout} />
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
            </HashRouter>
          </TooltipProvider>
        </MoleculeContextProvider>
      </DataContextProvider>
      <Footer />
    </div>
  );
}
