import React, { useState } from "react";
import { Generator } from "../pages/api/generators";

export const GeneratorComponent: React.FC<{
    generator: Generator;
    focused: boolean;
    setFocused: (value: string) => any;
    currentFocus: string;
}> = ({ generator: gen, focused, setFocused, currentFocus }) => {
    const focusable = currentFocus === "";
    return (
        <div
            className="generator"
            style={
                focused
                    ? {
                          position: "absolute",
                          width: "750px",
                          height: "500px",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          margin: "auto",
                          fontSize: "32px",
                      }
                    : { cursor: focusable ? "pointer" : "auto" }
            }
            onClick={() => currentFocus === "" && setFocused(gen.name)}
            key={gen.name}
        >
            {focused && (
                <span
                    style={{
                        position: "absolute",
                        top: -1,
                        left: "96.5%",
                        color: "red",
                        background: "none",
                        border: "none",
                        fontSize: "28px",
                        cursor: "pointer",
                    }}
                    onClick={() => setFocused("")}
                >
                    X
                </span>
            )}
            <h1>{gen.name}</h1>
            {focused && (
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "90%",
                            width: "100%",
                            overflowY: "hidden",
                            fontSize: "32px",
                            padding: 0,
                            marginBottom: 0,
                        }}
                    >
                        <p>{gen.description}</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <a
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: 0,
                                marginBottom: "20px",
                            }}
                            href={gen.source}
                        >
                            Source code
                        </a>
                        <a
                            style={{
                                color: "white",
                                textDecoration: "none",
                                padding: 0,
                            }}
                            href={gen.url}
                        >
                            Download it
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
