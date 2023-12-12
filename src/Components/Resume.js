import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div className='edu-cont' key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}<span>&nbsp;&nbsp;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

      var work = this.props.data.industry.map(function(work){
         return <div className='edu-cont' key={work.company}><h3>{work.company}</h3>
         <p className="info">{work.title}<span>&nbsp;&nbsp;</span><em className="date">{work.years}</em></p>
         <p className="info">{work.place}</p>
         <p>{work.description}</p></div>
       })
    }

    return (
      <section id="resume">
      <div className="row resume">
         <h2>My Experiences</h2>
         <div className='edu-container'>
            <div className='education-title'><h1><span>Education</span></h1></div>
            <div className='edu-content'>
               {education}
            </div>
            {/* <img width={100} height={100} className='gatech-logo' src='images/experiences/gatech_logo.png' alt='gatech-logo'></img>
            <img width={50} height={50} className='uoft-logo' src='images/experiences/uoft-logo.png' alt='uoft-logo'></img>
             <div className='edu-content'>
               {education}
            </div>
            <img width={50} height={50} className='uoft-logo' src='images/experiences/uoft-logo.png' alt='uoft-logo'></img>          */}
         </div>
         {/* <div className='research-container'>
            <div className='research-title'><h1><span>Research</span></h1></div>
            <div className='ucsl-exp'>
               <a href='https://www.uncommonsenselabs.com/home'>
                  <img className='ucsl-logo' src='images/experiences/uncommonsense-logo.png' alt='uncommon-sense-labs-logo'></img>
               </a>
               <h4>Research Assistant</h4>
               <p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023 - Present</p>
            </div>
            <div className='chai-exp'>
               <a href='https://chai.cs.toronto.edu/'>
                  <img className='chai-logo' src='images/experiences/chai-logo.png' alt='chai-logo'></img>
               </a>
               <h4>Research Assistant</h4>
               <p>2020 - 2023</p>
            </div>
            <div className='dgp-exp'>
               <a href='https://www.dgp.toronto.edu/'>
                  <img className='dgp-logo' src='images/experiences/dgp-logo.jpg' alt='dgp-logo'></img>
               </a>
               <h4>Research Assistant</h4>
               <p>2021 - 2023</p>
            </div>
         </div> */}
         <div className='edu-container'>
            <div className='education-title'><h1><span>Work</span></h1></div>
            <div className='edu-content'>
               {work}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Resume;
