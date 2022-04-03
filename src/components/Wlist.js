import React from 'react'

const Wlist = (props) => {
    return (
        <>

            <div className="row" id='wl'>
                <div className="col-md-9 col-xm-12">
                    <p>
                      <a href='url'> { props.text}</a>
                    </p>

                </div>
                <div className="col-md-3 col-xm-12">
                    <button className='btn' onClick={ () => {
                        props.onSelect(props.id)
                    } }>
                        click me
                    </button>

                </div>
            </div>




            <hr />

        </>

    )
}

export default Wlist;
