import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from '../InputOption/InputOption'
import { CalendarViewDay, EventNote, Subscriptions, Image } from '@material-ui/icons'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Photo" color="#7FC15E" />

                </div>
            </div>
        </div>
    )
}

export default Feed
