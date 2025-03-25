(function () {
    //=============================================================================
    // Window_Base
    //=============================================================================
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = _Window_Base_convertEscapeCharacters.call(this, text);

        // Вид: \Dx[y]
        text = text.replace(/\x1bD(\d)\[(.*?)\]/g, function () {
            // 1 - именительный
            // 2 - родительный
            // 3 - дательный
            // 4 - винительный
            // 5 - творительный
            // 6 - предложный
            const grammaticalCase = Number(arguments[1]);
            const actorId = Number(arguments[2]);
            const actor = $gameActors.actor(actorId);
            const defaultName = $dataActors[actorId].name;

            if (actor.name() !== defaultName) {
                return actor.name();
            }

            switch (actor.actorId()) {
                case 1:
                    return "Леви";
                case 3:
                    switch (grammaticalCase) {
                        case 1:
                            return "Марина";
                        case 2:
                            return "Марины";
                        case 3:
                            return "Марине";
                        case 4:
                            return "Марину";
                        case 5:
                            return "Мариной";
                        case 6:
                            return "Марине";
                    }
                case 4:
                    switch (grammaticalCase) {
                        case 1:
                            return "Даан";
                        case 2:
                            return "Даана";
                        case 3:
                            return "Даану";
                        case 4:
                            return "Даана";
                        case 5:
                            return "Дааном";
                        case 6:
                            return "Даане";
                    }
                case 5:
                    switch (grammaticalCase) {
                        case 1:
                            return "Абелла";
                        case 2:
                            return "Абеллы";
                        case 3:
                            return "Абелле";
                        case 4:
                            return "Абеллу";
                        case 5:
                            return "Абеллой";
                        case 6:
                            return "Абелле";
                    }
                case 6:
                    return "О'саа";
                case 7:
                    switch (grammaticalCase) {
                        case 1:
                            return "Чёрный Калев";
                        case 2:
                            return "Чёрного Калева";
                        case 3:
                            return "Чёрному Калеву";
                        case 4:
                            return "Чёрного Калева";
                        case 5:
                            return "Чёрным Калевом";
                        case 6:
                            return "Чёрном Калеве";
                    }
                case 10:
                    switch (grammaticalCase) {
                        case 1:
                            return "Кровавый голем";
                        case 2:
                            return "кровавого голема";
                        case 3:
                            return "кровавому голему";
                        case 4:
                            return "кровавого голема";
                        case 5:
                            return "кровавым големом";
                        case 6:
                            return "кровавом големе";
                    }
                case 13:
                    return "Марко";
                case 14:
                    return "Карин";
                case 15:
                    switch (grammaticalCase) {
                        case 1:
                            return "Оливия";
                        case 2:
                            return "Оливии";
                        case 3:
                            return "Оливии";
                        case 4:
                            return "Оливию";
                        case 5:
                            return "Оливией";
                        case 6:
                            return "Оливии";
                    }
                case 16:
                case 17:
                case 18:
                    switch (grammaticalCase) {
                        case 1:
                            return "Гуль";
                        case 2:
                            return "гуля";
                        case 3:
                            return "гулю";
                        case 4:
                            return "гуля";
                        case 5:
                            return "гулём";
                        case 6:
                            return "гуле";
                    }
                case 22:
                case 28:
                case 29:
                    switch (grammaticalCase) {
                        case 1:
                            return "Житель";
                        case 2:
                            return "жителя";
                        case 3:
                            return "жителю";
                        case 4:
                            return "жителя";
                        case 5:
                            return "жителем";
                        case 6:
                            return "жителе";
                    }
            }
        });

        return text;
    };
})();
