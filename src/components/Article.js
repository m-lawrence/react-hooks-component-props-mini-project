import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    const minFives = Math.ceil(minutes/5)*5;
    const coffNum = minFives / 5
    const coffees = "☕" 
    const minTens = Math.ceil(minutes/10)*10;
    const bentoNum = minTens / 10
    const bento = "🍱"

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {minutes < 30 ? coffees.repeat(coffNum) : bento.repeat(bentoNum)} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;