import React, {Component} from 'react'
import 'styles/styles.scss';

class Footer extends Component {
    render() {
       return( 
        <React.Fragment>
            
    <section class="footer has-background-grey-lighter" id="websiteFooter">

<div class="container">

    <div class="row">
        <div class="columns is-centered content" >

            <div class="column first-child">
                <h6 class="has-text-weight-medium has-text-black">Contact Us</h6>
                <p class="has-text-grey-darker is-size-7">
                    Said M. Shokair, UROP Director<br />

                    &nbsp;&nbsp;&nbsp;
                    <a href="mailto:shokair@uci.edu" subject="subject text">
                        <i class="fas fa-envelope"></i>  &nbsp;&nbsp;&nbsp; shokair@uci.edu <br />
                    </a><br />

                    UROP Office<br />

                    &nbsp;&nbsp;&nbsp;
                    <a href="tel:+19498244189">
                        <i class="fas fa-phone"></i> &nbsp;&nbsp;&nbsp; (949) 824-4189
                    </a> <br />

                    &nbsp;&nbsp;&nbsp;
                    <a href="tel:+19498241607">
                        <i class="fas fa-fax"></i>  &nbsp;&nbsp;&nbsp; (949) 824-1607
                    </a> <br />

                    &nbsp;&nbsp;&nbsp;
                    <a href="mailto:urop@uci.edu" subject="subject text">
                        <i class="fas fa-envelope"></i>  &nbsp;&nbsp;&nbsp; urop@uci.edu <br />
                    </a>
                </p>
            </div>

            <div class="column">
                <h6 class="has-text-weight-medium has-text-black">Pajama Party</h6>
                <p class="has-text-grey-darker is-size-7">
                    Abdul Osman<br />
                    Ayato French<br />
                    Chad Thompson<br />
                    Jethro Presto<br />
                    Kevin Mo<br />
                </p>
            </div>

            <div class="column ">
                <h6 class="has-text-weight-medium has-text-black">Social Media</h6>

                <p class="has-text-grey-darker is-size-7">
                    <a href="https://www.facebook.com/UCIUROP/" target="_blank">
                        <i class="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp; Facebook
                    </a><br />

                    <a href="https://www.linkedin.com/school/university-of-california-irvine/" target="_blank">
                        <i class="fab fa-linkedin"></i>&nbsp;&nbsp;&nbsp; LinkedIn
                    </a><br />

                    <a href="https://www.instagram.com/ucirvine/?hl=en" target="_blank">
                        <i class="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp; Instagram
                    </a><br />

                    <a href="https://twitter.com/UciUrop" target="_blank">
                        <i class="fab fa-twitter-square"></i>&nbsp;&nbsp;&nbsp; Twitter
                    </a>

                </p>
            </div>

            <div class="column last-child">
                <h6 class="has-text-weight-medium has-text-black">Address</h6>

                    <p class="has-text-grey-darker is-size-7">
                        <a href="https://goo.gl/maps/FSNFzx3BUq5Xcr8j6" target="_blank">
                            Student Services II, Suite 2100 <br />
                            University of California, Irvine<br />
                            Irvine, CA 92697-5685<br />
                            <br />
                            Hours: 
                        </a>
                    </p>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="columns is-centered">
            <a href="https://www.uci.edu" target="_blank" ><img src="images/UCI logo.png" class="image image-fluid is-128x128 " alt="UCI Logo Responsive image"></img></a>
        </div>
    </div>
</div>
</section>
</React.Fragment>
        )}
}

export default Footer;