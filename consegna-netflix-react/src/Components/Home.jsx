import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import { useEffect } from "react";

const Home = () => {
    return (
        <main className="px-2 mb-5">
            <Gallery searchQ="Batman" className="px-2" />
            <Gallery searchQ="Harry%20Potter" className="px-2" />
            <Gallery searchQ="Lord%20of%20the%20Rings" className="px-2" />
        </main>
    );
};
export default Home;
