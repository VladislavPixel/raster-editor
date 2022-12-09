export interface IDom {
	element: Element;
	append(domDesign: string | Element | HTMLElement): void;
	initialization(selector: string | Element): Element;
	on(listener: string, callback: () => unknown): void;
	off(listener: string, callback: () => unknown): void;
	clear(): void;
}

export interface IDomListener {
	parentSegment: IDom;
	listeners: string[];
	initDOMListener(this: Component): void;
	removeDOMListener(this: Component): void;
	getCorrectHandlerName(listener: string): string;
}

export type Component = {
	[key: PropertyKey]: any;
} & IDomListener;
