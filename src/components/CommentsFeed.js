import {useState} from "react";
import TopicPost from "./TopicPost";
import NewCommentForm from "./NewCommentForm";

export default function CommentsFeed({comments}) {
  const [innerComments, setInnerComments] = useState(comments);


  return (
    <div>
      <NewCommentForm onSubmit={(newComment) => {
        setInnerComments((previousComments) => [newComment, ...previousComments])
      }} />
      {innerComments.map(({commenter, comment, timestamp}) => (
          <TopicPost key={`${commenter}_${comment}`} commenter={commenter} comment={comment} timestamp={timestamp}/>
        ))}
    </div>
  );
}
