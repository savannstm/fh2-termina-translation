import { copyFile, mkdir, readdir, rm } from "fs/promises";
import psd from "psd.js";
import { BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { join } from "path";
import { Decrypter } from "rpgm-assets-decrypter";

async function replaceAugustWhatBringsYouHereLine() {
    const fourthMapJSON = JSON.parse(await Bun.file("./output/data/Map004.json").text());
    const events = fourthMapJSON.events;

    for (const [ev, event] of events.entries()) {
        if (!event) {
            continue;
        }

        if (event.id === 224) {
            const page = event.pages[2];

            for (const [i, item] of page.list.entries()) {
                if (item.code !== 102) {
                    for (const [j, parameter] of item.parameters.entries()) {
                        if (parameter === "«Что привело тебя сюда?»") {
                            fourthMapJSON.events[ev].pages[2].list[i].parameters[j] = "«Что привело вас сюда?»";
                        }
                    }
                } else {
                    for (const [j, parameter] of item.parameters[0].entries()) {
                        if (parameter === "«Что привело тебя сюда?»") {
                            fourthMapJSON.events[ev].pages[2].list[i].parameters[0][j] = "«Что привело вас сюда?»";
                        }
                    }
                }
            }
        }
    }

    await Bun.write("./output/data/Map004.json", JSON.stringify(fourthMapJSON));
}

async function replaceMoonscorchedFemaleLines() {
    const enemiesJSON = JSON.parse(await Bun.file("./output/data/Enemies.json").text());

    for (const [i, object] of enemiesJSON.entries()) {
        if (!object) {
            continue;
        }

        if (object.id >= 121 && object.id <= 127) {
            enemiesJSON[i].name = enemiesJSON[i].name.replace("Опаленный луной", "Опаленная луной");
        }
    }

    await Bun.write("./output/data/Enemies.json", JSON.stringify(enemiesJSON));

    const troopsJSON = JSON.parse(await Bun.file("./output/data/Troops.json").text());

    for (const [i, object] of troopsJSON.entries()) {
        if (!object) {
            continue;
        }

        if (object.id === 34 || object.id === 35) {
            for (const [p, page] of object.pages.entries()) {
                for (const [l, item] of page.list.entries()) {
                    if (item.code !== 102) {
                        for (const [j, parameter] of item.parameters.entries()) {
                            if (typeof parameter !== "string") {
                                continue;
                            }

                            if (parameter === "\\>\\}\\i[373]ПАЛЕННЫЙ ЛУНОЙ\\{\\<") {
                                troopsJSON[i].pages[p].list[l].parameters[j] = "\\>\\}\\i[373]ПАЛЕННАЯ ЛУНОЙ\\{\\<";
                            } else if (parameter.includes("Обезумевший житель занят")) {
                                troopsJSON[i].pages[p].list[l].parameters[j] = parameter.replace(
                                    "Обезумевший житель занят",
                                    "Обезумевшая жительница занята"
                                );
                            } else if (parameter.includes("Обезумевший житель вонзает")) {
                                troopsJSON[i].pages[p].list[l].parameters[j] = parameter.replace(
                                    "Обезумевший житель вонзает",
                                    "Обезумевшая жительница вонзает"
                                );
                            }
                        }
                    } else {
                        for (const [j, parameter] of item.parameters[0].entries()) {
                            if (parameter === "\\>\\}\\i[373]ПАЛЕННЫЙ ЛУНОЙ\\{\\<") {
                                troopsJSON[i].pages[p].list[l].parameters[0][j] = "\\>\\}\\i[373]ПАЛЕННАЯ ЛУНОЙ\\{\\<";
                            }
                        }
                    }
                }
            }
        }
    }

    await Bun.write("./output/data/Troops.json", JSON.stringify(troopsJSON));
}

async function replaceVillagerFemaleLines() {
    const enemiesJSON = JSON.parse(await Bun.file("./output/data/Enemies.json").text());

    for (const [i, object] of enemiesJSON.entries()) {
        if (!object) {
            continue;
        }

        if (object.id >= 43 && object.id <= 49) {
            enemiesJSON[i].name = enemiesJSON[i].name.replace("Житель", "Жительница");
        }
    }

    await Bun.write("./output/data/Enemies.json", JSON.stringify(enemiesJSON));
    const troopsJSON = JSON.parse(await Bun.file("./output/data/Troops.json").text());

    for (const [i, object] of troopsJSON.entries()) {
        if (!object) {
            continue;
        }

        if (object.id === 234 || object.id === 8 || object.id === 12) {
            for (const [p, page] of object.pages.entries()) {
                for (const [l, item] of page.list.entries()) {
                    for (const [pr, parameter] of item.parameters.entries()) {
                        if (typeof parameter !== "string") {
                            continue;
                        }

                        if (parameter === "\\>\\}\\i[373]ИТЕЛЬ\\{\\<") {
                            troopsJSON[i].pages[p].list[l].parameters[pr] = "\\>\\}\\i[373]ИТЕЛЬНИЦА\\{\\<";
                        } else if (parameter.includes("Обезумевший житель занят")) {
                            troopsJSON[i].pages[p].list[l].parameters[pr] = parameter.replace(
                                "Обезумевший житель занят",
                                "Обезумевшая жительница занята"
                            );
                        } else if (parameter.includes("Обезумевший житель вонзает")) {
                            troopsJSON[i].pages[p].list[l].parameters[pr] = parameter.replace(
                                "Обезумевший житель вонзает",
                                "Обезумевшая жительница вонзает"
                            );
                        }
                    }
                }
            }
        }
    }

    await Bun.write("./output/data/Troops.json", JSON.stringify(troopsJSON));
}

async function replaceIncorrectNeedlesLosesBalanceLine() {
    const troopsJSON = JSON.parse(await Bun.file("./output/data/Troops.json").text());

    for (const [i, item] of troopsJSON[47].pages[10].list.entries()) {
        for (const [pr, parameter] of item.parameters.entries()) {
            if (parameter === "GabText Нидлз теряет равновесие.") {
                troopsJSON[47].pages[10].list[i].parameters[pr] = "GabText Измученный теряет равновесие.";
            }
        }
    }

    await Bun.write("./output/data/Troops.json", JSON.stringify(troopsJSON));
}

async function replaceLeviGodChoicesLines() {
    const map019JSON = JSON.parse(await Bun.file("./output/data/Map019.json").text());

    for (const [i, item] of map019JSON.events[224].pages[1].list.entries()) {
        if (item.code !== 102) {
            for (const [j, parameter] of item.parameters.entries()) {
                if (typeof parameter !== "string") {
                    continue;
                }

                switch (parameter) {
                    case "Гро-горот":
                        map019JSON.events[224].pages[1].list[i].parameters[j] = "Гро-гороту";
                        break;
                    case "Винушка":
                        map019JSON.events[224].pages[1].list[i].parameters[j] = "Винушке";
                        break;
                    case "Алл-мер":
                        map019JSON.events[224].pages[1].list[i].parameters[j] = "Алл-меру";
                        break;
                    case "Бог Луны":
                        map019JSON.events[224].pages[1].list[i].parameters[j] = "Богу Луны";
                        break;
                    case "Бог Страха и Голода":
                        map019JSON.events[224].pages[1].list[i].parameters[j] = "Богу Страха и Голода";
                        break;
                }
            }
        } else {
            for (const [j, parameter] of item.parameters[0].entries()) {
                switch (parameter) {
                    case "Гро-горот":
                        map019JSON.events[224].pages[1].list[i].parameters[0][j] = "Гро-гороту";
                        break;
                    case "Винушка":
                        map019JSON.events[224].pages[1].list[i].parameters[0][j] = "Винушке";
                        break;
                    case "Алл-мер":
                        map019JSON.events[224].pages[1].list[i].parameters[0][j] = "Алл-меру";
                        break;
                    case "Бог Луны":
                        map019JSON.events[224].pages[1].list[i].parameters[0][j] = "Богу Луны";
                        break;
                    case "Бог Страха и Голода":
                        map019JSON.events[224].pages[1].list[i].parameters[0][j] = "Богу Страха и Голода";
                        break;
                }
            }
        }
    }

    await Bun.write("./output/data/Map019.json", JSON.stringify(map019JSON));
}

async function processDirectory(inputPath: string, outputPath: string, decrypter: Decrypter) {
    await mkdir(outputPath, { recursive: true });

    for (const file of await readdir(inputPath, { withFileTypes: true })) {
        const inputFilePath = join(inputPath, file.name);
        const outputFilePath = join(outputPath, file.name);

        if (file.isDirectory()) {
            await processDirectory(inputFilePath, outputFilePath, decrypter);
        } else {
            if (!file.name.endsWith(".psd")) {
                await copyFile(inputFilePath, outputFilePath);
            } else {
                const psdFile = await psd.open(inputFilePath);

                if (file.name === "icon.psd") {
                    await psdFile.image.saveAsPng(join(outputFilePath.replace(".psd", ".png")));
                } else {
                    await psdFile.image.saveAsPng(join(outputFilePath.replace(".psd", ".png")));
                    const data = await Bun.file(join(outputFilePath.replace(".psd", ".png"))).arrayBuffer();
                    const encrypted = decrypter.encryptFile(data, true);
                    await rm(join(outputFilePath.replace(".psd", ".png")));
                    await Bun.write(outputFilePath.replace(".psd", ".rpgmvp"), encrypted);
                }
            }
        }
    }
}

async function exportPNG() {
    const psdPath = "./img/translation";
    const outputPath = "./output/img";

    const decrypter = new Decrypter(JSON.parse(await Bun.file("./data/System.json").text()).encryptionKey);
    await processDirectory(psdPath, outputPath, decrypter);

    await mkdir("./output/icon", { recursive: true });
    await copyFile("./output/img/icon/icon.png", "./output/icon/icon.png");
    await rm("./output/img/icon", { force: true, recursive: true });
}

async function copyChangeList() {
    for (const entry of await readdir("./")) {
        if (entry.endsWith(".html")) {
            await copyFile(`./${entry}`, `./output/${entry}`);
            return entry.split(" ")[0];
        }
    }
}

async function zipDirectory(sourceDir: string, outputPath: string) {
    const blobWriter = new BlobWriter();
    const zipWriter = new ZipWriter(blobWriter);

    async function addFilesToZip(currentPath: string, relativePath = "") {
        const entries = await readdir(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.name.endsWith("zip")) {
                continue;
            }

            const entryPath = join(currentPath, entry.name);
            const zipPath = join(relativePath, entry.name).replace(/\\/g, "/");

            if (entry.isDirectory()) {
                await addFilesToZip(entryPath, zipPath);
            } else {
                const fileData = await Bun.file(entryPath).arrayBuffer();
                await zipWriter.add(zipPath, new Blob([fileData]).stream());
            }
        }
    }

    await addFilesToZip(sourceDir);

    await zipWriter.close();

    const zipBlob = await blobWriter.getData();
    await Bun.write(outputPath, zipBlob);
}

await Bun.spawn(["rvpacker-txt-rs", "write"], { stdout: "inherit" }).exited;
await replaceAugustWhatBringsYouHereLine();
await replaceMoonscorchedFemaleLines();
await replaceVillagerFemaleLines();
await replaceIncorrectNeedlesLosesBalanceLine();
await replaceLeviGodChoicesLines();

await exportPNG();

const version = await copyChangeList();
await zipDirectory("./output", `./output/${version}.zip`);
