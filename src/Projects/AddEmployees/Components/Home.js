import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props)=>{
    const align = {
        height:'80vh'
        }
    return (
        <>
            <div className={`container py-5 d-flex align-items-center justify-content-center`} style={align}>
                <div className='row w-100'>
                    <div className='col col-md-6 m-auto'>
                        <div className='gutter gap text-center'>
                            <Link className='btn btn-success rounded-0 px-3' to='Form'>ADD NEW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
