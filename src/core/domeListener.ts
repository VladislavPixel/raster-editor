import type { IDom, IDomListener, Component } from "./types";

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

	initDOMListener(this: Component): void {
		this.listeners.forEach((listener: string): void => {
			const nameHandler = this.getCorrectHandlerName(listener);

			if (!(nameHandler in this)) {
				throw new Error("The method-handler is not defined in the constructor.");
			}

			this.parentSegment.on(listener, this[nameHandler]);
		});
	}

	removeDOMListener(this: Component): void {
		this.listeners.forEach((listener: string): void => {
			const nameHandler = this.getCorrectHandlerName(listener);

			this.parentSegment.off(listener, this[nameHandler]);
		});
	}
}

export { DomListener };
