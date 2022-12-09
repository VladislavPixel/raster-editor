import { Editor } from "../editor/editor";
import type { IContainerForLayers } from "../type";
import type { IDom } from "../../core/types";

class ContainerForLayers extends Editor implements IContainerForLayers {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment, {
			listeners: ["click"]
		});
	}

	toHTML(): string {
		return "<div>ContainerForLayers</div>";
	}

	onClick(): void {
		console.log("Ты кликнул по ContainerForLayers");
	}
}

export { ContainerForLayers };
