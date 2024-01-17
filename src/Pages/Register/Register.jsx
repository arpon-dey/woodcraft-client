import { Link } from 'react-router-dom';
import login from '../../assets/login1.jpg';
const Register = () => {
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
                               
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                               
                                <input type="file" placeholder="email" className="input input-bordered pt-2" required />
                            </div>
                            <div className="form-control">
                               
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-brown-400 hover:bg-brown-700 text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;