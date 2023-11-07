import { Link,  useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin.jsx"
import { ContextProvider } from "../AuthContext/AuthProvider.jsx";


 const LogIn = () => {

   const { signIn } = useContext(ContextProvider);
   const navigate=useNavigate();
   const location=useLocation()


   const handleLogin = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget)
     const email = data.get("email");
     const password = data.get("password")
     console.log(email,password)

     signIn(email, password)
       .then(() => {
         toast("You are Logged In !");
          navigate(location?.state ? location.state : "/");
       })
       .catch((error) => {
         const errorMessage = error.message
         if (errorMessage.includes("password")) {
           toast.error("Password doesn't match.");
         } else if (errorMessage.includes("email")) {
           toast.error("Email doesn't match.");
         } else {
           toast.error("An error occurred during login.");
         }
       });
   }
     return (
       <div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-3 ml-12 items-center">
           <div className="hero min-h-screen w-full md:col-span-2">
             <div className="hero-content flex-col ">
               <div className="text-center lg:text-left">
                 <h1 className="text-5xl font-bold">Login now!</h1>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleLogin} className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input
                       type="email"
                       name="email"
                       placeholder="email"
                       className="input input-bordered"
                       required
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input
                       name="password"
                       type="password"
                       placeholder="password"
                       className="input input-bordered"
                       required
                     />
                     <label className="label">
                       <a href="#" className="label-text-alt link link-hover">
                         Forgot password?
                       </a>
                     </label>
                   </div>
                   <div className="form-control mt-6">
                     <button
                       className="btn btn-primary"
                     >
                       Login
                     </button>
                     <ToastContainer></ToastContainer>
                   </div>
                 </form>
               </div>
               <p className="text-green-600 text-xl mt-6">
                 Are you New ?{" "}
                 <Link className="text-red-700" to="/register">
                   Register
                 </Link>Now!
               </p>
             </div>
           </div>
           <div className="md:col-span-1 mr-10">
             <SocialLogin></SocialLogin>
           </div>
         </div>
       </div>
     );
 }
 export default LogIn;
