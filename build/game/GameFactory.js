import { WORDS, CODE_LETTERS } from "../env.js";
import { GameStatusLose } from "../gameStatus/GameStatusLose.js";
import { GameStatusWin } from "../gameStatus/GameStatusWin.js";
import { BackgroundGenerator } from "../generators/BackgroundsGenerator.js";
import { CheckTypeGenerator } from "../generators/ChackTypeGenerator.js";
import { InputBack } from "../input/InputBack.js";
import { InputEnter } from "../input/InputEnter.js";
import { InputKey } from "../input/InputKey.js";
import { ListenerManager } from "../listener/ListenerManager.js";
import { BoardManager } from "../managers/BoardManager.js";
import { CheckTypeManager } from "../managers/CheckTypeManager.js";
import { GameManager } from "../managers/GameManager.js";
import { GameStatusManager } from "../managers/GameStatusManager.js";
import { PanelManager } from "../managers/PanelManager.js";
import { VisualManager } from "../managers/VisualManager.js";
import { WordManager } from "../managers/WordManager.js";
import { Util } from "../util.js";
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.createGame = function () {
        var gameManager = new GameManager();
        var pickedWord = Util.getRandomWord(WORDS);
        console.log(pickedWord);
        var backgroundsGenerator = new BackgroundGenerator();
        var checkTypeGenerator = new CheckTypeGenerator();
        var wordManager = new WordManager(pickedWord, gameManager);
        var panelManager = new PanelManager(backgroundsGenerator.generate(gameManager));
        var boardManager = new BoardManager();
        var visualManager = new VisualManager(panelManager, boardManager);
        var checkTypeManager = new CheckTypeManager(checkTypeGenerator.generate(wordManager));
        var gameStatusLose = new GameStatusLose(gameManager);
        var gameStatusWin = new GameStatusWin(wordManager, gameManager);
        var gameStatus = [gameStatusLose, gameStatusWin];
        var gameStatusManager = new GameStatusManager(gameStatus);
        var inputKey = new InputKey(CODE_LETTERS, gameManager, visualManager, wordManager);
        var inputBack = new InputBack(gameManager, visualManager, wordManager);
        var inputEnter = new InputEnter(gameManager, visualManager, wordManager, gameStatusManager, checkTypeManager);
        var inputs = [inputKey, inputBack, inputEnter];
        var listenerManager = new ListenerManager(inputs);
        return {
            gameManager: gameManager,
            wordManager: wordManager,
            panelManager: panelManager,
            boardManager: boardManager,
            visualManager: visualManager,
            checkTypeManager: checkTypeManager,
            gameStatusManager: gameStatusManager,
            listenerManager: listenerManager
        };
    };
    return GameFactory;
}());
export { GameFactory };
