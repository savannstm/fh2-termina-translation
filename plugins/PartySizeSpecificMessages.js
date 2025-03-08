(function () {
    //=============================================================================
    // Window_Base
    //=============================================================================
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = _Window_Base_convertEscapeCharacters.call(this, text);

        text = text.replace(/\x1bps\[(.*?)\|\|(.*?)(\|\|(.*?))?\]/g, function () {
            // Получаем аррей из объедков акторов
            const partyMembers = $gameParty.members();

            /*
                Неиграбельные акторы, которых можно рекрутировать
                7 - Калев
                16, 17, 18 - гули
                22, 28, 29 - жители
            */
            const npcIds = [7, 16, 17, 18, 22, 28, 29];

            // Кол-во играбельных персонажей в группе игрока
            let playableCharsPartySize = partyMembers.length;

            // Итерируемся через аррей акторов...
            for (const actor of partyMembers) {
                // Получаем айди актора в группе
                const actorId = actor.actorId();

                // Если этот актор из группы неиграбельных - вычитаем его из кол-ва играбельных персонажей в группе
                if (npcIds.includes(actorId)) {
                    playableCharsPartySize -= 1;
                }
            }

            // Если играбельных персонажа в группе 2 (игрок и кто-то ещё) - возвращаем текст из первой группы
            if (playableCharsPartySize === 2) {
                return arguments[1];
            }
            // Если играбельных персонажей больше - из второй
            else if (playableCharsPartySize > 2) {
                return arguments[2];
            }
            // Если игрок один - возвращаем текст из четвёртой группы (чётвёртая группа находится внутри третьей опциональной)
            else {
                return arguments[4];
            }
        });

        return text;
    };
})();
