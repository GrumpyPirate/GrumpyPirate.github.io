// React
import React from 'react'

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Sidebar from 'components/Sidebar/Sidebar'
// import MainContainer from 'components/MainContainer/MainContainer'
// import Footer from 'components/Footer/Footer'
// import About from 'components/About/About'
// import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
// import WebDev from 'components/WebDev/WebDev'
// import PortfolioPage from 'components/Portfolio/PortfolioPage/PortfolioPage'
// import HTTPNotFound from 'components/404/404'

// SCSS
import './App.scss'

// Define App
const App = () => (
  <Router basename="/">
    <div className="app">
      <Sidebar />
      {/* <MainContainer> */}
      {/*   <Switch> */}
      {/*     <ScrollToTop> */}
      {/*       <div> */}
      {/*         <Route exact path="/" component={About} /> */}
      {/*         {/* <Route exact path="/webdev" component={WebDev} /> */}
      {/*         {/* <Route path="/webdev/:portfolioItemSlug" component={PortfolioPage} /> */}
      {/*         {/* <Route component={HTTPNotFound} /> */}
      {/*       </div> */}
      {/*     </ScrollToTop> */}
      {/*   </Switch> */}
      {/*   <Footer /> */}
      {/* </MainContainer> */}
    </div>
  </Router>
)

export default App
