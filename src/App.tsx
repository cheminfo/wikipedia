import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { BrowseErrors } from './pages/BrowseErrors';
import { StructureExplorer } from './pages/StructureExplorer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#D9D9D9] font-Archivo tracking-wide">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/errors" element={<BrowseErrors />} />
          <Route path="/" element={<StructureExplorer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
