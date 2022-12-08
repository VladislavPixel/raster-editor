import type { IDom, IDomListener } from "./types";

class DomListener implements IDomListener {
	parentSegment: IDom;

	listeners: string[];

	constructor(parentSegment: IDom, listeners: string[] = []) {
		this.parentSegment = parentSegment;
		this.listeners = listeners;
	}

	getCorrectHandlerName(listener: string): string {
		const result = "on" + listener[0].toUpperCase() + listener.slice(1);

		return result;
	}

	initDOMListener(): void {
		this.listeners.forEach((listener: string): void => {
			const nameHandler = this.getCorrectHandlerName(listener);
			console.log(this, "THIS");

			if (!(this.hasOwnProperty(nameHandler))) {
				throw new Error("The method is not defined in the constructor.");
			}

			//this.parentSegment.on(listener, this[nameHandler]);
		})
	}

	removeDOMListener(): void {

	}
}

export { DomListener };
