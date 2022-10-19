import './App.css';
import React, { Component } from 'react'
import pic from './studio.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person:{
        fullName: "Najib Bohli",
        bio: "bio ",        
        profession: "Music Producer",
        imgsrc:<img src={pic} alt='IMG' width={300}></img> ,     


      },        
      show: true,
      counter:0 ,      
    
    }; 
  }
  handleClick = () => {
    this.setState({show: !this.state.show,
    });
  };
  componentDidMount() {
    setInterval (() => {
      this.setState ({ counter:this.state.counter+1});
  },2);
  }

  render() {
    return (
      <div className='parent'>
        {this.state.show ?
                <div>
                <h1>{this.state.person.fullName}</h1> 
                <h1>{this.state.person.bio}</h1>        
                <h1>{this.state.person.profession}</h1>
                <h1>{this.state.person.imgsrc}</h1>
                </div>
        : null}

        <button  onClick={this.handleClick} >
        {this.state.show ? "hide profile" : " show profile "}
        </button>
      
      </div> 
    )

  }
  
}

