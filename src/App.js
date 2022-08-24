import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from './components/LoadingBar';

export default class App extends Component {
  render() {
    // this.state = {
    //   progress: 30,
    //   height: 0.18
    // }

    // const  (n1, n2) => {
    //   this.setState({ progress: n1 })
    //   this.setState({ height: n2 })

    // }

    return (
      <>
        <BrowserRouter>
          {/* <LoadingBar progress={this.state.progress} height={this.state.height} /> */}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setprpage_size={9} category={"general"} key='general' />}></Route>
            <Route exact path="/business" element={<News page_size={9} category={"business"} key='business' />}></Route>
            <Route exact path="/entertainment" element={<News page_size={9} category={"entertainment"} key='entertainment' />}></Route>
            <Route exact path="/general" element={<News page_size={9} category={"general"} key='general' />}></Route>
            <Route exact path="/health" element={<News page_size={9} category={"health"} key='health' />}></Route>
            <Route exact path="/science" element={<News page_size={9} category={"science"} key='science' />}></Route>
            <Route exact path="/sports" element={<News page_size={9} category={"sports"} key='sports' />}></Route>
            <Route exact path="/technology" element={<News page_size={9} category={"technology"} key='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
