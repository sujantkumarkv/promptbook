import React, {useState, useEffect} from 'react';
import MainIllustration from "../img/main.svg";
import { Link } from 'react-router-dom';

function Content (props) {
    
        const [Prompts, setPrompts] = useState([]);

        useEffect(() => {
            fetch("/prompts.json")
            .then(response => response.json())
            .then(data => setPrompts(data))
            .catch(err => console.log(err));
        }, []);
     

    
          
    return (
        <main>
            <div className="preloader bg-dark flex-column justify-content-center align-items-center show">
                
            </div>
            
            <section className="section-header pb-5 pb-lg-7 bg-primary text-white">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center">
                        <div className="col-12 col-md-8 col-lg-5 text-center text-lg-left">
                            <h1 className="display-3 mb-0">Promptbook: <br/> prompts API marketplace.</h1>
                            <p className="lead fw-normal text-muted mt-4 mb-4 mb-lg-5">Built by developers, for developers. <br/>
                                Get your tailored prompts in a flash and get started building within minutes.</p>
                            
                        </div>
                        <div className="col-12 col-lg-6 d-none d-lg-block">
                           
                          <img src={MainIllustration} alt="Crypto Illustration"/>
                        </div>
                    </div>
                </div>
            </section>
       
            <section className="section section-sm bg-primary" style={{padding:"100px"}}>
                <div className="container" >
                    {   
                        (Prompts.length>0) && 
                        /**
                         *  .fill() was the missing error which turns it into an array like: [undefined, undefined, ..]
                         *  basically something concrete as an array. And I was getting nothing printed because of that just one word- .fill()
                         * */
                           (Array(Math.ceil(Prompts.length/3))).fill().map((_, index) =>{
                                return(
                                    <div key={index} className="row justify-content-center" >
                                    <div className="col-12 col-lg-10" >
                                    <div className="row text-white" >
                                {
                                    Prompts.slice(index*3, index*3 + 3)
                                    
                                    .map((prompt, promptIndex) => {
                                        //console.log(typeof(prompt))
                                        /**
                                         * The / /g part of the expression is a regular expression that matches all occurrences of the space character in the string. 
                                         * The "g" at the end of the expression stands for "global", which means that it will replace all occurrences 
                                         * of the space character in the string, not just the first one.
                                         */
                                        let slug_string = prompt.prompt_about + "-" + (index*3 + promptIndex); //this gives the correct order wrt prompts.json
                                        const slug = slug_string.toLowerCase().replace(/ /g, '-')
                                        return(
                                           
                                            <div key={promptIndex} className="col-12 col-md-4 px-md-1" style={{padding:"1em", minWidth:"auto"}}>
                                                <Link to={{ pathname: `/prompt/${slug}` }} target={'_blank'}>
                                                <div  className="card-body text-center bg-secondary rounded mb-2 mb-lg-0" style={{padding:"20px"}}>
                                                <h2 className="h6 me-2 my-2" style={{padding:"5px"}}>
                                                    { prompt.prompt_about }
                                                </h2>
                                                <p className="text-muted  small fw-normal mb-0">
                                                    ({ prompt.prompt_category })
                                                </p>
                                                </div>
                                                </Link>
                                            </div>
                                            
                                                
                                        )
                                        
                                    })
                                }
                                    </div>
                                    </div>
                                    </div>

                                )
                            })
                    }                  
                        
                </div>
            </section>


            

            
        </main>
    )
        
}

export default Content;



