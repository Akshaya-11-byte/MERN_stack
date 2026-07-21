import { useState } from "react";
function Forms(){
    const [User, setUser]=useState(
        {
            name:"",
            email:"",
            password:"",
            phone:"",
            gender:"",
            skills:""
        }
    );
    const change=(e)=>{
        setUser(
            {
                ...User,[e.target.name]:e.target.value
            }
        );
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted.")
    };
    return(
        <div style={{margin:"10px"}}>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}>
                <label><b>Name:</b></label>
                <input type="text" name="name" value={User.name} onChange={change}/>
                <br/>
                <label><b>Email:</b></label>
                <input type="email" name="email" value={User.email} onChange={change}/>
                <br/>
                <label><b>password:</b></label>
                <input type="password" name="password" value={User.password} onChange={change}/>
                <br/>
                <label><b>Phone:</b></label>
                <input type="tel" name="phone" value={User.phone} onChange={change}/>
                <br/>
                <label><b>Gender:</b></label>
                <input type="radio" name="gender" value="Male" onChange={change}/>Male
                <input type="radio" name="gender" value="FeMale" onChange={change}/>FeMale
                <br/>
                <label><b>Skills:</b></label>
                <select name="skills" value={User.skills} onChange={change}>
                    <option value="">Skills:</option>
                    <option value="React">React</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JS">Js</option>
                </select>
                <br/>
                <button type="submit">Submit</button>



            </form>
            <div style={{position:"relative",top:2}}>
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>{User.name}</td>
                    </tr>
                    <tr>
                        <th>email:</th>
                        <td>{User.email}</td>
                    </tr>
                    <tr>
                        <th>password:</th>
                        <td>{User.password}</td>
                    </tr>
                    <tr>
                        <th>Phone:</th>
                        <td>{User.phone}</td>
                    </tr>
                    <tr>
                        <th>Gender:</th>
                        <td>{User.gender}</td>
                    </tr>
                    <tr>
                        <th>skills:</th>
                        <td>{User.skills}</td>
                    </tr>

                </table>
            </div>
        </div>
    );
}
export default Forms;