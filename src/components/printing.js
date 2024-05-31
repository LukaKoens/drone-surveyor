import "./printing.css"
import GaussianViewer from "./gaussian"
import PrinterSplat from "../assets/Printer.splat"


export default function Printing() {

    const defaultViewMatrix = [0,0,1,0,0,1,0,0,1,0,0,0,0,0.85,0,1];


    return (
        <div id="contentContainer">
            <div id="gaussianViewerContainer">
                <GaussianViewer source={PrinterSplat} />
            </div>
            <div id="content">
                <h1>3D Printing & Modeling</h1>
                <p>
                    I have been teaching myself the usage and concepts needed for 3d Printing over the last couple years, 
                    having printed everything from Architectural models to a car spoiler and composite molds.
                </p>
                <p>
                    Modeled is my Ender 3 Pro which is somehow still running along with a couple of objects I have printed, 
                    including 2 carbon fibre parts which used 3d printed molds.
                </p>
                <p>
                    To accompany my 3D printing, I have also been teaching myself how to use CAD software namely freeCAD,
                    along with the slicing software needed to translate this into a print file.
                </p>
                <p>
                    During my time at Scion I was introduced to 3D gaussians, which is whats being used to display my model.
                    These 3d Models can be used to create printable objects which I succesfully did at Scion.
                </p>
            </div>
        </div>
    )
}
