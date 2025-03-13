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
            const defaultName = $dataActors[actorId].name();

            if (actor.name() !== defaultName) {
                return actor.name();
            }

            switch (actor.actorId()) {
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
                            return "Гуля";
                        case 3:
                            return "Гулю";
                        case 4:
                            return "Гуля";
                        case 5:
                            return "Гулём";
                        case 6:
                            return "Гуле";
                    }
                case 22:
                case 28:
                case 29:
                    switch (grammaticalCase) {
                        case 1:
                            return "Житель";
                        case 2:
                            return "Жителя";
                        case 3:
                            return "Жителю";
                        case 4:
                            return "Жителя";
                        case 5:
                            return "Жителем";
                        case 6:
                            return "Жителе";
                    }
            }
        });

        return text;
    };
})();
