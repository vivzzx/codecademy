import SignIn from '@/components/SignIn'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { FC } from 'react'

const page: FC = ({}) => {
    return (
        <div className='absolute inset-0'>
            <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
                <Link href='/' className='self-start -mt-20'>
                    <Button variant='ghost'>Home</Button>
                </Link>
                <SignIn />
            </div>
        </div>
    )
}

export default page