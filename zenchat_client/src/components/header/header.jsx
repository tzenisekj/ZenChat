import "./header.css"
import { Search } from '@material-ui/icons'

export default function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="header-left">
                <span className="header-logo">Zenchat</span>
            </div>
            <div className="header-center">
                <Search />
                <input placeholder="Search for person or post..." className="header-search"/>
            </div>
            <div className="header-right">
                <div className="header-links">
                    
                </div>
            </div>
        </div>
    </header>
  )
}
