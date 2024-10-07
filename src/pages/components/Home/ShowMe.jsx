
function ShowMe() {
    return (
        <>
            <div className="showme mx-1 shadow row gap-5 justify-content-center text-center">
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div>
                                <img src="/images/icons/google.png" alt="Icon" />
                                <h5>Google</h5>
                                <p>Verified as Film Maker</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src="/images/icons/youtube.png" alt="Icon" />
                                <h5>Youtube</h5>
                                <p>Recognized as Artist</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src="/images/icons/spotify.png" alt="Icon" />
                                <h5>Spotify</h5>
                                <p>Verified as Artist</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ShowMe;
