import './App.scss';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetail/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
