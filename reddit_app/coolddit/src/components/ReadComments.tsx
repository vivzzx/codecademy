'use client'

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar, AvatarIcon } from '@nextui-org/avatar'
import React, { use, useEffect, useState } from 'react'
import { dateFormat, timeComplete } from '@/libs/utils'
import { DownVoteImg, UpVoteImg } from './ui/Icons'
import { avatar } from '@nextui-org/react'

const ReadComments = ( props:any ) => {
    const [comment, setComment] = useState({})
    
    const [avatarCounter, setAvatarCounter] = useState('')

    const commentData = props.comment
    const { subreddit, author, body, ups, created_utc } = props.comment


    const commentTimeStamp = timeComplete(created_utc)


    useEffect(() => {
        setComment(props)

        //console.log("teste eff:", props.comment.body)
        //console.log("dateComment: ", dateComment, "dateNow: ", dateNow)
  
    
    }, )
    /*
    useEffect(() => {
        setAvatarCounter(avatarCounter + 1)
        if (avatarCounter === 17) {
            setAvatarCounter(0)
        }
    }, [avatarCounter])
    */
    return (
        <div>
            <Card className='my-5 mr-2' key={props.key}>
                <CardHeader className='flex gap-4'>
                    <div className='flex gap-5'>
                        <Avatar src={`assets/img/avatars/avatar${props.avatarNum}.png`} isBordered radius='full' size='md' />
                    </div>
                    <div className="flex gap-1 items-center">
                        <h4 className='font-semibold text-teal-700'>{author}</h4>
                        <p className='text-zinc-400 text-sm'>- {commentTimeStamp}</p>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                <p className='text-zinc-700 font-light'>
                {body}
                </p>
                </CardBody>
                <CardFooter className='gap-3'>
                    <div className='flex gap-1 text-zinc-600 font-semibold text-small items-center fill-teal-600'>  
                        <UpVoteImg className='w-5 h-5' />
                        {ups}
                        <DownVoteImg className='w-5 h-5' /> 
                    </div>
                </CardFooter>
            </Card>
            
        
        </div>
    )
}

export default ReadComments