//=============================================================================
// GenderSpecificMessages
//=============================================================================
/*:
 * @plugindesc Provides a method to easily make changes to messages depending on the player's gender.
 * @author Nolonar
 *
 * @param Gender Switch ID
 * @desc The ID of the Switch that defines the player's gender.
 * @default 1
 * @type number
 *
 *
 * @help
 * Adds the following control character:
 * \x[male|female]
 *
 * Example
 *     "Hello, young \x[man|lady]! How are you today?"
 *
 * If switch is off -> Hello, young man! How are you today?
 * If switch is on -> Hello, young lady! How are you today?
 */
(function () {
    //=============================================================================
    // Settings
    //=============================================================================
    var Parameters = PluginManager.parameters("GenderSpecificMessages");
    var Param = {
        GenderSwitchId: Number(Parameters["Gender Switch ID"]),
    };
    var IsFemale = function () {
        return $gameSwitches.value(Param.GenderSwitchId);
    };
    //=============================================================================
    // Window_Base
    //=============================================================================
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function (text) {
        text = _Window_Base_convertEscapeCharacters.call(this, text);
        text = text.replace(/\x1bx\[(.*?)\|(.*?)\]/gi, function () {
            return IsFemale() ? arguments[1] : arguments[2];
        });
        return text;
    };
})();
