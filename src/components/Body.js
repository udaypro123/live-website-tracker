import React, { useState } from 'react';

import Wlist from './Wlist';

const Head = () => {
    
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemsEvent = (event) => {
        setInputList(event.target.value);
    };


    const listofItems = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        })
        setInputList(" ");
    };

    const deleteItems = (id) => {
        setItems((olditems) => {
            return olditems.filter((arrelem, index) => {
                return index!==id;
            })
        })
    }
    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">
                        <div className="row" id='ro'>
                            <div id='head' className="col-md-8 col-xm-12">
                                LIVE WEBISTE TRACKING

                            </div>
                            <div id='heada' className="col-md-4 col-xm-12">
                                <a href="/"> currently tracking 4 website</a>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xm-12">
                                <input type="text" placeholder='input with URL Validation'
                                    value={ inputList } onChange={ itemsEvent } />
                                <button onClick={ listofItems }> Add Website</button>
                                <h6>WEBSITE</h6>


                             
                                { items.map((itemsList, index) => {
                                    return (<Wlist key={ index }
                                        id={ index }
                                        text={ itemsList }
                                        onSelect={ deleteItems }
                                    />);
                                }) }

                            </div>

                        </div>
                        {/* <div className="row">
                            <div className="col-md-12 col-xm-12">
                               website

                               <ol>
                                   <li>{inputList}</li>
                               </ol>
                            </div>
                           
                        </div> */}

                    </div>


                   
                </div>






            </div>
        </>
    )
}

export default Head;
