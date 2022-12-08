import { Editor } from "../editor/editor";
import type { IHeader } from "../type";
import type { IDom } from "../../core/types";

class Header extends Editor implements IHeader {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment, {
			listeners: ["click"]
		});
	}

	toHTML(): string {
		return "<header>Header Component</header>"
	}

	onClick(): void {
		console.log("Ты кликнул по HEADER");
	}
}

export { Header };
