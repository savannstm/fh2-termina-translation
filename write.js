await Bun.spawn(["rvpacker-txt-rs", "write"], { stdout: "inherit" }).exited;

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
                        if (parameter === "\\>\\}\\i[373]ИТЕЛЬ\\{\\<") {
                            troopsJSON[i].pages[p].list[l].parameters[pr] = "\\>\\}\\i[373]ИТЕЛЬНИЦА\\{\\<";
                        }
                    }
                }
            }
        }
    }

    await Bun.write("./output/data/Troops.json", JSON.stringify(troopsJSON));
}

await replaceAugustWhatBringsYouHereLine();
await replaceMoonscorchedFemaleLines();
await replaceVillagerFemaleLines();
