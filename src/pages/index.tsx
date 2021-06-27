import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { GeneratorComponent } from "../components/generator";
import { generators } from "./api/generators";

export default function Home() {
    const [showGenerators, setSG] = useState(false);
    const [focused, setFocused] = useState("");

    return (
        <div>
            <p style={{ fontSize: "28px", marginBottom: 0 }}>
                Hey, how are you doing?
            </p>
            <br />
            <p style={{ fontSize: "28px", marginTop: 0, padding: 0 }}>
                So I made this for make my life easier but now I just want to
                help for those who want to run old FSG generators locally
            </p>
            <button onClick={() => setSG(!showGenerators)}>
                {showGenerators ? "Hide" : "Show"} generators
            </button>
            {showGenerators && (
                <div className="generators">
                    {generators.map((gen) => (
                        <GeneratorComponent
                            key={gen.name}
                            generator={gen}
                            focused={focused === gen.name}
                            setFocused={setFocused}
                            currentFocus={focused}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
