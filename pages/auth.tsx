import { useCallback, useState } from "react";
import Input from "../components/input";
import axios from 'axios';

const Auth = () => {
    const [email, setEmail]= useState('');
    const [name, setName]= useState('');
    const [password, setPassword]= useState('');
    const [variant , setVariant] = useState('');

    const toggleVariant = useCallback (()=>{
        setVariant((currentVariant)=> currentVariant == 'login'?'register':'login');
    },[]);
    const register = useCallback(async ()=> {
        try{
            await axios.post('api/register',{
                email,
                name,
                password
            });
        } catch(error){
            console.log(error);
        }
    },[]);
    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt = "Logo" className="h-12"/>

                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 place-self-center mt-2 w-full rounded-md lg:w-2/5 lg:max-w-md">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant =='login'  ? 'Sign in' :'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(ev: any)=>setName(ev.target.value)}
                                    id="name"
                                    type="name"
                                    value={name}
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev: any)=>setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev: any)=>setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-red-600 py-3 transform motion-safe:hover:scale-110 text-white rounded-md  w-full mt-10 hover:bg-red-700 transition">
                            {variant=='login'? 'Login': 'Sign up'}
                        </button>
                        <p className="text-white mt-12">
                            {variant== 'login'? 'First time using Netflix?' :'Already had an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant == 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    
    );
}
export default Auth;