// loader.js

import { getComponent } from "./registry.js";
import { parseProps } from "./parse.js";

export function init(root = document){
    const elements = root.querySelectorAll('[data-vs-component]');
    
    elements.forEach(el => {
        if(el.__vsInitialized) return;

        const name = el.dataset.vsComponent;
        const Component = getComponent(name);

        if(!Component) return;

        const props = parseProps(el);

        const instance = new Component(el, props);

        instance.init?.();

        el.__vsInitialized = true;
    });
}