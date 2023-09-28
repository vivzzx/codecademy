import Link from "next/link"
import { Icons } from "./ui/Icons"
import UserAuthForm from "./UserAuthForm"

const SignIn = () => {
    return (
        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <div className="flex flex-col space-y-2 text-center">
                <Icons.logo />
                <h1 className="text-2x1 font-semibold tracking-tight">Welcome back</h1>
                <p className="text-sm max-w-xs mx-auto">By continuing, you are setting up your Reddit</p>
            </div>

            {/* Sign in form here 🥰 */}
            <UserAuthForm />

            <p className="px-8 text-center text-sm text-zinc-700">
                New to Coolddit?{' '}
                <Link 
                    href="/sign-up" 
                    className="hover:text-zinc-800 text-sm underline underline-offset-4">
                    Sign Up
                </Link>
            </p>
        </div>
    )
}

export default SignIn

/* 
a parte do sign up: 42min
*/