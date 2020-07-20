import "./App.css"
import React, { Component } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Foorter"
import Subject from "./components/Subject"

//클래스형 컴포넌트를 만들땐 하나의 최상의태그만써야도니다 Ex) header,div
class App extends Component {
  constructor(props) {
    //초기화를 담당한다 constructor
    super(props)
    this.state = {
      mode: "read",
      //state 를 초기화시키는것 subject를 state화시키는것
      subject: { title: "WEB", sub: "world wid web!" },
      welcome: { title: "welcome", desc: "hello, react!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is HyperText..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is HyperText..." },
      ],
    }
  }
  //위에 props 나 state가 바뀌면 화면이 다시그려진다 랜더가 되면서
  render() {
    var _title,
      _desc = null
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Navbar data={this.state.contents}></Navbar>
        <Footer title={_title} desc={_desc}></Footer>
      </div>
      //자바스크립트의 코드로활용하려면 {}를쓰고 문자열로 해결하려며 ""을 써준다
    )
  }
}

export default App
