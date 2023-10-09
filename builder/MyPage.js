class MyPage {
    constructor(path) {
        this.path = "dev/build/" + path
        this.htmlContent = ""
        this.scriptContent = ""
        
    }

   

    generate() {
        let arr = this.render()
        
        for(let i=0; i<arr.length; i++) {
            let comp = arr[i].generate()
            
            this.htmlContent += comp.html
            this.scriptContent += comp.script
            

        }
        // 
        
        this.pageTemplate = `
        <!doctype html>
        <html>
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/dev/output.css" rel="stylesheet">
            </head>
            <body>
                ${this.htmlContent}
            </body>
            <script>
                ${this.scriptContent}
            </script>
        </html>
`
        return this.pageTemplate
    }


}

module.exports = {MyPage}