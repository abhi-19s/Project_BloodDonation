import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const userLogin = createAsyncThunk(
    'auth/login',
    async({role,email,password},{rejectWithValue})=>{
        try {
            const {data}=await API.post('/auth/login',{role,email,password})
            //store token
            if(data.success){
                alert(data.message);
                localStorage.setItem('token',data.token);
                window.replace("/");
            }
            return data;
        } catch (error) {
            if(error.response && error.response.data.message){
            return rejectWithValue(error.response.data.message)
            }else{
                return (error.message);
            }
            
        }

    }
);
//register
export const userRegister=createAsyncThunk(
    'auth/register',
    async({e,name,role,email,password,organisationName,hospitalName,website,address,phone},{rejectWithValue})=>{
        try {
            const {data}=await API.post('auth/register',{e,name,role,email,password,organisationName,hospitalName,website,address,phone})
            if(data.success){
                //toast.success(data.message);//
                window.location.replace('/login');
            }
        } catch (error) {
            console.log(error)
            if(error.respose && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }
            
        }

    }

);
//current user
export const getCurrentUser=createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue})=>{
        try {
            const res =await API.get('/auth/current-user')
            if(res?.data){
                return res?.data
            }
        } catch (error) {
            console.log(error)
            if(error.respose && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else{
                return rejectWithValue(error.message);
            }
        }

    }
)