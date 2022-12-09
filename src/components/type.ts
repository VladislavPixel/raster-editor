import type { Actions } from "./actions/actions";
import type { Canvas } from "./canvas/canvas";
import type { ContainerForLayers } from "./container-for-layers/container-for-layers";
import type { Header } from "./header/header";
import type { ToolsContainer } from "./tools-container/tools-container";
import type { IDom } from "../core/types";

export type Constructors =
	| Actions
	| Canvas
	| ContainerForLayers
	| Header
	| ToolsContainer;

export interface IConstructor {
	new (rootForComponent: IDom): Constructors;
}

export interface ISettings {
	listeners?: string[];
}

export interface IEditor {
	initListeners(): void;
	removeListeners(): void;
}

export interface IMainEditor {
	root: IDom;
	components: Array<IConstructor>;
	arrayForInstanceComponents: Array<Constructors>;
	getContent(): IDom;
	render(): void;
}

export interface IHeader {
	toHTML(): string;
	onClick(): void;
}

export interface IToolsContainer {
	toHTML(): string;
	onClick(): void;
}

export interface IContainerForLayers {
	toHTML(): string;
	onClick(): void;
}

export interface ICanvas {
	toHTML(): string;
	onClick(): void;
}

export interface IActions {
	toHTML(): string;
	onClick(): void;
}
