import React, { FC } from 'react';

interface User {
    id: number;
    name: string
}

interface Comment {
    user: User,
    content: string,
    comments?: Comment[]
}

interface Props {
    className?: string,
    comment: Comment
}

const Comment: FC<Props> = ({ comment, className }) => {
    const [cmt, setCmt] = React.useState<Comment>(comment)
    const [textArea, setTextArea] = React.useState<boolean>(false)
    const [edit, setEdit] = React.useState<boolean>(false)
    const [newCmt, setNewCmt] = React.useState<Comment | null>(null)
    const [newEdit, setNewEdit] = React.useState<string>('')
    const handleReply = () => {
        setTextArea(!textArea)
    }
    const handleUpdateReply = (e: React.FormEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        const value = e.currentTarget.value;
        if (!value) {
            setNewCmt(null)
            return;
        }
        const newCmnt = {
            user: {
                name: 'You',
                id: 99
            },
            id: 99,
            content: value,
            comments: []
        }
        setNewCmt(newCmnt)
    }
    const handleAddReply = () => {
        if (!newCmt) {
            return;
        }
        let newComments = cmt.comments;
        newComments?.push(newCmt)

        // close textarea
        handleReply()
    }
    const handleEdit = () => {
        setNewEdit(cmt.content)
        setEdit(!edit)
    }
    const handleAddEdit = () => {
        if (!newEdit) {
            return;
        }
        setCmt(prev => ({
            ...prev,
            content: newEdit
        }))
        // close textarea
        handleEdit()
    }
    const handleUpdateEdit = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        setNewEdit(value)
    }
    const handleDelete = () => {
        setCmt(prev => ({
            ...prev,
            content: '[deleted]'
        }))
    }
    const checkDeleted = (w: string) => {
        if (w.includes('[deleted]')) return true;
        return false
    }
    return (
        <div className='flex flex-1 flex-col'>
            <div className={`${className} flex flex-col flex-1 w-full border-2 shadow-lg rounded-lg p-2`}>
                <h1 className='font-bold text-sm sm:text-base'>{cmt.user.name}</h1>
                {/* content or text area for edit */}
                {edit ?
                    <div className='flex flex-col flex-1 w-full p-2 mb-2 text-xs sm:text-sm'>
                        <textarea value={newEdit} className='p-2' rows={6} cols={50}
                            onChange={handleUpdateEdit}
                        />
                        <div className='flex flex-1 flex-row justify-end mt-2'>
                            <button className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 mr-[1rem]' onClick={handleEdit}>Cancel</button>
                            <button disabled={newEdit ? false : true} className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 disabled:opacity-50' onClick={handleAddEdit}>Save Edits</button>
                        </div>
                    </div>
                    :
                    <>
                        <p className='text-xs sm:text-sm'>{cmt.content}</p>
                        {
                            !checkDeleted(cmt.content) &&
                            <div className='flex flex-row mt-2 text-xs sm:text-sm'>
                                <button className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 mr-[1rem]' onClick={handleReply}>Reply</button>
                                <button className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 mr-[1rem]' onClick={handleEdit}>Edit</button>
                                <button className='border-2 border-black rounded-lg bg-green-300 px-4 py-1' onClick={handleDelete}>Delete</button>
                            </div>
                        }
                    </>
                }

            </div>
            {/* Action section */}
            <div className='flex flex-col mt-2 ml-[2rem]' >
                {/* Text box */}
                {textArea &&
                    <div className='flex flex-col flex-1 w-full border-2 shadow-lg rounded-lg p-2 mb-2 text-xs sm:text-sm'>
                        <textarea className='p-2' rows={6} cols={50} placeholder="What are your thoughts?"
                            onChange={handleUpdateReply}
                        />
                        {/* buttons */}
                        <div className='flex flex-1 flex-row justify-end mt-2'>
                            <button className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 mr-[1rem]' onClick={handleReply}>Cancel</button>
                            <button disabled={newCmt ? false : true} className='border-2 border-black rounded-lg bg-green-300 px-4 py-1 disabled:opacity-50' onClick={handleAddReply}>Reply</button>
                        </div>
                    </div>
                }
                {/* child comments */}
                {cmt?.comments && cmt?.comments.map((c, idx) => (
                    <Comment comment={c} key={idx} />
                ))
                }
            </div>
        </div>
    );
}

export default Comment;
