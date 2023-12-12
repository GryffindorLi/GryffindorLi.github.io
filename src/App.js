import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Map from './Components/Map';
import Publication from './Components/Publication'
import Resume from './Components/Resume';
import Motto from './Components/Motto';
import GA4React from "ga-4-react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    try {
      setTimeout(_ => {
        const ga4react = new GA4React("G-5CVP4EJ7T4");
        ga4react.initialize().catch(err => console.error(err));
      }, 4000);
    } catch (err) {
          console.error(err);
    }
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        {/* <Map/> */}
        <Publication/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Motto data={this.state.resumeData.motto}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
