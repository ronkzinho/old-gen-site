import type { NextApiRequest, NextApiResponse } from "next";

export class Generator {
    source: string;
    constructor(
        public name: string,
        public url: string,
        public description?: string
    ) {
        this.source = `https://replit.com/@AndyNovo/${this.name}`;
    }
}

export const generators: Generator[] = [
    new Generator(
        "fsg-power-village-plusplus",
        "https://drive.google.com/uc?export=download&id=1vcJPJhuT11jfJreKElmQL7PdfJIZ3Lv2",
        "Contains village and ruined portal on ++ direction of spawn, ruined portal chest contains " +
            "at least 3 iron and a light for the portal with bastion on ++ and fortress either -+ or +- " +
            "quadrant with 150 150 blind in fortress quadrant with ocean stronghold."
    ),
    new Generator(
        "filteredseed",
        "https://drive.google.com/uc?export=download&id=1mpWw28TCCJixqdnx_iFcPq0G5qxuttnj"
    ),
    new Generator(
        "fsg-power-village-minus-minus",
        "https://drive.google.com/uc?export=download&id=1hzBE_BkU_3vnAYUW7XniM-NP2DwUu3G4"
    ),
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        generators.reduce(
            (obj, gen) => Object.assign(obj, { [gen.name]: gen.url }),
            {}
        )
    );
}
