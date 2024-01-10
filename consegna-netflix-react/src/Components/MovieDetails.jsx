import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentedArea from "./CommentedArea";

const MovieDetails = (props) => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");
    const params = useParams();
    const URL = `http://www.omdbapi.com/?i=${params.movieImdb}&apikey=438ff31f`;

    const fetchMovieDetails = async () => {
        setIsLoading(true);

        try {
            let response = await fetch(URL);

            if (response.ok) {
                let filmDetailsObj = await response.json();
                console.log(filmDetailsObj);
                setFilmDetails(filmDetailsObj);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (error) {
            setHasError(true);

            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
        console.log("TestFetch");
        console.log(props.movieImdb);
    }, []);
    return (
        <Container>
            <Row className="justify-content-center">
                {filmDetails && (
                    <Col md={4}>
                        <div className="d-flex flex-column align-items-center">
                            <img src={filmDetails.Poster} alt="MoviePoster" style={{ minWidth: "420px" }} />
                            <h3 className="mt-2 border-bottom w-100 pb-1 fs-4 fw-normal d-flex justify-content-between">
                                <span>Title:</span>
                                <span className="fs-4 fw-bold ms-2">{filmDetails.Title}</span>
                            </h3>

                            <h3 className="mt-2 border-bottom w-100 pb-1 fs-4 fw-normal d-flex ">
                                <span className="flex-grow-1">Cast:</span>
                                <span className="fs-4 fw-bold ms-2 text-end">{filmDetails.Actors}</span>
                            </h3>
                            <h3 className="mt-2 border-bottom w-100 pb-1 fs-4 fw-normal d-flex justify-content-between">
                                <span>Released:</span>
                                <span className="fs-4 fw-bold ms-2">{filmDetails.Released}</span>
                            </h3>
                            <h5></h5>
                            <CommentedArea movieImdb={params.movieImdb} />
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
};
export default MovieDetails;
