import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"

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

                </div>
            </div>
        </div>
    )
}

export default Feed
