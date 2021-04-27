import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    const minFives = Math.ceil(minutes/5)*5;
    const coffNum = minFives / 5
    const coffees = "☕" 

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {coffees.repeat(coffNum)} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;