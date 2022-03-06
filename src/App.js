import React from 'react';
import { useSelector } from "react-redux";
import Header from './Header/header';
import BooksListPage from './pages/BooksListPage/BooksListPage';
import { Route, Routes } from 'react-router-dom';
import Book from './components/ItemBook/bookitem';
import ItemPage from './components/ItemBook/ItemPage';



function App() {
  return (
    
    <div className='App'>
      <Header />
      {/* <Selects categories={categories} /> */}
      <Routes>
        <Route exact path='/' element={<BooksListPage/>}/>
        <Route exact path='/:id' element={<ItemPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
