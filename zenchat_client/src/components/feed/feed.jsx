import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"

export default function Feed() {
  return (
    <div className="feed-container">
      <Share />
      <Post />
    </div>
  )
}
