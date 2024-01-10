import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";

const Gallery = (props) => {
    const [searchQ, setSearchQ] = useState(props.searchQ);
    const [type, setType] = useState(props.type);

    const [films, setFilms] = useState({ Search: [] });

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");
    const URL = type
        ? `http://www.omdbapi.com/?s=${searchQ}&type=${type}&apikey=438ff31f`
        : `http://www.omdbapi.com/?s=${searchQ}&apikey=438ff31f`;
    const filmsToDisplay = films.Search.slice(0, 6);

    const fetchFilms = async () => {
        setIsLoading(true);
        try {
            let response = await fetch(URL);
            if (response.ok) {
                let filmList = await response.json();
                console.log(filmList);
                setFilms(filmList);
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
        fetchFilms();
        console.log("TestFetch");
    }, []);

    return (
        <>
            <Container fluid={"xs"} className="px-0">
                <h4>
                    {!type ? searchQ.split("%20").join(" ") : "Tv Series"}
                    {isLoading && (
                        <span>
                            <Loading />
                        </span>
                    )}
                    {hasError && <Error message={errorMessage} />}
                </h4>

                <Row className="row row-cols-2 g-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 mb-5">
                    {filmsToDisplay.map((film, index) => (
                        <Col
                            key={`Film-${index}`}
                            className={
                                index === 5
                                    ? "d-none d-md-block d-lg-none d-xxl-block"
                                    : index === 4
                                    ? "d-none d-md-block d-lg-none d-xl-block"
                                    : index === 3
                                    ? "d-sm-none d-md-block"
                                    : ""
                            }
                        >
                            <img src={film.Poster} className="img-fluid" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};
export default Gallery;
