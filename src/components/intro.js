import "./intro.css"
import backgroundVideo from "../assets/DJI_0161.MP4";

export default function Intro() {

    return (
        <div id="introContainer">
            <div id="title">
                <h1>Drone Surveyor <h2>Inc</h2></h1>
            </div>
            <video id='background' autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
        </div>
    );
}

