import type { Actions } from "./actions/actions";
import type { Canvas } from "./canvas/canvas";
import type { ContainerForLayers } from "./container-for-layers/container-for-layers";
import type { Header } from "./header/header";
import type { ToolsContainer } from "./tools-container/tools-container";
import type { IDom } from "../core/types";

export interface IConstructor {
	new(rootForComponent: IDom): Actions | Canvas | ContainerForLayers | Header | ToolsContainer;
}

export interface IHeader {
	toHTML(): string;
}

export interface IToolsContainer {
	toHTML(): string;
}

export interface IContainerForLayers {
	toHTML(): string;
}

export interface ICanvas {
	toHTML(): string;
}

export interface IActions {
	toHTML(): string;
}
