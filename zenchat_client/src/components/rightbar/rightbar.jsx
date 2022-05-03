import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar-container">
      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-online-friend-list">
        <li className="rightbar-online-friend-list-item">
          <div className="rightbar-online-friend-img-container">
            <img src="" alt="" className="rightbar-online-friend-img" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-online-username">Fill Fill</span>
        </li>
      </ul>
    </div>
  )
}
