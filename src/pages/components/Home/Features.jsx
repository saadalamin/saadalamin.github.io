
function Features() {
    return (
        <>
            <div className="features shadow row gap-5 justify-content-center text-center">
                <section className="col-11 col-md-3">
                    <img src="/images/icons/fa-solid-award.png" alt="Experience" />
                    <h5>{new Date().getFullYear() - new Date("2018").getFullYear()}+ Years Experience</h5>
                    <p>
                        Founded Muktir Ghonta, Videophics. Worked as a Campus Ambassador at DMFF.
                    </p>
                </section>
                <section className="col-11 col-md-3">
                    <img src="/images/icons/award-star.png" alt="Acheivemnet" />
                    <h5>Top Six Finalist</h5>
                    <p>
                        Glocal Teen Hero Top Six Finalist 2022, Best Designer Award by Elan
                        Records.
                    </p>
                </section>
                <section className="col-11 col-md-3">
                    <img src="/images/icons/verified.png" alt="Verification" />
                    <h5>Google Verified</h5>
                    <p>
                        He is verified by Google as a film-maker, musical artist and graphic
                        designer.
                    </p>
                </section>
            </div>
            <br></br>
        </>
    );
}

export default Features;
