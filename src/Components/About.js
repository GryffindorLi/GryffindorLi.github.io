import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Sixuan Wu Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
               I am a graduated MSc from <a href="https://www.tudelft.nl/">Delft University of Technology (TU Delft)</a>, 
               where I was supervised by <a href="https://odettescharenborg.wordpress.com/">Dr. Odette Scharenborg</a> at 
               <a href='https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/intelligent-systems/multimedia-computing/research/speechlab'> SpeechLab</a>. 
               My research interest includes making Automatic Speech Recognition (ASR) more inclusive.
               Specifically, I am driven to uncover the underlying mechanisms contributing to speech biases 
               and develop practical solutions applicable to low-resource and zero-resource scenarios.
               Prior to TU Delft, I received my bachelor degree at <a href="https://www.tju.edu.cn/"> Tianjin University</a>.
            </p>
            <p>Currently I am looking for a PhD position in inclusive ASR. If you are interested, please feel free to reach out me.</p>
            <h2>News</h2>
            <p>
            <span><b>07/11/23:</b> I received MSc degree from TU Delft, with a Master's thesis grade of 8.5/10. </span><br />
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   {/* <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br /> */}
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
