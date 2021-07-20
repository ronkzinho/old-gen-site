import type { NextApiRequest, NextApiResponse } from "next";
import gens from "../../../public/generators.json";
import crypto from "crypto";

interface IGenerator extends Generator {}

export class Generator implements IGenerator {
    source?: string;
    sha256sum: string;
    name: string;
    url: string;
    description?: string;
    constructor({ sha256sum, name, url, description }: IGenerator) {
        this.sha256sum = sha256sum;
        this.name = name;
        this.url = url;
        this.description = description;
        this.source = `https://replit.com/@AndyNovo/${this.name}`;
    }
}

export const generators: Generator[] = gens.generators.map(
    (gen) => new Generator(gen)
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        generators.reduce(
            (obj, gen) => Object.assign(obj, { [gen.name]: gen.url }),
            {}
        )
    );
}
