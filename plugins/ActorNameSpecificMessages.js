(function () {
    //=============================================================================
    // Window_Base
    //=============================================================================
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = _Window_Base_convertEscapeCharacters.call(this, text);

        text = text.replace(/\x1bAC\[(.*?)\]/g, function () {
            const actorId = Number(arguments[1]);
            const actor = $gameActors.actor(actorId);
            const defaultName = $dataActors[actorId].name();

            if (actor.name() !== defaultName) {
                return actor.name();
            }

            switch (actor.actorId()) {
                case 3:
                    return "Марине";
                case 4:
                    return "Даану";
                case 5:
                    return "Абелле";
                case 7:
                    return "Чёрному Калеву";
                case 15:
                    return "Оливии";
                case 16:
                case 17:
                case 18:
                    return "Гулю";
                case 22:
                case 28:
                case 29:
                    return "Жителю";
            }
        });

        return text;
    };
})();
