import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<SinglePost />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
