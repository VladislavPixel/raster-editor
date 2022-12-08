import { improvedDomAPI } from "../../core/improved-dom-api";
import type { IDom } from "../../core/types";
import type { IOptions } from "../../types";
import type { IConstructor } from "../type";

class MainEditor {
	root: IDom;

	components: IConstructor[];

	constructor(selector: string | Element, options: IOptions) {
		this.root = improvedDomAPI.wrap(selector);
		this.components = options.components;
	}

	getContent() {
		const wrapper = improvedDomAPI.create("div", ["app-conatiner__wrapper", "wrapper"]);

		this.components = this.components.map(Component => {
			const constructorName = Component.name;

			let isFirstSegment = true;

			const classes = constructorName.replace(/[A-Z](?:[^A-Z\.])+/g, (str: string): string => {
				const result = str[0].toLowerCase() + str.slice(1);

				if (str === constructorName || isFirstSegment) {
					isFirstSegment = false;

					return result;
				}

				return "-" + result;
			})

			const rootForComponent = improvedDomAPI.create("div", [`wrapper__${classes}`]);

			const instanceComponent = new Component(rootForComponent);

			const result = instanceComponent.parentSegment.append(instanceComponent.toHTML());

			wrapper.append(result);

			return Component;
		});

		return wrapper.element;
	}

	render() {
		const content = this.getContent();

		this.root.append(content);
	}
}

export { MainEditor };
