import { useState } from "react"

const NewComment = ({commentData}) => {
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      content: content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: commentData.currentUser.username,
      replies: [], 
    } 
    fetch('YOUR_ENDPOINT_HERE',{
        method: 'POST',
        header: { "Content-Type": "application/json"},
        body: JSON.stringify(comment)
    }).then(() => {
        console.log("Comment made")
    }).catch((error) => {
        console.log(error)
    });
   }

  return (
    <div>
      <img src={commentData.currentUser.image.png} />
      <form onSubmit= {handleSubmit}>
            <textarea
            required
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Send</button>
      </form>
    
    </div>
  )
}

export default NewComment
