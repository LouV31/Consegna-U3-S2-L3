import { useNavigate, useParams } from "react-router-dom";
import Gallery from "./Components/Gallery";
import { useEffect } from "react";

const TvShows = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const params = useParams();

    useEffect(() => {
        navigate("/Tv-Shows");
    }, []);
    return (
        <main className="px-2 mb-5">
            <Gallery searchQ="New" type="series" className="px-2" />
            <Gallery searchQ="break" type="series" className="px-2" />
        </main>
    );
};
export default TvShows;
