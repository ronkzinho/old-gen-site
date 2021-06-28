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
        "village, ruined portals with good loot, classic FSG nether, blind travel to deep ocean stronghold"
    ),
    new Generator(
        "filteredseed",
        "https://drive.google.com/uc?export=download&id=1mpWw28TCCJixqdnx_iFcPq0G5qxuttnj",
        "The classic filter: village or shipwreck, ruined portal, bastion in pos/pos, fortress in pos/neg or neg/pos blind travel from the fortress quadrant at +/-150,-/+150"
    ),
    new Generator(
        "fsg-power-village-minus-minus",
        "https://drive.google.com/uc?export=download&id=1hzBE_BkU_3vnAYUW7XniM-NP2DwUu3G4",
        "Village only, ruined portal loot has 3 iron, and a lighter no desert / snowy tundra villages"
    ),
    new Generator(
        "filteredvillage",
        "https://drive.google.com/uc?export=download&id=1yU37zZVmPc56CKbEW4NuNwxGXI6CCKaT",
        "Classic but only village"
    ),
    new Generator(
        "filteredshipwreck",
        "https://drive.google.com/uc?export=download&id=1LwnfHg3BAOiYKw7nxRWwU9UEfyq4FAE1",
        "Classic but only shipwreck"
    ),
    new Generator(
        "fsg-power-ship",
        "https://drive.google.com/uc?export=download&id=1xmTpoow6ODuhGo6NwqZwdoW_jI09uPwo",
        "Shipwrecks, magma ravines, ruined portals with good loot, classic FSG nether, blind travel to ocean stronghold"
    ),
    new Generator(
        "ruined-portal-loot",
        "https://drive.google.com/uc?export=download&id=1K_YdBUfr2ANdLVfTABV-CE_MIb4k3_Xv",
        "Coinflip shipwreck/village with ruined portal loot having a fitness function (typically 3 iron and a lighter), blind travel from either -150,150 or 150,-150"
    ),
    new Generator(
        "fsg-power-village",
        "https://drive.google.com/uc?export=download&id=1WfqcGt2vzeQANJGJefCRkYkBhfgK8vHW",
        "village, ruined portals with good loot, classic FSG nether, blind travel to stronghold"
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
