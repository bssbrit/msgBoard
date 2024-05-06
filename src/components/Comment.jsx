
const Comment = ({comment}) => {

return (
    <div className="comment">
      <div>
      <div>
       <button>+</button>
       <p>{comment.score}</p>
       <button>-</button>
      </div>
      <div>
        <div>
          <img src={comment.user.image.png} alt={comment.user.username}/>
          <p>{comment.user.username}</p>
          <p>{comment.createdAt}</p>
          <button><img src="../../images\icon-reply.svg" alt="" />Reply</button>
        </div>
        <div>{comment.content}</div>
      </div>
      </div>
     <div className="commentreply">
     {comment.replies && comment.replies.map((reply, index) => (
          <Comment key={index} comment={reply} />
        ))}
     </div>
      
    </div>
  )
}

export default Comment
