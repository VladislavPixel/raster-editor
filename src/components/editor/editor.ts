import { DomListener } from "../../core/domeListener";
import type { IDom } from "../../core/types";
import type { IOptions } from "../type";

class Editor extends DomListener {
	constructor(parentSegment: IDom, options: IOptions = {}) {
		super(parentSegment, options.listeners);
	}

	init(): void {
		this.initDOMListener();
	}
}

export { Editor };
