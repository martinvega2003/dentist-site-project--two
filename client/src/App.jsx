import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { BookingPage } from './pages/BookingPage'
import CategoryPage from './pages/CategoryPage'
import { servicesData } from './data/servicesData'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/booking' element={<BookingPage />} />
        {
          servicesData.map(category => {
            return (
              <Route path={`/category/${category.category}`} element={<CategoryPage category={category} services={category.services} />} />
            )
          })
        }
      </Routes>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App
