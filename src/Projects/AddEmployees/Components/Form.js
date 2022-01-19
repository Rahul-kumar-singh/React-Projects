import React,{useState,useEffect} from 'react';

const Form = ()=>{
    const initialvalues = {name:'',email:'',number:''}
    const [Formvalues,setFormvalues] = useState(initialvalues);
    const [FormLists,setFormLists] = useState([]);
    const [Formerrors,setFormerrors] = useState({});
    const [isSubmit,setisSubmit] = useState(false);


    const changeHandler = (e)=>{
        setFormvalues({...Formvalues,[e.target.name]:e.target.value})
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
        setFormerrors(Validate(Formvalues))
        setisSubmit(true);
        // const newFormList = [...FormLists,Formvalues]
        // setFormLists(newFormList)
    }

    const Validate = (values)=>{
        const NumOnly = /^[0-9 ]*$/;
        const StringOnly= /^[a-zA-Z ]*$/;
        const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const error = {};
        if(!values.name){
            error.name='Username shouldn\'t be empty!'
        }else if(!values.name.match(StringOnly)){
            error.name='Please enter only alphabets!'
        }

        if(!values.email){
            error.email='Email shouldn\'t be empty!'
        }else if(!values.email.match(isEmail)){
            error.email='Please provide valid email address!'
        }

        if(!values.number){
            error.number='Number shouldn\'t be empty!'
        }else if(!values.number.match(NumOnly)){
            error.number='Please enter Only Numbers!'
        }
        return error;
    }

    useEffect(()=>{
        if(Object.keys(Formerrors).length===0 && isSubmit){
            // console.log(Formvalues);   
            const newFormList = [...FormLists,Formvalues]
            setFormLists(newFormList)
        }
    },[Formerrors])
    return (
        <div className='container py-5'>
            <div className='row '>
                <div className='col col-md-6 m-auto'>
                    <div className='gutter gap'>
                        {(Object.keys(Formerrors).length===0 && isSubmit)?<div className='text-success text-center mb-3'>Signed In Successfully</div>:null}
                        <form className='shadow p-5 pt-4' onSubmit={SubmitHandler} method='post'>
                            <h2 className='text-center mb-5'>Create an Account</h2>
                            <div className="mb-3 formGroup">
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='name'
                                onChange={changeHandler} value={Formvalues.name}/>
                                <span className='text-danger'>{Formerrors.name}</span>
                            </div>
                            <div className="mb-3 formGroup">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='email'
                                onChange={changeHandler} value={Formvalues.email} />
                                <span className='text-danger'>{Formerrors.email}</span>
                            </div>
                            <div className="mb-3 formGroup">
                                <label className="form-label">Number</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='number'
                                onChange={changeHandler} value={Formvalues.number}/>
                                <span className='text-danger'>{Formerrors.number}</span>
                            </div>
                                <button type="submit" className="mt-3 btn btn-success form-control">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>

            {
                (Object.keys(Formerrors).length===0 && isSubmit)?<div className='row m-auto'>
                <div className='col col-md-8 m-md-auto'>
                    <table className='table mt-5'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>NUMBER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                FormLists.map((elem,index)=>{
                                return  <tr key={index}>
                                            <td>{index}</td>
                                            <td>{elem.name}</td>
                                            <td>{elem.email}</td>
                                            <td>{elem.number}</td>
                                        </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>:null
            }
        </div>
    )
}

export default Form;
