
export function parseProps(el){
    const props = {};

    Object.keys(el.dataset).forEach(key => {
        if(key.startsWith('vsProp')){
            const propName = key.replace('vsProp', '');
            const formattedName = propName.charAt(0).toLowerCase() + propName.slice(1);
            
            props[formattedName] = el.dataset[key];
        }
    });
    return props;
}