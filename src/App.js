import React from 'react'
//This import is form router
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//this import is for All Pages
import{  HomePage,
  CategoryPage,
  ErrorPage,
  MealDetailPage} from './pages/index';

//import for component
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/meal/:id" element={<MealDetailPage/>}/>
        <Route path="/meal/Category/:name" element={<CategoryPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
