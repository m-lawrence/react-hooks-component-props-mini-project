import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const postsArr = blogData.posts.map(post => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
        )
    })
    return (
        <main>
            {postsArr}
        </main>
    )
}

export default ArticleList;