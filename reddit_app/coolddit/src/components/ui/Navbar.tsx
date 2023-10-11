import React from 'react'
import Link from "next/link"
import { CooldditLogo } from "./Icons"
import { Button } from '@nextui-org/button'

const Navbar = async () => {

    return (
        <div className="fixed top-0 inset-x-0 h-fit py-2 bg-zinc-100 border-zinc-50 z-10">
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                <Link href='/' className="flex gap-2 items-center">
                    <CooldditLogo className='h-10 w-10 sm:h-10 sm:w-10 fill-teal-600' />
                    {/**  no p ele colocou como hidden  **/}
                    <p className="hidden text-zinc-700 text-xl font-bold md:block">
                        Coolddit
                    </p>
                </Link>
                { /* SEARCH BAR HERE (min 30) */ }

                <Link href='/sign-in'>
                    <Button color='primary'>Sign In</Button>
                </Link>

            </div>   
        </div>
    )
}

export default Navbar
/* parei no minuto 25 */

/* button explic (min 11) */
