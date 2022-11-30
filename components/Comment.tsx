import React, { FC } from 'react';

interface User {
    id: number;
    name: string
}

interface Comment {
    user: User,
    content: string,
    comments: Comment[]
}

interface Props {
    className?: string,
    comment?: Comment
}

const Comment: FC<Props> = ({ comment, className }) => {
    return (
        <div className={`${className} `}>
            <h1 className='font-bold text-sm sm:text-base'>Dummy User</h1>
            <p className='text-sm sm:text-base'>Hello, world</p>
            <div className='flex flex-row'>
                <button className='border-2 rounded-lg bg-green-300 p-2'>Reply</button>
            </div>

        </div>
    );
}

export default Comment;
