import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
        <div className="post-container">
        <div className="post-top">
            <div className="post-top-left">
                <img src="" alt="" className="post-profile-img" />
                <span className="post-username">Fill Fill</span>
                <span className="post-date">5 min ago</span>
            </div>
            <div className="post-top-right">
                <MoreVert />
            </div>
        </div>
        <div className="post-center">
            <span className="post-text">Post Text</span>
            <img src="" alt="" className="post-img" />
        </div>
        <div className="post-bottom">
            <div className="post-bottom-left">
                <Favorite htmlColor="red" className="post-icon" />
                <ThumbUp htmlColor="blue" classname="post-icon" />
                <span className="post-like-counter">0 Likes</span>
            </div>
            <div className="post-bottom-right">
                <span className="post-comment-counter">0 Comments</span>
            </div>
        </div>
        </div>
    </div>
  )
}
