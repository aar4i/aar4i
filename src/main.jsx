import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Slidebar from './components/Slidebar.jsx'

const items = [
  {
    name: "LinkedIn",
    color: "#f44336",
    href: "https://www.linkedin.com/"
  },
  {
    name: "GitHub",
    color: "#e91e63",
    href: "https://github.com/aar4i"
  },
  {
    name: "Instagram",
    color: "#9c27b0",
    href: "https://www.instagram.com/aar4i/"
  },
  {
    name: "Facebook",
    color: "#673ab7",
    href: "https://www.facebook.com/profile.php?id=100089198002194"
  },
  {
    name: "Download CV",
    color: "#3f51b5",
    href: ""
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slidebar />
    <Navbar items={items}/>
    <App />
  </StrictMode>,
)