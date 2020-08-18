import React from 'react';
import './styles/styles.scss';
import Navbar from './components/navbar'
import Header from './components/header'
import Extension from './components/extension'

import Faq from './components/faq'

import Contact from './components/contact'

import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Extension />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
