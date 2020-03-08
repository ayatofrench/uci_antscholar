import React, { Component } from 'react';
import firebase from "firebase/app";
import 'firebase/database'
import initFirebase from '../../utils/firebaseInit';
import Router from 'next/router'


initFirebase()

class Post extends Component {
    static async getInitialProps({ query, req }) {
        const postId = query.post;

    //     var post;

    //     var postRef = firebase.database().ref('post/' + postId);
    //     postRef.once("value", function(snapshot) {
    //         //console.log(snapshot.val());
    //         post = snapshot.val();

    //         this.setState({post : {post}});

    //         return {post};
            
    //       }, function (errorObject) {
    //         console.log("The read failed: " + errorObject.code);
    //       });

         return { id: postId };
    }

    constructor() {
        super();    
        this.state = { loading: true, post: {} };

    }

    componentDidMount() {
        // Create a reference to the RFPs in the database
        const ref = firebase.database().ref('post/' + this.props.id);
    
        // When this handler mounts (and on subsequent changes),
        // load the data into the component state
        ref.on("value", snapshot => {
          const post = snapshot.val();
          console.log(post);
          this.setState(() => ({ loading: false, post }));
        });
      }



    render() {

        const { loading, post } = this.state;

        return (
            <section class="section ">

            <div class="container" id="postDetails">
                <div class="page content">
                    <h1>Position</h1>
    
                    <h2 id="positionFieldInfo">{post.title}</h2>
    
                    <div class="columns">
                        <div class="column is-fieldName" id="areaOfResearch_Field">
                            <h3>Area of Research:</h3>
                        </div>
    
                        <div class="column" id="areaOfResearch_Details">
                            <p class="has-text-grey">{post.area_of_research}</p>
                        </div>
                    </div>
                    
                    <h3 id ="projectDetailsFieldName">Project Details & Benefits:</h3>
                    <p class="has-text-grey" id="projectDetailsInfo">{post.project_details}</p>
                    
                    <div class="columns">
                        <div class="column is-fieldName" id="numOfPositions_Field">
                            <h3>Number of Positions:</h3>
                        </div>
                        
                        <div class="column" id="numOfPositions_Details">
                            <p class="has-text-grey" for="numOfPositions_Details">{post.num_of_positions}</p>
                        </div>
                    </div>
                    
                    <div class="columns">
                        <div class="column is-fieldName" id="duration_Field">
                            <h3>Duration of Research:</h3>
                        </div>
                        
                        <div class="column" id="duration_Details">
                            <p class="has-text-grey" for="duration_Details">{post.len_or_duration}</p>
                        </div>
                    </div>
    
                    <h1>Requirements</h1>
                    <h3>Eligibility</h3>
                    <p class="has-text-grey" id="eligibilityDetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Pellentesque habitant morbi tristique senectus et. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.</p>
    
                    <h3>Preferred Majors</h3>
                    <p class="has-text-grey" id="preferredMajors">{post.pref_majors}</p>
                    <br/>
    
                    <h1>Contact</h1>
                    <div class="columns">
                        <div class="column is-fieldName" id="name_Field">
                            <h3>Name:</h3>
                        </div>
                        
                        <div class="column" id="name_Details">
                            <p class="has-text-grey" for="name_Details">Lorem Ipsum</p>
                        </div>
                    </div>
    
                    <div class="columns">
                        <div class="column is-fieldName" id="office_Field">
                            <h3>Office Location:</h3>
                        </div>
                        
                        <div class="column" id="office_Details">
                            <p class="has-text-grey" for="office_Details">ABC 123</p>
                        </div>
                    </div>
    
                    <div class="columns">
                        <div class="column is-fieldName" id="phoneNumber_Field">
                            <h3 >Phone:</h3>
                        </div>
                        
                        <div class="column" id="phoneNumber_Details">
                            <p class="has-text-grey" for="phoneNumber_Details">(123) 456-7890</p>
                        </div>
                    </div>
    
                    <div class="columns">
                        <div class="column is-fieldName" id="email_Field">
                            <h3>Email:</h3>
                        </div>
                        
                        <div class="column" id="phoneNumber_Details">
                            <p class="has-text-grey" id="email_Details">Ipsum@uci.edu</p>
                        </div>
                    </div>
                    
                    <div class="columns">
                        <div class="column is-fieldName" id="applyDate_Field">
                            <h3>Last Apply Date:</h3>
                        </div>
                        
                        <div class="column" id="applyDate_Details">
                            <p class="has-text-grey" for="applyDate_Details">Ipsum@uci.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Post;