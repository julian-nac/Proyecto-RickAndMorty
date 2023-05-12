import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import LoginForm from './components/Form'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites'

function App () {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState ([])
  const [access, setAccess] = useState (false)
  

  const username = "julian.narvaezc@gmail.com"
  const password = "juli2004"

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess (true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/')
  },[access])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>}/>
        <Route path='/' element={<LoginForm login={login}/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
