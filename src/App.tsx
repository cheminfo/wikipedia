import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { DataContextProvider } from './hooks/DataContext';
import { BrowseErrors } from './pages/BrowseErrors';
import { StructureExplorer } from './pages/StructureExplorer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EAEBED] font-Archivo font-medium tracking-wide">
      <Navbar />
      <DataContextProvider>
        <BrowserRouter>
          <div className="pt-14">
            <Routes>
              <Route path="/errors" element={<BrowseErrors />} />
              <Route path="/" element={<StructureExplorer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DataContextProvider>
      <Footer />
    </div>
  );
}
