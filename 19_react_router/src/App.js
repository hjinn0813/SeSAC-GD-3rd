import { Routes, Route } from 'react-router-dom';
// import Test from './components/Test';
// import Board from './pages/Board';
// import Profile from './pages/Profile';
// import BoardDetail from './pages/BoardDetail';
import Home from './pages/Home';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import PhotoPage from './pages/PhotoPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* 라우팅 연습 */}
      {/* <h1>routing!</h1>
      <Routes>
        <Route path="/test" element={<Test />} />
        {/* element로 가져온 컴포넌트를 보여준다 */}
      {/* </Routes> */}

      {/* 라우팅 연습 2 */}
      {/* 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/products/1" element={<ProductDetail />} /> */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
