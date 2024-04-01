import './App.css';
import React, {useState} from 'react'
import Navbar from './Componants/Navbar'
import News from './Componants/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
 
   const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/general" element={<News setProgress={setProgress} key="general"  apiKey={apiKey} country="in" category="General"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general"  apiKey={apiKey} country="in" category="General"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business"  apiKey={apiKey} country="in" category="Business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment"  apiKey={apiKey} country="in" category="Entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health"  apiKey={apiKey} country="in" category="Health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science"  apiKey={apiKey} country="in" category="Science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports"  apiKey={apiKey} country="in" category="Sports"/>}/>
          <Route exact path="/tech" element={<News setProgress={setProgress} key="technology"  apiKey={apiKey} country="in" category="technology"/>}/>
         </Routes>
        </Router>
      </div>
    )
}

export default App
