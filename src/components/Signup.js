import { useState } from "react";


const Signup = ()=>{
    const [sign,setSign]=useState({
        username:"",
        password:"",
        email:"",
        firstName:"",
        lastName:""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct(sign));
        history.push("/");
        resetForm();
      };

    const handleChange = (event) => {
        setSign({ ...sign, [event.target.name]: event.target.value });
      };

    return(
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">username : </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter username"
            onChange={handleChange}
            name="username"
            value={sign.username}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">password</label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your password"
            onChange={handleChange}
            name="password"
            value={sign.password}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your email"
            onChange={handleChange}
            name="email"
            value={sign.email}
          />
        </div>
  
        <div className="form-group">
          <label for="exampleFormControlInput1">first name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the first name"
            onChange={handleChange}
            name="firstName"
            value={sign.firstName}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">last name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter the last name"
            onChange={handleImage}
            name="lastName"
            value={sign.lastName}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    );
}

export default Signup;