import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import './LoadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className='loading-screen-container'>
            <FontAwesomeIcon className='loading-screen-icon' icon={faCircleNotch} spin />
        </div>
    );
};

export default LoadingScreen;