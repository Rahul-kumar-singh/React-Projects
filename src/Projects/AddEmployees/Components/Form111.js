import React,{useState} from 'react';
//import { useNavigate } from 'react-router-dom';

const Form = ()=>{
    //const navigate=useNavigate();
    const [FormFileds,setFormFileds] = useState({
        name:'',
        email:'',
        number:''
    });
    const [TODOS,setTODOS] = useState([]);
    const changeHandler = (e)=>{
        setFormFileds({...FormFileds,[e.target.name]:e.target.value})
    }
    const SubmitHandler = (e)=>{
        e.preventDefault();
        const newFormFiels = [...TODOS,FormFileds]
        setTODOS(newFormFiels)
    }
    return (
        <div className='container py-5'>
            <div className='row '>
                <div className='col col-md-6 m-auto'>
                    <div className='gutter gap'>
                        {/* <pre>{JSON.stringify(TODOS)}</pre> */}
                        <form className='shadow p-5 pt-4' onSubmit={SubmitHandler}>
                            <h2 className='text-center mb-5'>Create an Account</h2>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='name'
                                onChange={changeHandler}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='email'
                                onChange={changeHandler}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Number</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='number'
                                onChange={changeHandler}/>
                            </div>
                                <button type="submit" className="mt-3 btn btn-success form-control">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
