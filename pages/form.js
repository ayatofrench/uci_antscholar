
import React, { Component } from 'react';
import Contact from "../components/Form/contact.js"

const backgroundColor = '#eee';
import 'styles/styles.scss';

class Form extends Component {

  state = {
    step: 1,
    title: "Example"
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  }

  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  }

  showStep = () => {
    switch(this.state.step) {
      case 1: 
        return <Contact /> 
      case 2:
        return (
          <div class="item-1">
            {this.state.step}
				  </div>
        )
      case 3:
        return (
          <div class="item-1">
            {this.state.step}
				  </div>
        )
    }
  }

  render() {
    return (
      <section class="">
        <div class="container">
          <h1 class="title has-text-centered has-text-weight-bold is-size-1">
              AntScholar Submission
          </h1>
          <h2 class="subtitle has-text-centered is-size-2">
            {this.state.title}
          </h2>
        </div>
        <div class="container">
          {this.showStep()}
        </div>
        {this.state.step > 1 &&
          <button class="button" onClick={this.prevStep}>
            Back
          </button>
        }
        <button class="button" onClick={this.nextStep}>
          Next
        </button>
      </section>
    )}
}

export default Form;