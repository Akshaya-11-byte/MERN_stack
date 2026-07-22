import React,{ useState } from "react";

function DB_connect()
{

    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const [Status,setStatus]=useState({
        type:'',
        msgs:''
       }
    );
    const[Loading,setLoading]=useState(false);
    const handleInputData =(e)=>{
        const {name,value}=e.target;
        setFormData(
            prev=>({
                ...prev,
                [name]:value
            })
        );
    };
    const handleSubmit=async(e)=>
    {
        e.preventDefaulf();
        setLoading(true);
        setStatus({
            type:'',
            msgs:''
        });
        try
        {
            const response=await fetch('',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(FormData)
            });
            const result=await response.json();
            if(response.ok)
            {
                setStatus({type:"Success",msgs:"Form submitted successfully"});
                setFormData({name:'',email:'',msgs:''})
            }
            else{
                setStatus({type:"Fail",msgs:"Submission Failed."});
            }
        }
        catch(error){
            setStatus({type:'error',msgs:"Could not connect to Localhost"})
        }
        finally
        {
            setLoading(false);
        }
        return(
            <>
                
            </>
        );
    }
}
export default DB_connect;