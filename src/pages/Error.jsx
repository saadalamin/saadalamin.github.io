
/* Components */
import Navbar from "./components/Navbar";

function Error() {
    return (
        <>
            <Navbar />
            <div
                className="position-absolute w-100 h-100 text-white d-flex justify-content-center align-items-center text-center"
                style={{
                    background: "#18191a",
                }}
            >
                <div>
                    <h2>404 Not Found</h2>
                    <p
                        style={{
                            color: "#ccc",
                            marginTop: "10px",
                        }}
                    >
                        The page you're looking for not found!
                    </p>
                </div>
            </div>
        </>
    );
}
export default Error;
