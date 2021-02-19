import './App.css';
import { HashRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import Header from './components/Header';
import Home from "./components/Home";
import Projects from './components/Projects';
import Resume from './components/Resume';

import Navbar from './components/Navbar';
function App() {
  return (
    <HashRouter>
      {/* <div className="d-flex flex-column flex-sm-row"> */}
        {/* <div className="col-sm-4 col-xl-3 p-0 sidebar align-items-center"> */}
        <Navbar/>
      <Container fluid className="content">
        <Row className="h-100 overflow-auto">
          {/* <Col sm={4} xl={3} className="sidebar d-flex p-0 align-items-center justify-content-center">
            <Sidebar />
          </Col> */}
        {/* </div> */}
        {/* <div className="col-sm-8 col-xl-9 p-0 content"> */}
          {/* <Col className='content align-items-center d-flex justify-content-center'> */}
            {/* <Row className='align-items-center'> */}
              <Switch>
                <Route exact path="/" >
                  <Home />
                </Route>

                <Route path="/projects">
                  <Projects />
                </Route>
                

                <Route path="/resume">
                  <Resume />
                </Route>
              </Switch>
            {/* </Row> */}
          {/* </Col> */}
        </Row>
      </Container>
        {/* </div> */}
      {/* </div> */}

    </HashRouter>
  );
}

export default App;
