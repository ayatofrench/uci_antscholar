
import React, { Component } from 'react';
import firebase from "firebase/app";
import 'firebase/database'
//import Contact from "../components/Form/contact.js"
import initFirebase from '../utils/firebaseInit';
import Router from 'next/router'

const backgroundColor = '#eee';
import 'styles/styles.scss';

// Init the Firebase app.
initFirebase()

class Post_part1 extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div class="section">
        <h1 class = "title has-text-centered">Ant Scholar Submission</h1>
        <h2 class = "subtitle has-text-centered">Research Position Information</h2>    
        <div class="columns is-centered">
          <div class="column is-half">  
          <div class = "box">
            <h3>Post Title*</h3>
              <input
                class = "input"          
                type = "text"
                placeholder = "e.g. HCI amongst Adolescents"
                value = {this.props.title}
                onChange={this.props.onChangeTitle}/>          
              <h3>Area of Research*</h3>
              <input
                class = "input"          
                type = "text"
                placeholder = "e.g. Informatics - HCI"
                value = {this.props.area_of_research}
                onChange={this.props.onChangeAoR}/>          
              <h3>Duration of the Research*</h3>
              <input
                class = "input"          
                type = "text"
                placeholder = "e.g. Spring 2020 - Summer 2020"
                value = {this.props.len_or_duration}
                onChange={this.props.onChangeLen}/>          
              <h3>Perferred Majors*</h3>
              <input
                class = "input"          
                type = "text"
                placeholder = "Enter majors sepperated by commas"
                value = {this.props.pref_majors}
                onChange={this.props.onChangeMajor}/>    
            <h3>Eligibility Requirements*</h3>
              <input
                class = "input"          
                type = "text"
                placeholder = "Enter majors sepperated by commas"
                value = {this.props.eligibility_req}
                onChange={this.props.onChangeReq}/>                            
              <button class= "button" onClick = {this.props.goToNext}>Continue</button>
            </div>
            </div>
            </div>
        </div>
    );
  }
}

class Post_part2 extends Component {
  constructor(){
    super();
  }


  render(){
    return(
    <div class="container" style={{wdith: 770}}>
      <h1 class = "title has-text-centered">Ant Scholar Submission</h1>
      <h2 class = "subtitle has-text-centered">Research Position Information</h2>      
      <div class = "box">
          <h3>Number of Positions*</h3>
          <input
            class = "input"          
            type = "text"
            placeholder = "e.g 1, 3-5"
            value = {this.props.num_of_positions}
            onChange={this.props.onChangePos}/>      
          <h3>Post Details*</h3>
          <textarea 
            class = "textarea"
            rows = "20"
            value = {this.props.project_details}
            onChange={this.props.onChangeDetails}/>
          <button class = "button" onClick = {this.props.goToPrev}>Back</button>
          <button class="button" onClick = {this.props.goToNext}>Continue</button>
        </div>
      </div>
    );
  }
}

class VerifyPost extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>Post Data</h1>
          <p>Post Title: {this.props.title}</p>          
          <p>Area of Research: {this.props.area_of_research}</p>
          <p>Duration of Research: {this.props.len_or_duration}</p>          
          <p>Preferred Majors: {this.props.pref_majors}</p>
          <p>Eligibility Requirement: {this.props.eligibility_req}</p>
          <p>Number of Positions: {this.props.num_of_positions}</p>
          <p>Project Details: {this.props.project_details}</p>
          <button class = "button" onClick = {this.props.goToPrev}>Prev</button>
          <button class = "button" onClick = {this.props.goToNext}>Submit</button>
      </div>
      );
  }

}

class PostForm extends Component{
  constructor() {
    super();
    this.state = {
      step: 1,

      title: "",
      num_of_positions: "",
      len_or_duration: "",
      area_of_research: "",
      pref_majors: "",

      eligibility_req: "",
      project_details:""
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
  }
  
  goToNext() {
    const {step} = this.state;
    if (step !== 3){
      this.setState({step: step + 1});
    }
    else{
      //const router = useRouter()
      alert("Submitted!");
    
      this.handleSubmit();
    }
  }

  async handleSubmit(e){
    //e.preventDefault();
    var newPostKey = firebase.database().ref().child('posts').push().key;
    const db = firebase.database();

    const ref = db.ref('post/' + newPostKey);

    try {
      await ref.set({
        title: this.state.title,
        num_of_positions: this.state.num_of_positions,
        len_or_duration: this.state.len_or_duration,
        area_of_research: this.state.area_of_research,
        pref_majors: this.state.pref_majors,
        eligibility_req: this.state.eligibility_req,
        project_details: this.state.project_details
      });
    }
    catch(error) {

    }

    Router.push("/posts/[post]", "/posts/" + newPostKey);
  }

  goToPrev() {
    const {step} = this.state;
    this.setState({step: step - 1})
  }
  
  handleChange(field) {
    return evt => this.setState({ [field]: evt.target.value });
  }
  
  render() {
    switch (this.state.step){
      case 1:
        return (<Post_part1 key = "part1" onSubmit = {this.goToNext} title={this.state.title}
        num_of_positions = {this.state.num_of_positions}
        eligibility_req = {this.state.eligibility_req}
        len_or_duration = {this.state.len_or_duration}
        area_of_research = {this.state.area_of_research}
        pref_majors = {this.state.pref_majors}
        onChangeTitle = {this.handleChange("title")}
        onChangeReq = {this.handleChange("eligibility_req")}
        onChangeLen = {this.handleChange("len_or_duration")}
        onChangeAoR = {this.handleChange("area_of_research")}
        onChangeMajor = {this.handleChange("pref_majors")}
        goToNext = {this.goToNext}/>);
      case 2:
        return (<Post_part2 key = "part2" onSubmit = {this.goToNext}
        num_of_positions = {this.state.num_of_positions}
        project_details = {this.state.project_details}
        onChangePos = {this.handleChange("num_of_positions")}
        onChangeDetails = {this.handleChange("project_details")}
        goToNext = {this.goToNext}
        goToPrev = {this.goToPrev}/>);
      case 3:
        return (<VerifyPost key = "verify" onSubmit = {this.goToNext}
        title={this.state.title}
        num_of_positions = {this.state.num_of_positions}
        len_or_duration = {this.state.len_or_duration}
        area_of_research = {this.state.area_of_research}
        pref_majors = {this.state.pref_majors}
        eligibility_req = {this.state.eligibility_req}
        project_details = {this.state.project_details}
        goToPrev = {this.goToPrev}
        goToNext = {this.goToNext}/>);
      }
  }
}

export default PostForm;