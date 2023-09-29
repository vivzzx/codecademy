'use client'

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar, AvatarIcon } from '@nextui-org/avatar'
import React, { useEffect, useState } from 'react'
import { dateFormat, timeComplete } from '@/libs/utils'


const ReadComments = ( props ) => {
    const [comment, setComment] = useState({})
    const commentData = props
    const { subreddit, author, body, ups, created_utc } = props.comment

    const commentTimeStamp = timeComplete(created_utc)
    const dateComment = new Date(commentTimeStamp)
    const timeStampNow = Date.now()
    const dateNow = new Date(timeStampNow)
    const difference = dateComment - dateNow
    useEffect(() => {
        setComment(props)
        //console.log("teste eff:", props.comment.body)
        //console.log("dateComment: ", dateComment, "dateNow: ", dateNow)
        console.log("diferenca: " difference)
    }, )
    
    
    return (
        <div>
            <Card className='my-5'>
                <CardHeader className='flex gap-4'>
                    <div className='flex gap-5'>
                        <Avatar isBordered radius='full' size='md' icon={<AvatarIcon />}  />
                    </div>
                    <div className="flex gap-1">
                        <h4 className='font-semibold text-teal-700'>{author}</h4>
                        <p className='text-zinc-500'>- Data aqui</p>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                <p className='text-zinc-700 font-light'>
                {body}
                </p>
                </CardBody>
                <CardFooter className='gap-3'>
                    <div className='flex gap-1 text-zinc-700'>
                        <p className='font-semibold text-small'>{ups} votos</p>
                    </div>
                </CardFooter>
            </Card>
            
        
        </div>
    )
}

export default ReadComments