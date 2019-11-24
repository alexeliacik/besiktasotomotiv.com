import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Hakkimizda from './components/Hakkimizda';
import Hizmetler from './components/Hizmetler';
import Anlasmali from './components/AnlasmaliSirketler';
import Misyonumuz from './components/Misyonumuz';
import Iletisim from './components/Iletisim';
import FixedContent from './components/FixedContent';

class App extends Component {
  state = {
    showContent: false
  };

  handleShowContent = e => {
    e.stopPropagation();
    this.setState({
      showContent: !this.state.showContent
    });
  };

  hideContent = () => {
    this.setState({
      showContent: false
    });
  };

  render() {
    return (
      <div onClick={this.hideContent} className="App">
        <Header />
        <Slider />
        <Hakkimizda />
        <Hizmetler />
        <Anlasmali />
        <Misyonumuz />
        <Iletisim />
        <FixedContent
          showContent={this.state.showContent}
          handleShowContent={this.handleShowContent}
        />
      </div>
    );
  }
}

export default App;
