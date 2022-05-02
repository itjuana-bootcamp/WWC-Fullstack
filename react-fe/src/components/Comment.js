import React from 'react'
import { format } from 'date-fns'

import "../styles/comments.css"

const Comment = ({ comment, onEdit, onDelete }) => {

    return (
        <div className='comment-container'>
            <div className='date-container'>
            <strong>{ comment.updatedAt && format(new Date(comment.updatedAt), 'MMMM dd, yyyy') }</strong>
                <div>
                    <button className="comment-post-btn" onClick={ () => onEdit() }>
                        Edit
                    </button>
                    <button  className="comment-post-btn" onClick={ () => onDelete(comment._id) }>
                    X
                    </button>
                </div>
            </div>
            <h1>{ comment.author }</h1>
            <p>{ comment.comment }</p>
            <hr/>
        </div>
    )
}

export default Comment