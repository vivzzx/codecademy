import React from 'react'
import Link from "next/link"
import { CooldditLogo, SearchImg } from "./Icons"
import { Button } from '@nextui-org/button'
import { Input } from "@nextui-org/input";
import { input } from '@nextui-org/react';

const Navbar = async () => {

    return (
        <div className="fixed top-0 inset-x-0 h-fit py-2 bg-zinc-100 border-zinc-50 z-10">
            <div className='flex mx-5'>
                <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                    <Link href='/' className="flex gap-2 items-center">
                        <CooldditLogo className='h-10 w-10 sm:h-10 sm:w-10 fill-teal-600' />
                        {/**  no p ele colocou como hidden  **/}
                        <p className="hidden text-zinc-700 text-xl font-bold md:block">
                            Coolddit
                        </p>
                    </Link>
                    { /* SEARCH BAR HERE (min 30) */ }

                </div>
                <div className='flex h-10'>
                    <Input 
                        type='search'
                        label='Search'
                        labelPlacement='inside'
                        isClearable
                        placeholder='Type to search...'
                        size='md'
                        startContent={
                            <SearchImg className='text-2xl w-8 opacity-70' />
                        }
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                "bg-slate-200",
                            ],
                            inputWrapper: [
                                "bg-slate-200",
                            ],                     
                        }}
                    />
                </div>  
            </div>
             
        </div>
    )
}

export default Navbar
/* parei no minuto 25 */

/* button explic (min 11) */
