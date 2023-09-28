'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card"
import '../styles/styles.css'
import { Image } from "@nextui-org/image"
import { dateFormat, timeFormat } from "../libs/utils";
import { NewPost, Clock, CommentBalloon, DiscussionImg, UpVoteImg, DownVoteImg } from './ui/Icons';
import ReadArticle from "./ReadArticle";

const Post = (props:any) => {
    const article = props.data

    const [imgError, setImgError] = useState(false)
    const [imgPost, setImgPost] = useState(article.thumbnail)
    const [content, setContent] = useState({})
    
    const date = dateFormat(article.created_utc)
    const time = timeFormat(article.created_utc)
    const urlContent = `https://www.reddit.com${article.permalink}`

    const handleImgError = () => {
        setImgError(true)
        setImgPost("/assets/img/postDefault.jpeg")
    }

    const setNewContent = () => {
        let contentJson:string = '';
        let urlSize = urlContent.length
        if(urlContent[urlSize - 1] === '/') {
               contentJson = urlContent.slice(0, urlSize - 1)
        }
        contentJson += '.json'
        setContent(contentJson)
    }

    useEffect(() => {
      setNewContent()
    }, )
    

      return (
        <div className='gap-15 justify-between mb-4'>
            
                <Card 
                isBlurred
                className='grid grid-cols-10 gap-1 p-5 bg-slate-50/90 dark:bg-slate-50/100' 
                key={props.key} 
                shadow='sm'>
                    <CardHeader className="flex-col items-start col-span-9">
                            <h3 className='max-h-16 max-w-full font-bold text-large p-0 m-0 text-cyan-700 col-span-8 truncate'>
                                {article.title}
                            </h3>
                    </CardHeader>
                    {/* up votes aqui */}
                    <div className='col-span-1 row-span-2 flex flex-col bg-slate-200 items-center justify-around text-sm text-cyan-900'>
                        <div className='w-10'>
                            <UpVoteImg />
                        </div>
                        <p>{article.ups}</p>
                        <div className='w-10'>
                            <DownVoteImg />
                        </div>       
                    </div>
                        <CardBody className='col-span-9 row-start-2 flex flex-row w-full p-3'>
                            <div className=' w-1/4'>
                                <Image
                                    alt="text"
                                    className="object-cover"
                                    height={300}
                                    shadow="md"
                                    src={imgPost}
                                    onError={handleImgError}
                                    width="100%"
                                />
                            </div>
                            <div className='w-3/4 flex flex-col font-light px-4 text-zinc-400 fill-zinc-400'>
                                <div className='mb-3'>
                                    <p className='font-bold text-base text-teal-600'>
                                        {article.subreddit_name_prefixed}
                                    </p>
                                </div>
                                <div className='flex'>
                                    
                                    <p className='flex gap-1 mb-1 text-sm'>
                                        {<NewPost className='w-4 h-4' />}
                                        Posted by {
                                        <Link href={`https://www.reddit.com/user/${article.author}/`} className='text-cyan-900 font-medium'>
                                        {article.author}
                                        </Link>}
                                    </p>
                                    
                                </div>
                                <div className='flex gap-1 mb-1 text-sm'>
                                    <Clock className='w-4 h-4' />
                                    <p>{time}</p>
                                    <p> - {date} </p>
                                </div>
                                <div className='flex gap-1 text-sm'>
                                    <CommentBalloon className='w-4 h-4' />
                                    <p> {article.num_comments} comments</p>
                                </div>
                                <div className='pt-2'>
                                    <ReadArticle articleContent={content} />
                                </div>                       
                            </div>
                            
                        </CardBody>
                    
                </Card>
            
        </div>
    )
}

export default Post

/*
id="t3_16mheye-post-rtjson-content"

*/