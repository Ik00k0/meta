import { Component } from "react";
import "./App.css"
import Background from './components/background'
import SocialLinks from './components/socialLinks'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  handleClick() {
    window.alert("You clicked me")
  }

  render() {
    return (
      <div className="bg-black">
        <div className="bg-black h-screen w-screen flex justify-center content-center relative">
          <SocialLinks />
          <Background />
        </div>
      </div>

    );
  }

}

export default App;
