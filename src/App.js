import Contact from "./components/contact.js";
import Navbar from "./components/navbar.js";
import * as React from 'react';
import Location from "./components/location-img.js"
import Footer from "./components/footer.js"
import { useState } from 'react';
import Testimonials from "./components/testimonial.js";
import { BrowserRouter as Router , Switch,Route } from "react-router-dom";
import index from "./pages/home.js";
import about from "./pages/about.js";
import service from "./pages/services.js";
import Project from "./pages/projects.js";

function App() {
  return (
   <>
   <Router>
    <Contact/>
    <Navbar/>
<Switch>
  <Route path="/" exact component={index}/>
  <Route path="/about" exact component={about}/>
  <Route path="/services" exact component={service}/>
  <Route path="/projects" exact component={Project}/>
</Switch>
<Testimonials />
  <Location/>
  <Footer/>
  </Router>
  </>
  );
}
export default App;