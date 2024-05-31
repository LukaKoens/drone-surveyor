
import "./inspections.css"
import backgroundImage from "../assets/DJI_0166.JPG"

export default function Inspections() {

    return (
        <div id="inspectionsContainer">
            <div id="inspections">
                <h2>Roof inspections</h2>
                <p>
                    In a fraction of the time that it'd take to organise and ensure safety for a convential roof access and insspection a drone can get high resolution imagery of the entire area,
                    especially usefull in large / complicated and or dangerous to access roofing and locations saving you time and money in making decisousions,
                    giving you valuable information to provide to contractors if repairs or mantinace are needed and saving any guess work.
                </p>
            </div>
            <img src={backgroundImage} alt="Background" />
        </div>
    );
}

