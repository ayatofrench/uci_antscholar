import React, { Component } from 'react';
import Link from 'next/link'

import 'styles/styles.scss';

class Header extends Component {
    render() {
       return( 
        <React.Fragment>
            <nav class="navbar" role="navigation" aria-label="main navigatoin" style={{padding:40}}>
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                </div>
                
                <div class="navbar-menu">
                    <div
                    class="navbar-start"
                    style={{flexGrow: 1, justifyContent: "center"}}
                    >
                        <Link href="/">
                            <a class="navbar-item">Home</a>
                        </Link>
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Career</a>
                        <a class="navbar-item">Tips & Resources</a>
                    </div>
                    <div class="navbar-end">
                        <button class="button is-gradient">Contact Us</button>
                    </div>
                </div>
            </nav>
        </React.Fragment>
        )}
}

export default Header;