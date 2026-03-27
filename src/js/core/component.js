

export default class Component {
    constructor(el, props = {}) {
        this.el = el;
        this.props = props;
    }

    init() {
        this.setup();
        this.bindEvents();
        this.render();
    }

    setup() { }
    bindEvents() { }
    render() { }
    destroy() { }

}