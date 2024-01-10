import { useNavigate, useParams } from "react-router-dom";
import Gallery from "./Components/Gallery";
import { useEffect } from "react";
import SubHeader from "./Components/SubHeader";

const TvShows = () => {
    const navigate = useNavigate();
    console.log(navigate);

    useEffect(() => {
        navigate("/Tv-Shows");
    }, []);
    return (
        <>
            <SubHeader titlePage="Tv Shows" />
            <main className="px-2 mb-5">
                <Gallery searchQ="New" type="series" className="px-2" />
                <Gallery searchQ="break" type="series" className="px-2" />
            </main>
        </>
    );
};
export default TvShows;
