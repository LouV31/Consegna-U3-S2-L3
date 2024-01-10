const SubHeader = (props) => {
    return (
        <section>
            <div className="d-flex align-items-center px-2 mb-3">
                <div className="me-4">
                    <h2 className="h1">{props.titlePage}</h2>
                </div>
                <div className="flex-grow-1">
                    <div className="dropdown d-flexjustify-content-between d-none d-sm-block">
                        <button
                            className="bg-black dropdown-toggle text-white border border-2 border-light-subtle px-3 py-1"
                            type="button"
                            databstoggle="dropdown"
                            ariaexpanded="false"
                        >
                            Genres
                        </button>
                        <ul className="dropdown-menu bg-black text-white">
                            <li>
                                <a className="dropdown-item text-white" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item text-white" href="#">
                                    Gossip
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item text-white" href="#">
                                    Thriller
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-sm-flex">
                    <button className="bg-dark border text-white px-2 py-1 d-flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="15"
                            fill="currentColor"
                            className="bi bi-text-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    </button>
                    <button className="bg-dark border text-white px-2 py-1 d-flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="15"
                            fill="currentColor"
                            className="bi bi-grid"
                            viewBox="0 0 16 16"
                        >
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default SubHeader;
