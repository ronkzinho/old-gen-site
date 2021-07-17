import React, { useState } from "react";
import { Generator } from "../pages/api/generators";

export const GeneratorComponent: React.FC<{
    generator: Generator;
    focused: boolean;
    setFocused: (value: string) => any;
    currentFocus: string;
    closeGen: () => any;
}> = ({ generator: gen, focused, setFocused, currentFocus, closeGen }) => {
    const focusable = currentFocus === "";

    return (
        <div
            className="generatorContainer"
            style={
                focused
                    ? {
                          position: "fixed",
                          width: "750px",
                          height: "500px",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          margin: "auto",
                          fontSize: "32px",
                          zIndex: 100,
                      }
                    : {
                          cursor: focusable ? "pointer" : "auto",
                          filter: currentFocus !== "" ? "blur(10px)" : "none",
                      }
            }
            onClick={() => currentFocus === "" && setFocused(gen.name)}
            key={gen.name}
        >
            <div
                className="generator"
                style={{
                    width: "100%",
                    height: "100%",
                    backdropFilter: focused ? "brightness(.5)" : "none",
                }}
            >
                {focused && (
                    <div onClick={closeGen} className="closeWrapper">
                        <a className="close"></a>
                    </div>
                )}
                <div style={{ zIndex: focused ? 101 : "auto" }}>
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
            </div>
        </div>
    );
};
