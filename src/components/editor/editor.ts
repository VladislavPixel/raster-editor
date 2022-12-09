import { DomListener } from "../../core/domeListener";
import type { IDom } from "../../core/types";

import type { ISettings, IEditor } from "../type";

class Editor extends DomListener implements IEditor {
	constructor(parentSegment: IDom, options: ISettings = {}) {
		super(parentSegment, options.listeners);
	}

	initListeners(): void {
		this.initDOMListener();
	}

	removeListeners(): void {
		this.removeDOMListener();
	}
}

export { Editor };
