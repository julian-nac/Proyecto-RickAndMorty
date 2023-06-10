import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import LoginForm from './components/Form'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites'

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    });
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      const character = response.data;
      setCharacters((prevCharacters) => [...prevCharacters, character]);
    } catch (error) {
      console.error('Error searching character:', error);
    }
  };
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path='/' element={<LoginForm login={login} />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
