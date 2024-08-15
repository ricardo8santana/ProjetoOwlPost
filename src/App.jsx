// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"

// function App() {
//     return(
//         <>
//             <Header/>
//             <Food/>
//             <Footer/>
//         </>
//     )   
// }

// export default App

// import Card from "./Card";

// function App () {
//     return(
//         <Card/>
//     )
// }

// export default App;

import Navbar from "./Header/Navbar";
import CarroselHome from "../Carousel/Carrosel";
import './App.css';

function App () {
    return(
        <>
        <Navbar/>
        <div className="home">
            <CarroselHome/>
            <div>
                <p>teste</p>
                <p>teste</p>
            </div>
        </div>
        </>
    )
}

export default App;