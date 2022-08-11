import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Atelier from './pages/Atelier';
import AccessoiresEtPieces from './pages/AccessoiresEtPieces';
import CreerUnCompte from './pages/CreerUnCompte';
import NousContacter from './pages/NousContacter';
import QuiSommesNous from './pages/QuiSommesNous';
import Footer from './components/Footer';
import Announecement from './components/Announecement';

function App() {
  return (
    <div className="App">
      <Announecement />
      <Navbar />
      <Routes>
        <Route path="Accueil" element={<Accueil />} />
        <Route path="piecesdetachees" element={<AccessoiresEtPieces />} />
        <Route path="Atelier" element={<Atelier />} />
        <Route path="NousContacter" element={<NousContacter />} />
        <Route path="QuiSommesNous" element={<QuiSommesNous />} />
        <Route path="CréerUnCompte" element={<CreerUnCompte />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
