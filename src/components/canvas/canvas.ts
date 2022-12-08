import { Editor } from "../editor/editor";
import type { ICanvas } from "../type";
import type { IDom } from "../../core/types";

class Canvas extends Editor implements ICanvas {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment, {
			listeners: ["click"]
		});
	}

	toHTML(): string {
		return "<div>Canvas</div>"
	}

	onClick(): void {
		console.log("Ты кликнул по Canvas");
	}
}

export { Canvas };
