import React, { Component } from 'react';

class Publication extends Component {
    render () {
        return (
            <section id="publication">
                <div className="row publication">
                    <h1>Publication List </h1>
                    {/* <p><a href='https://scholar.google.com/citations?user=3DEXZOQAAAAJ&hl=zh-CN&oi=ao'>Google Scholar</a></p> */}
                    <h2>2023</h2>
                    <div className='container'>
                        <img width={180} height={135} alt='img for pub' src="images/publication/guardian-awareness.jpg"/>
                        <div className='gardian awareness'>
                        <p>
                            <a href='https://ieeexplore.ieee.org/abstract/document/10108418?casa_token=-vReSohEO8UAAAAA:KPXfHiAvUmiO2rcVVdTfxPCAC9ewVhLSQFh4OV_5nh336OlCH6Cc9w37GSELshECizuTK4H6dpg'>
                            <b>Investigating Guardian Awareness Techniques to Promote Safety in Virtual Reality</b>
                            </a>
                            <br></br>
                            
                            <a href='https://wsxwsx543.github.io/'><u><b>Sixuan Wu</b></u></a>, 
                            &nbsp;
                            <a href='https://www.dgp.toronto.edu/~jiannanli/'>Jiannan Li</a>, 
                            &nbsp;
                            <a href='http://mauriciosousa.github.io/'>Maurício Sousa</a>, 
                            &nbsp;
                            <a href='https://www.tovigrossman.com/'>Tovi Grossman</a>
                            <br></br>

                            <i>Proceedings of IEEE Virtual Reality 2023 (VR '23), 2023</i>
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Publication