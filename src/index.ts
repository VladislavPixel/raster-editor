import "./scss/style.scss";
import { MainEditor } from "./components/main-editor/main-editor";
import { Header } from "./components/header/header";
import { ToolsContainer } from "./components/tools-container/tools-container";
import { Actions } from "./components/actions/actions";
import { Canvas } from "./components/canvas/canvas";
import { ContainerForLayers } from "./components/container-for-layers/container-for-layers";

const mainEditor = new MainEditor("#app", {
	components: [Header, Actions, ToolsContainer, Canvas, ContainerForLayers]
});

mainEditor.render();
