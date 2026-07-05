import InvitePage from './pages/invite_page';
import PicturesPage from './pages/pictures_page';
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<InvitePage />} />
      <Route path="/KuKu" element={<PicturesPage />} />
    </Routes>
    </>   
  )
}

export default App;