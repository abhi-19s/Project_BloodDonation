import React,{useState} from 'react'
import Inputtype from './Inputtype'
import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({formType,submitButton,formTitle}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const [name,setName]=useState("");
    const [organisationName,setOrganisationName]=useState("");
    const [hospitalName,setHospitalName]=useState("");
    const [website,setWebsite]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
  return (
    <div><form onSubmit={(e)=>{
        if(formType==='login') return handleLogin(e,email,password,role)
        else if(formType=== 'register') return handleRegister(e,name,role,email,password,organisationName,hospitalName,website,address,phone)

    }}>
        <h1 className="text-center">{formTitle}</h1>
        <hr /> 
        <div className="d-felx mb-3">
        <div className="form-check ">
        <input type="radio" className="form-check-input" 
        name="role" 
        id="donorRadio"
        value={'donor'} 
        onChange={(e)=>setRole(e.target.value)}
            defaultChecked
        />
        <label htmlFor=" adminRadio" className="form-check-label">
            Donor
        </label>
        </div>
        <div className="form-check ms-2">
        <input type="radio" className="form-check-input" 
        name="role" 
        id="adminRadio"
        value={'admin'} 
        onChange={(e)=>setRole(e.target.value)}
        />
        <label htmlFor="adminRadio" className="form-check-label">
            Admin
        </label>
        </div>
        <div className="form-check ms-2">
        <input type="radio" className="form-check-input" 
        name="role" 
        id="hospitalRadio"
        value={'hospital'} 
        onChange={(e)=>setRole(e.target.value)}
        defaultChecked
        />
        <label htmlFor=" hospitalRadio" className="form-check-label">
            Hospital
        </label>
        <div className="form-check ms-2">
        <input type="radio" className="form-check-input" 
        name="role" 
        id="organisationRadio"
        value={'organisation'} 
        onChange={(e)=>setRole(e.target.value)}
        />
        <label htmlFor="organisationRadio" className="form-check-label">
            Organisation
        </label>
        </div>
        </div>
        {(()=>{
            switch(true){
                case formType === 'login':{
                    return(
                    <>
                    <Inputtype labelText={"email"}
         lableFor={"forEmail"} 
         inputType={"email"} 
         name={"email"}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />

         <Inputtype labelText={"password"}
         lableFor={"forPassword"} 
         inputType={"password"} 
         name={"password"}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
                    </>
                    );
                }
                case formType === 'register' :{
                    return(
                        <>
         {(role ==='admin' ||role==='donor') && (
            <Inputtype labelText={"Name"}
         lableFor={"forName"} 
         inputType={"text"} 
         name={"name"}
        value={name}
        onChange={(e)=>setName(e.target.value)}
         />
         )}
         {role === 'organisation' &&(
            <Inputtype labelText={"Organisation Name"}
         lableFor={"fororganisationName"} 
         inputType={"text"} 
         name={"organisationName"}
        value={organisationName}
        onChange={(e)=>setOrganisationName(e.target.value)}
         />
         )}
         {role === 'hospital' && (
            <Inputtype labelText={"Hospital Name"}
         lableFor={"forhospitalName"} 
         inputType={"text"} 
         name={"hospitalName"}
        value={hospitalName}
        onChange={(e)=>setHospitalName(e.target.value)}
         />
         )}
         <Inputtype labelText={"email"}
         lableFor={"forEmail"} 
         inputType={"email"} 
         name={"email"}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />
         <Inputtype labelText={"password"}
         lableFor={"forPassword"} 
         inputType={"password"} 
         name={"password"}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
         <Inputtype labelText={"Website"}
         lableFor={"forWebsite"} 
         inputType={"text"} 
         name={"website"}
        value={website}
        onChange={(e)=>setWebsite(e.target.value)}
         />
         <Inputtype labelText={"Address"}
         lableFor={"forAddress"} 
         inputType={"text"} 
         name={"address"}
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
         />
         <Inputtype labelText={"Phone"}
         lableFor={"forPhone"} 
         inputType={"number"} 
         name={"phone"}
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
         />
                        </>
                    )
                }
            }
        })()}
         <div className=" d-flex flex-row justify-content-between">
         {formType === 'login' ? (
            <p>Not registered yet? Register
            <Link to= "/register"> Here! </Link></p>
         ) : (
            <p>Already User?
            <Link to= "/login"> Login </Link></p>
         )}
            <button className='btn btn-primary' type="submit">
                {submitButton}
            </button>
         </div>
         </div>
    </form></div>
  )
}

export default Form;