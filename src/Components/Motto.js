import React, { Component } from 'react';

class motto extends Component {
  render() {

    if(this.props.data){
      var motto = this.props.data.motto.map(function(motto){
        return  <li key={motto.user}>
            <blockquote>
               <p>{motto.text}</p>
               {/* <cite>{motto.user}</cite> */}
            </blockquote>
         </li>
      })
    }

    return (
      <section id="motto">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Motto</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {motto}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default motto;
