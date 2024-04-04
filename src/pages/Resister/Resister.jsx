import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Resister = () => {
  const handleResister = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    console.log(form.get('password'))
   }  
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center my-10">Please Resister</h2>

        <form onSubmit={handleResister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Resister</button>
          </div>
        </form>
        <p className="text-center mt-4">Already have an account ? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Resister;