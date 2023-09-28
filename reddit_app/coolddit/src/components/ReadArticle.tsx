'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/button'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { useDisclosure } from '@nextui-org/use-disclosure'
import contentJson from '../libs/testTxt.json'
import ReadComments from './ReadComments'
import { dateFormat } from '@/libs/utils'
import { Avatar } from '@nextui-org/avatar'
import about from '../libs/about.json'
import { NewPost, Clock, CommentBalloon, DiscussionImg, UpVoteImg, DownVoteImg } from './ui/Icons';
import Link from 'next/link'
import { Chip } from '@nextui-org/chip'
import { ScrollShadow } from '@nextui-org/scroll-shadow'

const ReadArticle = (props:any) => {
    const [content, setContent] = useState({})
    const [comments, setComments] = useState({})
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    
    const { title, ups, author, num_comments, created_utc, subreddit, subreddit_id, selftext, link_flair_text, link_flair_background_color } = content
    //const textContentBody = contentJson.data.children
    const userUrl = `https://www.reddit.com/user/${author}/`
    const imgUrl = about.data.icon_img

    useEffect(() => {
      setContent(contentJson[0].data.children[0].data)
      setComments(contentJson[1].data.children)
      //console.log("meu teste", comments)
    }, [contentJson])
    
    
    return (
        <>
            <Button onPress={onOpen}>Read here</Button>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement='top'
                backdrop='blur'
                size='3xl'
                scrollBehavior='outside'
            >
                <ModalContent className='bg-stone-200 text-zinc-700'>
                    {(onClose) => (
                        <div className=''>
                            <ModalHeader className='flex flex-col gap-1 h-1/4'>
                                <div className='flex gap-2 items-center'>
                                    
                                    <Avatar 
                                        size='md'
                                        src={imgUrl}    
                                    />
                                    <div>
                                        <div className='flex gap-2 items-center'>
                                            <p className='text-md font-bold text-teal-900'>r/{subreddit}</p>
                                            <p className='text-sm text-zinc-400 font-light'>• {dateFormat(created_utc)}</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <p className='text-sm font-light'>by </p>
                                            <Link href={userUrl} className='text-sm font-semibold text-cyan-700'>{author}</Link>
                                        </div>
                                        

                                    </div>
                                </div>
                                <h3 className='py-5 text-2xl'>{title}</h3>
                                <div>
                                    { /* post feed box */ }
                                    <div>
                                        <p>{selftext}</p>
                                    </div>
                                    <div className='
                                        flex gap-1 
                                        font-semibold text-sm
                                        text-zinc-500'>
                                        <CommentBalloon className='w-5 h-5 fill-zinc-500' />
                                        <p>{num_comments} comments</p>
                                        <div className='w-fit'>
                                            {link_flair_text === null ? '' : <Chip color={link_flair_background_color} size='md'>{link_flair_text}</Chip>
                                            } 
                                        </div>
                                    </div>
                                </div>
                            </ModalHeader>
                            <ModalBody className=''>
                                { /* comments box */ }
                                
                                <ScrollShadow className=' h-[350px]'>
                                    {Object.values(comments).map((comment:any, index) => (
                                        <ReadComments key={index} comment={comment.data} />
                                    ))}
                                </ScrollShadow>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ReadArticle