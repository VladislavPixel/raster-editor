import { ImprovedDomAPI } from "../../core/improved-dom-api";
import type { IDom } from "../../core/types";
import type { IOptions } from "../../types";

import type { IConstructor, Constructors, IMainEditor } from "../type";

class MainEditor implements IMainEditor {
	root: IDom;

	components: Array<IConstructor>;

	arrayForInstanceComponents: Array<Constructors>;

	constructor(selector: string | Element, options: IOptions) {
		this.root = ImprovedDomAPI.wrap(selector);
		this.components = options.components;
		this.arrayForInstanceComponents = [];
	}

	getContent(): IDom {
		const wrapper = ImprovedDomAPI.create("div", ["app-conatiner__wrapper", "wrapper"]);

		this.components.forEach((Component: IConstructor): void => {
			const constructorName = Component.name;

			let isFirstSegment = true;

			const classes = constructorName.replace(
				/[A-Z](?:[^A-Z\.])+/g,
				(str: string): string => {
					const result = str[0].toLowerCase() + str.slice(1);

					if (str === constructorName || isFirstSegment) {
						isFirstSegment = false;

						return result;
					}

					return "-" + result;
				}
			);

			const rootForComponent = ImprovedDomAPI.create("div", [`wrapper__${classes}`]);

			const instanceComponent = new Component(rootForComponent);

			rootForComponent.append(instanceComponent.toHTML());

			wrapper.append(rootForComponent.element);

			this.arrayForInstanceComponents.push(instanceComponent);
		});

		return wrapper;
	}

	render(): void {
		const contentIDomForRoot = this.getContent();

		this.root.append(contentIDomForRoot.element);

		this.arrayForInstanceComponents.forEach((instanceComponent: Constructors): void => {
			instanceComponent.initListeners();
		});
	}
}

export { MainEditor };
