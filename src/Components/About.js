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

            <p>I am a graduated MSc from <a href="https://www.tudelft.nl/">Delft University of Technology</a>, where I am adviced by <a href="https://odettescharenborg.wordpress.com/">Dr. Odette Scharenborg</a> at <a href='https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/intelligent-systems/multimedia-computing/research/speechlab'>SpeechLab, Multimedia Computing Group</a>. My research interest includes making Automatic Speech Recognition (ASR) more inclusive. Prior to TU Delft, I received my bachelor degree at <a href="https://www.tju.edu.cn/"> Tianjin University</a>.</p>
            {/* <h2>News</h2>
            <p>
            <span><b>05/23/23:</b> I received <a href="https://utm.calendar.utoronto.ca/honours-bachelor-science-hbsc">Honours Bachelor of Science</a> in Computer Science at University of Toronto. </span><br />
            <span><b>04/06/23:</b> I will be starting my Ph.D. at <a href="https://www.ic.gatech.edu/">GATech IC</a>, looking forward to the new journey!</span><br />
            <span><b>01/30/23:</b> Guardian Awareness paper is accepted to <a href="https://ieeevr.org/2023/">VR '23</a>.</span><br />
            <span><b>01/06/22:</b> I received <a href="https://web.cs.toronto.edu/undergraduate/scholarships">Daniel Berlin Scholarship</a>.</span><br />
            </p> */}
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
