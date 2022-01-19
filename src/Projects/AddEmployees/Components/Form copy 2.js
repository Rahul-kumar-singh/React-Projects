import React,{useState,useRef} from 'react';
import '../App.css';

const Form = (props)=>{
    const [FormFileds,setFormFileds] = useState({
        name:'',
        email:'',
        number:''
    });
    const [FormLists,setFormLists] = useState([]);
    const changeHandler = (e)=>{
        setFormFileds({...FormFileds,[e.target.name]:e.target.value})
    }
    // valiadtion code
    const {name,email,number}=FormFileds;
    const onylNumber = /^[0-9 ]*$/;
    const onylString = /^[a-zA-Z ]*$/;
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let nameInputs = useRef();
    let emailInputs = useRef();
    let numberInputs = useRef();

    const Validation = ()=>{
        if(name.trim()===''){
            setError(nameInputs,'Name field should not be emprty!');
        }else if(!name.match(onylString)){
            alert('Please enter only Alphabets')
        }else{
            setSuccess(nameInputs)
        }

        if(email.trim()===''){
            setError(emailInputs,'Email field should not be emprty!')
        }else if(!isEmail.test(email)){
            setError(emailInputs,'Please provide valid email')
        }else{
            setSuccess(emailInputs)
        }
        
        if(number.trim()===''){
            setError(numberInputs,'Number field should not be emprty!')
        }else if(!number.match(onylNumber)){
            setError(numberInputs,'Please enter only Numbers')
        }else{
            setSuccess(numberInputs)
        }   
    }
    const setError = (InputS,message)=>{
        const form_control = InputS.current.parentElement;
        form_control.className='mb-4 formGroup error';
        const small = form_control.querySelector('small');
        small.innerText=message;
    }
    const setSuccess = (InputS)=>{
        const form_control = InputS.current.parentElement;
        form_control.className='mb-4 formGroup success';
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
        Validation();
        const newFormFiels = [...FormLists,FormFileds]
        setFormLists(newFormFiels)
        props.empData(FormLists)
    }

    return (
        <div className='container py-5'>
            <div className='row '>
                <div className='col col-md-6 m-auto'>
                    <div className='gutter gap'>
                        <form className='shadow p-5 pt-4' onSubmit={SubmitHandler}>
                            <h2 className='text-center mb-5'>Create an Account</h2>
                            <div className="mb-3 formGroup">
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='name'
                                onChange={changeHandler} value={FormFileds.name} ref={nameInputs}/>
                                <i className="bi bi-app-indicator"></i>
                                <small>Hello world</small>
                            </div>
                            <div className="mb-3 formGroup">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='email'
                                onChange={changeHandler} value={FormFileds.email}  ref={emailInputs}/>
                                <i className="bi bi-app-indicator"></i>
                                <small>Hello world</small>
                            </div>
                            <div className="mb-3 formGroup">
                                <label className="form-label">Number</label>
                                <input type="text" className="form-control rounded-0 bg-light" name='number'
                                onChange={changeHandler} value={FormFileds.number}  ref={numberInputs}/>
                                <i className="bi bi-app-indicator"></i>
                                <small>Hello world</small>
                            </div>
                                <button type="submit" className="mt-3 btn btn-success form-control">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>

            {
                Object.keys(FormLists).length>0?<div className='row m-auto mt-5'>
                <div className='col col-md-8 m-auto'>
                    <div className='gutter-gap'>
                        <table className='table table-stritched'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>NAME</td>
                                    <td>EAMIL</td>
                                    <td>NUMBER</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                FormLists.map((elem,key)=>{
                                    return <tr key={key}>
                                        <td>{key}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.number}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>:null
            }
        </div>
    )
}

export default Form;
