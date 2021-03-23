import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import InputOption from '../InputOption/InputOption'
import "./Post.css"

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlined} title="Like" color="gray" />
                <InputOption Icon={ShareOutlined} title="Like" color="gray" />
                <InputOption Icon={SendOutlined} title="Like" color="gray" />

            </div>
        </div>
    )
}

export default Post
