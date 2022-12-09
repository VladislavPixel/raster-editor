import { Editor } from "../editor/editor";
import type { IActions } from "../type";
import type { IDom } from "../../core/types";

class Actions extends Editor implements IActions {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment, {
			listeners: ["click"]
		});
	}

	toHTML(): string {
		return "<div>Actions</div>";
	}

	onClick(): void {
		console.log("Ты кликнул по Actions");
	}
}

export { Actions };
