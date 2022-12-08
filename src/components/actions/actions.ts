import { Editor } from "../editor/editor";
import type { IActions } from "../type";
import type { IDom } from "../../core/types";

class Actions extends Editor implements IActions {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment);
	}

	toHTML(): string {
		return "<div>Actions</div>"
	}
}

export { Actions };
