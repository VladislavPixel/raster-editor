import type { IDom } from "./types";

class Dom implements IDom {
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

	append(domDesign: string | Element | HTMLElement): void {
		if (typeof domDesign === "string") {
			this.element.insertAdjacentHTML("beforeend", domDesign);
		} else {
			this.element.append(domDesign);
		}
	}

	clear(): void {}

	on(listener: string, callback: () => unknown): void {
		this.element.addEventListener(listener, callback);
	}

	off(listener: string, callback: () => unknown): void {
		this.element.removeEventListener(listener, callback);
	}
}

class ImprovedDomAPI {
	static wrap(selector: string | Element): IDom {
		return new Dom(selector);
	}

	static create(typeElement: string, arrClasses?: string[]) {
		const newElement = document.createElement(typeElement);

		if (arrClasses !== undefined) {
			newElement.classList.add(...arrClasses);
		}

		return this.wrap(newElement);
	}
}

export { ImprovedDomAPI };
