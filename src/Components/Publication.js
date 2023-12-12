import React, { Component } from 'react';

const AuthorList = ({ names, boldName }) => {
    return (
      <p style={{ marginBottom: '1px'}}>
        {names.map((name, index) => (
          <React.Fragment key={index}>
            {index > 0 && ', '}
            {name === boldName ? <strong>{name}</strong> : name}
          </React.Fragment>
        ))}
      </p>
    );
  };

class Publication extends Component {

    render () {

        if (this.props.data) {
            var pubs = this.props.data.main.map(
                function (publication) {
                
                    return <div key={publication.title} style={{ display: 'flex', alignItems: 'center' }}>
                            <img width={180} height={135} alt='img for pub' src={publication.image_path} style={{ marginRight: '10px' }} />
                            <div>
                                <a href={publication.url} target="_blank">
                                <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{publication.title}</p>
                                </a>
                                <AuthorList names={publication.authors} boldName="Zirui Li"></AuthorList><p>{publication.place}</p>
                            </div>
                        </div>
            
                }
            )
        }


        return (
            <section id="publication">
                <div className="row publication">
                    <h1>Publications</h1>
                    {/* <p><a href='https://scholar.google.com/citations?user=3DEXZOQAAAAJ&hl=zh-CN&oi=ao'>Google Scholar</a></p> */}
                    {/* <h2>2023</h2> */}
                    <div>
                        
                        {pubs}
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Publication