import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function PromptPage() {
    let urlParams = useLocation().pathname.split("-");
    //we access the index wrt data in primary json file & can render that.
    let dataIndex = urlParams[urlParams.length - 1];

    const [prompt, setPrompt] = useState([]);
    useEffect(() => {
        fetch("/prompts.json")
        .then(response => response.json())
        .then(data => setPrompt(data[dataIndex]))
        .catch(err => console.log(err));
    }, []);
    //works...
    //console.log(prompt)

    //copy prompt to clipboard
    const [copySuccess, setCopySuccess] = useState("");
    const copyToClipboard = () => {
        navigator.clipboard.writeText(prompt.prompt);
        setCopySuccess(true);
    }

    return (
        <main>
            
            <section className="section-header pb-0 pb-lg-0 bg-primary text-white">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center">
                        <div className=" text-center text-lg-center">
                            <h1 className="display-3 mb-0">Promptbook: <br/> your prompts API marketplace.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section section-md bg-primary text-white">      
                    <div className="row justify-content-center">
                        
                            <div className="card bg-primary flex-md-row g-0 border-0 align-items-center">
                                <div className="card-body text-center p-1">
                                   
                                    <p className="fw-normal lead text-muted">
                                        What do you call an AI that doesn't work? A neural "not-work". Haha!
                                    </p>
                                    <h6>-- ChatGPT</h6>
                                    
                                </div>
                            </div>
                        
                    </div>         
            </div>


            <section className="section section-md bg-primary">
                <div className="container" >
                    <div className="row justify-content-center" >
                        <div className="col-12 col-lg-12" >
                            <div className="row text-white" >
                                <div className="col-12 col-lg-12 px-md-4 py-md-4" >

                                    <div  className="card-body text-center bg-secondary rounded mb-4 mb-lg-4" >
                                        
                                            {prompt.prompt_category}
                                        
                                    </div>

                                    <div  className="card-body text-center bg-secondary rounded mb-2 mb-lg-2" style={{padding: "3em"}}>
                                        <h3 className="h5 me-2 my-2" >
                                            {prompt.prompt}
                                        </h3> 
                                        <div className='px-md-4 py-md-4'>
                                            <button onClick={copyToClipboard} className="btn btn-primary p-md-2">
                                                {copySuccess ? "Copied!" : <FontAwesomeIcon icon={faCopy} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default PromptPage;