import React, { useState } from "react";
import { Generator } from "../pages/api/generators";

export const GeneratorComponent: React.FC<{ generator: Generator }> = ({
    generator: gen,
}) => {
    const [showMore, setSM] = useState(false);
    const [showMoreDescription, setSMD] = useState(false);
    return (
        <div
            className="generator"
            style={showMoreDescription ? { height: "500px" } : {}}
            key={gen.name}
        >
            <h1>{gen.name}</h1>
            {gen.description && (
                <span
                    style={{
                        cursor: "pointer",
                        color: "gray",
                        fontStyle: "italic",
                        marginBottom: 0,
                        paddingBottom: 0,
                    }}
                    onClick={() => setSM(!showMore)}
                >
                    show {showMore ? "less" : "more"}
                </span>
            )}
            {showMore && (
                <div
                    style={{
                        maxWidth: "225px",
                        overflowY: "hidden",
                    }}
                >
                    <p>{gen.description}</p>
                </div>
            )}
        </div>
    );
};
