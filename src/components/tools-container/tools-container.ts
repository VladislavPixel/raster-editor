import { Editor } from "../editor/editor";
import type { IToolsContainer } from "../type";
import type { IDom } from "../../core/types";

class ToolsContainer extends Editor implements IToolsContainer {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment);
	}

	toHTML(): string {
		return "<div>ToolsContainer</div>"
	}
}

export { ToolsContainer };
