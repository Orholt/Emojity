/* Emojited - Creating emotes from text
    Usage: Discord.js as emote reply
    Author: Michał Witek
    License: Beerware
 */
exports.emojity = {
 getEmojis (text){
    // Variables
    let emojited = [];
    let emojis;
    let input = '';
    input = text;
    input = input.toLowerCase();
    //#region  declarations of emoji
    // Array declaration
    emojis = {
      // alphabet
        'a' : '🇦',
        'b' : '🇧',
        'c' : '🇨',
        'd' : '🇩',
        'e' : '🇪',
        'f' : '🇫',
        'g' : '🇬',
        'h' : '🇭',
        'i' : '🇮',
        'j' : '🇯',
        'k' : '🇰',
        'l' : '🇱',
        'm' : '🇲',
        'n' : '🇳',
        'o' : '🇴',
        'q' : '🇶',
        'p' : '🇵',
        'r' : '🇷',
        's' : '🇸',
        't' : '🇹',
        'u' : '🇺',
        'v' : '🇻',
        'w' : '🇼',
        'x' : '🇽',
        'y' : '🇾',
        'z' : '🇿',
        ' ' : '➖'
      // numbers
    }
    //#endregion
    //parsing text to emoji
    let arrInput = input.split('');
    try
    {
      arrInput.forEach(letter => {
        emojited.push(emojis[letter]);
      });
    }
    catch (exeption)
    {
      console.log(exeption);
      return;
    }
    return emojited;
  }
}