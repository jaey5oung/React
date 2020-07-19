import "./App.css"
import React, { Component } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Foorter"
import Subject from "./components/Subject"

//클래스형 컴포넌트를 만들땐 하나의 최상의태그만써야도니다 Ex) header,div
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub=" world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>

        <Navbar></Navbar>
        <Footer title="HTML" desc="html is hypertext markup language."></Footer>
      </div>
    )
  }
}

export default App
