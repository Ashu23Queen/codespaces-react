import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"


export default function Settings(){
    return (
       <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="thumbnail.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </label>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Email</label>
                <input type="email" placeholder="safak@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
       </div>
    )
}