import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
    const firstName = "Saber";

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
                <Card.Body>
                    <Image />
                    <Name />
                    <Price />
                    <Description />
                </Card.Body>
            </Card>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
                {firstName ? (
                    <>
                        <p>Bonjour, {firstName} !</p>
                        <img
                            src="./public/IdeaPad.jpg" // Ensure this path is correct
                            alt="Welcome"
                            style={{ width: "100px", borderRadius: "50%" }}
                        />
                    </>
                ) : (
                    <p>Bonjour !</p>
                )}
            </div>
        </div>
    );
};

export default App;