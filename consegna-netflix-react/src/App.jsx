import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./netflix_logo.png";
import avatar from "./avatar.png";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import SubHeader from "./Components/SubHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import TvShows from "./TvShows";
import MovieDetails from "./Components/MovieDetails";
import { useState } from "react";

function App() {
    /* const [movieImdb, setMovieImdb] = useState();
    const getMovieImdb = (movieImdb) => {
        setMovieImdb(movieImdb);
    }; */
    return (
        <div className="App ">
            <BrowserRouter>
                <Container fluid className="px-5 pb-5">
                    <NavBar avatar={avatar} logo={logo} />
                    <Routes>
                        <Route path="/" element={<Home /* getMovieImdb={getMovieImdb} */ />} />
                        <Route path="/Tv-Shows" element={<TvShows /* getMovieImdb={getMovieImdb} */ />}></Route>
                        <Route
                            path="/movie-details/:movieImdb"
                            element={<MovieDetails /* movieImdb={movieImdb}  */ />}
                        />
                    </Routes>
                    {/* <Home /> */}
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
