import "./write.css"

export default function Write() {
    return(
        <div className="write">
            <img src="main-banner.jpg" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    {/* <input type="file" id="fileInput" /> */}
                    <input type="text" placeholder="Title" className="writeInput" autoFocus="{true}" />
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )    
}