class MyComponent {

    constructor() {
        
        this.script = ``
    }

    addSubComponent(obj) {
        let gen = obj.generate()
        this.script += gen.script
        return gen.html
    }
    
    addonclicklistner(id,fn) {
        
        let scr = `
            document.getElementById('${id}').onclick=${fn};
        `
        
        this.script = scr
        
    }
    generate() {
        
        let html = this.render()
        
        return {
            html: html,
            script: this.script
        }
    }
}
module.exports = {MyComponent}