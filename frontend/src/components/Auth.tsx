import { SignupInput } from "@yashtyagi097/pulse-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";


function Auth({type}:{type :"signup" | "signin"}) {
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    });
    const [loading,setLoading]=useState(false);
    async function sendRequest(){
        setLoading(true);
        try {
            const response =await  axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?'signup':"signin"}`,postInputs)  
            const jwt= response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        } catch (error) {
            // alert user here if the request failed
            alert('Please enter enter correct input...')
        }finally{
            setLoading(false);
        }
    }
  return (
   
    <div className="h-screen flex items-center justify-center flex-col ">
         {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center flex-col">
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                  {type==="signup"?"Create your account":"Sign In here"}
                </div>
                <div className="text-sm mt-1 text-center text-gray-600">
                    {type ==="signup" ? "Already have an account?" :"Don't have an account?"}
                <Link className="px-1 underline text-blue-700"  to={type==="signup"?"/signin":"/signup"}>{type==="signup"?"Login":"Signup"}</Link>
                </div>
            </div>
            <div className="my-6 flex flex-col gap-4">
            {type==="signup"?<LabelledInput  label="Name" placeholder="Yash Tyagi.." onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,//existing username and password 
                        name:e.target.value
                    })
            }}/>:null}
             <LabelledInput label="Username" placeholder="yashtyagi@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,//existing username and password 
                        username:e.target.value
                    })
            }}/>
             <LabelledInput label="Password" type={"password"} placeholder="Qwe@$12" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,//existing username and password 
                        password:e.target.value
                    })
            }}/>
            </div>
            <button disabled={loading}onClick={sendRequest}type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">
               {loading ?(
                <span className="loader">Please wait...</span>
               ):(
                type=="signup"?"Sign up" : "Sign in"
               )
               }</button>
        </div>
    </div>
  )
}

export default Auth
interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
                  <div>
            <label  className="block mb-1 text-sm font-semibold text-black">{label}</label>
            <input onChange={onChange}type={type||"text"} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black-500 focus:border-black block w-full p-2.5  dark:border-gray-600  dark:text-black " placeholder={placeholder} required />
        </div>

    </div>
}