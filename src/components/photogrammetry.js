import "./photogrammetry.css"
import "./gaussian.css"
import GaussianViewer from "./gaussian"
import hondaSplat from "../assets/PrincesSt.splat"


export default function Photogrammetry() {
    return (
        <div id="photogrammetryContainer">
            <div id="gaussianViewerContainer">
                <GaussianViewer source={hondaSplat} />
            </div>
            <div id="photogrammetry">
                <h1>3D modeling & Photogrammetry</h1>
                <p>
                
                </p>
            </div>
        </div>
    )
}
