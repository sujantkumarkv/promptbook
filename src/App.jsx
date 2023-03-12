import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import PromptPage from './components/PromptPage';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>

            <Route exact path='/' Component={Content} />
            <Route path='/prompt/:slug' Component={PromptPage} /> 

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
