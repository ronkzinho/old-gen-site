import Head from "next/head";
import { useEffect, useState } from "react";
import { GeneratorComponent } from "../components/generator";
import { Search } from "../components/search";
import { generators } from "./api/generators";

export default function Home() {
    const [showGenerators, setSG] = useState(false);
    const [focused, setFocused] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    useEffect(() => {
        if (focused !== "") document.body.style.overflowY = "visible";
        else document.body.style.overflowY = "scroll";
    }, [focused]);

    const handleKeyDown = (key: KeyboardEvent) => {
        if (key.code === "Escape") closeGen();
    };

    const closeGen = () => {
        setFocused("");
    };

    return (
        <>
            <Head>
                <title>Old Gen Optimizer</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div style={{ filter: focused ? "blur(10px)" : "none" }}>
                    <div className="header">
                        <h1>Run old FSG generators with or without the <a href="https://github.com/ronkzinho/oldgenoptimizer/releases/latest/">macro</a></h1>
                        <button className="showGens" onClick={() => setSG(!showGenerators)}>
                            {showGenerators ? "Hide" : "Show"} generators
                        </button>
                    </div>
                    <div
                        className="searchWrapper"
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            visibility: showGenerators ? "visible" : "hidden", opacity: showGenerators ? "1" : 0
                        }}
                    >
                        <Search search={search} setSearch={setSearch} />
                    </div>
                </div>
                <div style={{ visibility: showGenerators ? "visible" : "hidden", opacity: showGenerators ? "1" : 0 }} className="generators">
                    {generators
                        .filter(
                            (gen) =>
                                gen.name
                                    .slice(0, search.length)
                                    .toLocaleLowerCase() ===
                                search.toLocaleLowerCase() && gen.visible != false
                        )
                        .sort((a, b) =>
                            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                        )
                        .sort((a, b) =>
                            a.verifiable === false
                                ? 1
                                : b.verifiable === false
                                ? -1
                                : 0
                        )
                        .map((gen) => (
                            <GeneratorComponent
                                key={gen.name}
                                generator={gen}
                                focused={focused === gen.name}
                                setFocused={setFocused}
                                currentFocus={focused}
                                closeGen={closeGen}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
