import "./sidebar.css"
import { DynamicFeed, Message, PlayCircleFilled, Group, Bookmark} from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        
        <ul className="sidebar-links-list">
          <li className="sidebar-links-list-item">
            <DynamicFeed className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-links-list-item">
            <Message className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-links-list-item">
            <PlayCircleFilled className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-links-list-item">
            <Group className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-links-list-item">
            <Bookmark className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
        </ul>

        <button className="sidebar-btn-show-more">Show More</button>
        <hr className="sidebar-hr" />

        <ul className="sidebar-friend-list">
          <li className="sidebar-friend-list-item">
              <img src="" alt="" className="sidebar-friend-img" />
              <span className="sidebar-friend-name">Fill Fill</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
