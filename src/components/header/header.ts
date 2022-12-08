import { Editor } from "../editor/editor";
import type { IHeader } from "../type";
import type { IDom } from "../../core/types";

class Header extends Editor implements IHeader {
	static nameConstructor: string = this.constructor.name;

	constructor(parentSegment: IDom) {
		super(parentSegment);
	}

	toHTML(): string {
		return "<header>Header Component</header>"
	}
}

export { Header };
