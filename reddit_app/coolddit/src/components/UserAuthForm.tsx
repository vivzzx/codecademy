import { Button } from '@nextui-org/button'
import { FC } from 'react'

interface UserAuthFormProps {
  
}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
    return (
        <div className='flex justify-center'>
            <Button>Google</Button>
        </div>)
}

export default UserAuthForm