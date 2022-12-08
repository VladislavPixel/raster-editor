import { improvedDomAPI } from "../../core/improved-dom-api";
import type { IDom } from "../../core/types";
import type { IOptions } from "../../types";
import type { IConstructor, Constructors } from "../type";

class MainEditor {
	root: IDom;

	components: Array<IConstructor>;

	arrayForInstanceComponents: Array<Constructors>;

	constructor(selector: string | Element, options: IOptions) {
		this.root = improvedDomAPI.wrap(selector);
		this.components = options.components;
		this.arrayForInstanceComponents = [];
	}

	getContent(): IDom {
		const wrapper = improvedDomAPI.create("div", ["app-conatiner__wrapper", "wrapper"]);

		this.components.forEach((Component: IConstructor): void => {
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

			rootForComponent.append(instanceComponent.toHTML());

			wrapper.append(rootForComponent.element);

			this.arrayForInstanceComponents.push(instanceComponent);
		});

		return wrapper;
	}

	render(): void {
		const contentIDom = this.getContent();

		this.root.append(contentIDom.element);

		this.arrayForInstanceComponents.forEach((instanceComponent): void => {
			instanceComponent.init();
		})
	}
}

export { MainEditor };
