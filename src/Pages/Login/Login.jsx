import { Link } from 'react-router-dom';
import login from '../../assets/login1.jpg';
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="   ">
                       <img src={login} className='w-10/12 lg:relative lg:bottom-6' alt="" />
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                    <div className='flex gap-4 justify-center my-4'>
                            <Link to='/login' className='btn bg-gray-600 w-40  text-white font-semibold'>Login</Link>
                            <Link to='/register' className='btn bg-gray-800  w-40  text-white font-semibold'>Register</Link>
                        </div>
                        <form className="card-body">
                            <div className="form-control">
                               
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-brown-400 hover:bg-brown-700 text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;