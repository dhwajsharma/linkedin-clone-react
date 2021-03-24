import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import "./Widgets.css"

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">

            <div className="widgets_articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_banner">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("A hiring binge in IT is coming.", "Top news - 2000 readers")}
            {newsArticle("Second wave hits hiring speed.", "Top news - 1890 readers")}

        </div>

    )
}

export default Widgets
