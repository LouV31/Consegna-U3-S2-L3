import { useEffect, useState } from "react";

const CommentedArea = (props) => {
    const [comments, setComments] = useState([]);
    console.log(comments);
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${props.movieImdb}`;
    const fetchComment = async () => {
        try {
            let response = await fetch(URL, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                let comments = await response.json();
                setComments(comments);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchComment();
    }, []);
    return (
        <>
            {comments.map((comment) => {
                return <p>{comment.comment}</p>;
            })}
        </>
    );
};
export default CommentedArea;
