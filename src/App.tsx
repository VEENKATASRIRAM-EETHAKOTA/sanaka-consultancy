import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Consulting from './pages/Consulting'
import ProductDevelopment from './pages/ProductDevelopment'
import ApplicationManagement from './pages/ApplicationManagement'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/consulting" element={<Consulting />} />
                    <Route path="/product-development" element={<ProductDevelopment />} />
                    <Route path="/application-management" element={<ApplicationManagement />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
