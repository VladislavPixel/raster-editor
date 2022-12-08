export interface IDom {
	element: Element;
	append(domDesign: string | Element | HTMLElement): void;
	initialization(selector: string | Element): Element;
	on(listener: string, callback: () => unknown): void;
}

export interface IDomListener {
	parentSegment: IDom;
	listeners: string[];
	initDOMListener(): void;
	removeDOMListener(): void;
}
