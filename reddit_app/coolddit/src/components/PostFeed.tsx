'use client'

import React from 'react'
import Post from "./Post";
import feed from "../libs/popular.json";

const PostFeed = () => {
   

    return (
        <div className='w-3/5 mx-auto flex-col'>
            {feed.data.children.map((item, key) => {
                return (
                    <Post key={key} data={item.data} className={'justify-between'} />
                );
            })}
        </div>
    )
}

export default PostFeed