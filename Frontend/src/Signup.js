import {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"


function Signup(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPass] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/register", {name, email, password})
        .then(res => console.log(res))
        .catch(err=>console.log(err))
    }

    return(

        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong> Name </strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        className="form-control rounded-0"
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Email </strong>
                        </label>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong> Password </strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPass(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already have an Account?</p>
                <Link to ="/" className="btn btn-default border w-100 bh-loght rounded-0"> 
                    Login
                </Link>
            </div>

        </div>

    )

}


export default Signup
