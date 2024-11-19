import { useState } from "react"

export default function BlogPosts() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const likeSubmitted = () => {
    setLikes(likes+1);
  };
  const commentSubmitted = () => {
    setComments(comments+1);
  };

  return (
    
    <div className="middle-container">
    <div className="blog">
    <img src="https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg"/>
    <div className="blog-container">
    <div className="blog-profile">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVgeCmtiJvNirYCYeLiG4Uj0Z8QnSE-3EUg&s"/>
     <div className="profile-text">
      <p>profile</p>
      <p>time</p>
      </div>
    </div>
    <h4>Lorem ipsum dummy</h4>
    <div className="likeandcomment">
    <button onClick={likeSubmitted}><i class="fa fa-heart-o" aria-hidden="true">&nbsp;{likes} Likes</i></button>
    <button onClick={commentSubmitted}><i class="fa fa-comment-o" aria-hidden="true">&nbsp;{comments} Comments</i></button>
    </div>
    </div>
    </div>
    </div>
  )
}
