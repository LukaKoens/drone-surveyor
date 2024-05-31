
import "./services.css"
import backgroundImage from "../assets/DJI_0078.JPG"

export default function Services() {

    return (
        <div id="servicesContainer">
            <div id="services">
                <h2>Products and Services</h2>
                <ul>
                    <li>- Commercial & Residential</li>
                    <li>- Roof Inspections</li>
                    <li>- Property Mapping and Photography</li>
                    <li>- Photogrametry & 3D modeling</li>
                    <li>- Automobile & Lifestyle Photography</li>
                </ul>
            </div>
            <img src={backgroundImage} alt="Background" />
        </div>
    );
}

