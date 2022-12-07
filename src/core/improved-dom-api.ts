import type { IDom } from "./types";

class Dom implements IDom{
	element: Element;

	constructor(selector: string | Element) {
		this.element = this.initialization(selector);
	}

	initialization(selector: string | Element): Element {
		if (typeof selector === "string") {
			const el = document.querySelector(selector);

			if (el === null) {
				throw new Error(`Element is not found. Your search id - ${selector}.`);
			}

			return el;
		}

		if (!(selector instanceof HTMLElement)) {
			throw new Error(`Selector has an incorrect type.`);
		}

		return selector;
	}

	append(domString: string): void {
		this.element.append(domString);
	}
}

class ImprovedDomAPI {
	wrap(selector: string | Element): IDom {
		return new Dom(selector);
	}

	create() {
		
	}
}

const improvedDomAPI = new ImprovedDomAPI();

export { improvedDomAPI };
