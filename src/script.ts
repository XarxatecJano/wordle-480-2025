import { InputHandlerFactory } from "./Elements/Input/InputHandlerFactory.js";
import { ClickListener } from "./Elements/Listeners/ClickListener.js";
import { KeyDownListener } from "./Elements/Listeners/KeyDownListener.js";

let inputHandler = InputHandlerFactory.getInstance().create();
let clickListener = new ClickListener(inputHandler);
let keyListener = new KeyDownListener(inputHandler);

clickListener.listen(ClickListener.CALLBACK);
keyListener.listen();