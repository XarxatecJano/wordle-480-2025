import { GameManager } from "./managers/GameManager.js";
import { WORDS, CODE_LETTERS } from "./env.js";
import { Util } from "./util.js";
import { InputKey } from "./input/InputKey.js";
import { IInput } from "./interfaces/IInput.js";
import { InputBack } from "./input/InputBack.js";
import { InputEnter } from "./input/InputEnter.js";
import { WordManager } from "./managers/WordManager.js";
import { PanelManager } from "./managers/PanelManager.js";
import { BoardManager } from "./managers/BoardManager.js";
import { VisualManager } from "./managers/VisualManager.js";
import { ListenerManager } from "./listener/ListenerManager.js";
import { GameStatusLose } from "./gameStatus/GameStatusLose.js";
import { GameStatusWin } from "./gameStatus/GameStatusWin.js";
import { IGameStatus } from "interfaces/IGameStatus.js";
import { GameStatusManager } from "./managers/GameStatusManager.js";
import { CheckTypeManager } from "./managers/CheckTypeManager.js";
import { BackgroundGenerator } from "./generators/BackgroundsGenerator.js";
import { CheckTypeGenerator } from "./generators/ChackTypeGenerator.js";

const pickedWord: string = Util.getRandomWord(WORDS);
console.log(pickedWord);

const backgroundsGenerator = new BackgroundGenerator()
const checkTypeGenerator = new CheckTypeGenerator()

const gameManager: GameManager = new GameManager();

const panel: PanelManager = new PanelManager(backgroundsGenerator.generate(gameManager))
const board: BoardManager = new BoardManager()

const wordManager: WordManager = new WordManager(pickedWord, gameManager);
const visualManager: VisualManager = new VisualManager(panel, board)

const checkTypeManager: CheckTypeManager = new CheckTypeManager(checkTypeGenerator.generate(wordManager))

const gameStatusLose : GameStatusLose = new GameStatusLose(gameManager)
const gameStatusWin : GameStatusWin = new GameStatusWin(wordManager, gameManager)
const gameStatus : IGameStatus[] = [gameStatusLose, gameStatusWin]
const gameStatusManager : GameStatusManager = new GameStatusManager(gameStatus) 

const inputKey = new InputKey(CODE_LETTERS, gameManager, visualManager, wordManager);
const inputBack = new InputBack(gameManager, visualManager, wordManager);
const inputEnter = new InputEnter(gameManager, visualManager, wordManager, gameStatusManager, checkTypeManager);
const inputs : IInput[] = [inputKey, inputBack, inputEnter];

const listenerManager: ListenerManager = new ListenerManager(inputs)

listenerManager.setListeners()