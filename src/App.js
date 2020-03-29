import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group';


class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }
  showModal = () => {
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  // Our modal and backdrop component is already present which is making the dom heavy so 
  // it is better to introduce this.state.modalIsOpen for conditional presence 
  // but issue with that closing modal behaviour is not upto the mark since we arev making the component null

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={()=>this.setState(prevState =>({showBlock:!prevState.showBlock}))}>Toggle</button>
        <Transition 
        in={this.state.showBlock} 
        timeout={1000}
        mountOnEnter
        unmountOnExit>
          {state=>(<div
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
            margin: 'auto',
            opacity: state === 'exiting'? 0: 1,
            transition: 'opacity 1s ease-out'
          }}></div>)}

          {/* {state=><p>{state}</p>} */}
        </Transition>
        <br/>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>       
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />:null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
