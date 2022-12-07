export interface IDom {
	element: Element;
	append(domString: string): void;
	initialization(selector: string | Element): Element;
}
