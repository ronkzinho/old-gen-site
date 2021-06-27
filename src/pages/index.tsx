import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { GeneratorComponent } from "../components/generator";
import { generators } from "./api/generators";

export default function Home() {
    const [showGenerators, setSG] = useState(false);

    return (
        <div>
            <p style={{ fontSize: "28px" }}>
                Hey, how are you doing? So I made this for make my life easier
                but now I just want to help for those who want to run old FSG
                generators locally
            </p>
            <button onClick={() => setSG(!showGenerators)}>
                {showGenerators ? "Hide" : "Show"} generators
            </button>
            {showGenerators && (
                <div className="generators">
                    {generators.map((gen) => (
                        <GeneratorComponent generator={gen} />
                    ))}
                </div>
            )}
        </div>
    );
}
