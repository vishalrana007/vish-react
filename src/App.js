import {React} from 'react';

import {Hero} from './components/hero/Hero';
import {About} from './components/about/About';
import {Services} from './components/services/services';
import { Work } from './components/mywork/Work';
import Navbar from './components/navbar/Navbar';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';


const App = () => {
  return (
    <div>
    <Navbar/>
      <Hero />
      <About />
      <Services />
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;