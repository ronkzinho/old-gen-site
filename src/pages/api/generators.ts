import type { NextApiRequest, NextApiResponse } from "next";
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

export const generators: Generator[] = [
    new Generator({
        sha256sum:
            "f437e2c605e6952b62b111005989f112e521071d51447bec3fd2cc7d91142d36",
        name: "fsg-power-village-plusplus",
        url: "https://drive.google.com/uc?export=download&id=1vcJPJhuT11jfJreKElmQL7PdfJIZ3Lv2",
        description:
            "village, ruined portals with good loot, classic FSG nether, blind travel to deep ocean stronghold",
    }),
    new Generator({
        sha256sum:
            "daca012eb02c5fa1178c114595058fa5f038ab099eeca29fb126276aca1bd345",
        name: "filteredseed",
        url: "https://drive.google.com/uc?export=download&id=1mpWw28TCCJixqdnx_iFcPq0G5qxuttnj",
        description:
            "The classic filter: village or shipwreck, ruined portal, bastion in pos/pos, fortress in pos/neg or neg/pos blind travel from the fortress quadrant at +/-150,-/+150",
    }),
    new Generator({
        sha256sum:
            "6c07056fc6d1c42e02b9daa586a4a8355cb204f79afd283d090bbe36d01d4df5",
        name: "fsg-power-village-minus-minus",
        url: "https://drive.google.com/uc?export=download&id=1hzBE_BkU_3vnAYUW7XniM-NP2DwUu3G4",
        description:
            "Village only, ruined portal loot has 3 iron, and a lighter no desert / snowy tundra villages",
    }),
    new Generator({
        sha256sum:
            "fc641dad7d8fec3d0ad10859a63867549ba17d218643720f2bcb1c8fdbf8f585",
        name: "filteredvillage",
        url: "https://drive.google.com/uc?export=download&id=1yU37zZVmPc56CKbEW4NuNwxGXI6CCKaT",
        description: "Classic but only village",
    }),
    new Generator({
        sha256sum:
            "2b4ca190e7db5d29f37c9cb406fb7101d67551ee3171ae5f368558c8a0037c31",
        name: "filteredshipwreck",
        url: "https://drive.google.com/uc?export=download&id=1LwnfHg3BAOiYKw7nxRWwU9UEfyq4FAE1",
        description: "Classic but only shipwreck",
    }),
    new Generator({
        sha256sum:
            "5fffce98076a27d152a322cdbda8f51555131479292677d3e97eb53342a6539b",
        name: "fsg-power-ship",
        url: "https://drive.google.com/uc?export=download&id=1xmTpoow6ODuhGo6NwqZwdoW_jI09uPwo",
        description:
            "Shipwrecks, magma ravines, ruined portals with good loot, classic FSG nether, blind travel to ocean stronghold",
    }),
    new Generator({
        sha256sum:
            "c8cd6b9da1cbadc7044d7c00955ff7f8c4899b1633bc0dee1397e9f186bd12cd",
        name: "ruined-portal-loot",
        url: "https://drive.google.com/uc?export=download&id=1K_YdBUfr2ANdLVfTABV-CE_MIb4k3_Xv",
        description:
            "Coinflip shipwreck/village with ruined portal loot having a fitness function (typically 3 iron and a lighter), blind travel from either -150,150 or 150,-150",
    }),
    new Generator({
        sha256sum:
            "e9970f1217087bc3da1b60b034264469137a2b20a7c07cbba5489e5090d09b8b",
        name: "fsg-power-village",
        url: "https://drive.google.com/uc?export=download&id=1WfqcGt2vzeQANJGJefCRkYkBhfgK8vHW",
        description:
            "village, ruined portals with good loot, classic FSG nether, blind travel to stronghold",
    }),
    new Generator({
        sha256sum:
            "d3739ce09a00d6b10275a8d2ccf0a2bdd5850cac1bc320cfa43c59c6e9faa84c",
        name: "filteredseed-jungle",
        url: "https://drive.google.com/uc?export=download&id=1ylj6vnCvSfm-JkGG0FcFfK9DG5lNjuxe",
        description:
            "Classic FSG but the main structure is a jungle temple, still ruined portal",
    }),
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        generators.reduce(
            (obj, gen) => Object.assign(obj, { [gen.name]: gen.url }),
            {}
        )
    );
}
