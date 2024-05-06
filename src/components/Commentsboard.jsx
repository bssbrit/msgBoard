import Comment from "./Comment"
const Commentsboard = ({comments}) => {

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}  />
      ))}
    </div>
  )
}

export default Commentsboard
