// registry.js

const registry = new Map();

export function register(name, component){
    if(registry.has(name)){
        console.warn(`Component ${name} já registrado.`);
        return;
    }

    registry.set(name, component);
}

export function getComponent(name){
    return registry.get(name);
}