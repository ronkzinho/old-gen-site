import type { NextApiRequest, NextApiResponse } from "next";
import gens from "../../../public/generators.json";

interface IGenerator extends Generator {}

export class Generator implements IGenerator {
  source?: string | null;
  sha256sum?: string;
  name: string;
  url?: string;
  description?: string;
  verifiable?: boolean;
  visible?: boolean;
  isGroup?: boolean;
  constructor({
    sha256sum,
    name,
    url,
    description,
    verifiable,
    source,
    visible,
    isGroup,
  }: IGenerator) {
    this.sha256sum = sha256sum;
    this.name = name;
    this.url = url;
    this.description = description;
    this.source =
      source === null
        ? null
        : source || `https://replit.com/@AndyNovo/${this.name}`;
    this.verifiable = verifiable !== null ? verifiable : true;
    this.visible = visible !== null ? visible : true;
    this.isGroup = isGroup !== null ? isGroup : false;
  }
}

export const generators: Generator[] = gens.generators.map(
  (gen) => new Generator(gen)
);

const wbGens = generators.filter((gen) => gen.name.includes("-without-blind"));
console.log(wbGens);
const randomWbGen = wbGens[Math.floor(Math.random() * wbGens.length)];

generators.push(
  new Generator({
    name: "+without-blind",
    description: `add a without-blind sufix to any generator that filters a stronghold.~\nExample: ${randomWbGen.name.replace(
      "-without-blind",
      ""
    )} -> ${randomWbGen.name}`,
    verifiable: false,
    isGroup: true,
  })
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json(
      generators.reduce(
        (obj, gen) => Object.assign(obj, { [gen.name]: gen.url }),
        {}
      )
    );
}
