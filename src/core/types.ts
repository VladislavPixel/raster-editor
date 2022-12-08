export interface IDom {
	element: Element;
	append(domString: string | Element): Element;
	initialization(selector: string | Element): Element;
}
