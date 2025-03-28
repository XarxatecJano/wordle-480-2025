import { InputHandlerFactory } from "./Elements/Input/InputHandlerFactory.js";
let inputHandler = InputHandlerFactory.getInstance().create();
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
    inputHandler.newKeyPressed(e.target.value);
}));
document.addEventListener("keydown", (e) => {
    inputHandler.newKeyPressed(e.code);
});
