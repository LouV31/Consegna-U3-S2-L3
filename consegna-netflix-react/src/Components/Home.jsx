import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import { useEffect } from "react";
import SubHeader from "./SubHeader";

const Home = (props) => {
    return (
        <>
            <SubHeader titlePage="Movies" />
            <main className="px-2 mb-5">
                <Gallery searchQ="Batman" className="px-2" /* getMovieImdb={props.getMovieImdb} */ />
                <Gallery searchQ="Harry%20Potter" className="px-2" /* getMovieImdb={props.getMovieImdb} */ />
                <Gallery searchQ="Lord%20of%20the%20Rings" className="px-2" /* getMovieImdb={props.getMovieImdb} */ />
            </main>
        </>
    );
};
export default Home;
