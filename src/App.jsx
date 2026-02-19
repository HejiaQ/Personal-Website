import './App.css'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Project from './pages/Project'
import Hobby from './pages/Hobby'
import Course from './pages/Course'

function App() {
 return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="courses" element={<Course />} />
          <Route path="hobbies" element={<Hobby />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
