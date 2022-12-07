import { improvedDomAPI } from "../../core/improved-dom-api";
import type { IDom } from "../../core/types";
import type { IOptions } from "../../types";

class MainEditor<T> {
	root: IDom;

	components: T[];

	constructor(selector: string | Element, options: IOptions<T>) {
		this.root = improvedDomAPI.wrap(selector);
		this.components = options.components;
	}

	getRoot() {
		let newComponents = [];

		this.components = this.components.map(Component => {
			const instanceComponent = new Component();
		});

		return "";
	}

	render() {
		this.root.append(this.getRoot());
	}
}

export { MainEditor };
