import "./share.css"
import { PermMedia, Label, Room, Mood } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="feed-share">
        <div className="feed-share-top">
            <img src="" alt="" className="feed-share-profile-img" />
            <input placeholder="What's on your mind?" className="feed-share-input" />
        </div>
        <hr className="feed-share-hr" />
        <div className="feed-share-bottom">
            <div className="feed-share-options">
                <div className="feed-share-option">
                    <PermMedia htmlColor="tomato" className="feed-share-option-icon" />
                    <span className="feed-share-option-text">Photo/Video</span>
                </div>
                <div className="feed-share-option">
                    <Label htmlColor="blue" className="feed-share-option-icon" />
                    <span className="feed-share-option-text">Tag</span>
                </div>
                <div className="feed-share-option">
                    <Room htmlColor="green" className="feed-share-option-icon" />
                    <span className="feed-share-option-text">Location</span>
                </div>
                <div className="feed-share-option">
                    <Mood htmlColor="goldenrod" className="feed-share-option-icon" />
                    <span className="feed-share-option-text">Feelings</span>
                </div>
            </div>
            <button className="feed-share-btn">Share</button>
        </div>
    </div>
  )
}
