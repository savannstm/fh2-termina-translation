(function () {
    //=============================================================================
    // Window_Base
    //=============================================================================
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = _Window_Base_convertEscapeCharacters.call(this, text);

        // Большинство кода здесь - злое хакерство и лингвистика, которых я не понимаю
        // Логика была взята из гитхаба какого-то умершего проекта
        text = text.replace(/\x1bd(\d+)\[(.*?)\|(.*?)\|(.*?)\]/g, function () {
            // Текущее значение необходимой нам переменной
            let variableNumber = $gameVariables.value(Number(arguments[1]));

            variableNumber %= 100;
            if (variableNumber >= 5 && variableNumber <= 20) {
                return arguments[4];
            }

            variableNumber %= 10;

            if (variableNumber === 1) {
                return arguments[2];
            }

            if (variableNumber >= 2 && variableNumber <= 4) {
                return arguments[3];
            }

            return arguments[4];
        });

        return text;
    };
})();
