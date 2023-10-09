const fse = require('fs-extra');


class Builder {
    constructor(pageObjArr) {
        for(let i = 0; i<pageObjArr.length; i++) {
            let pageObj = pageObjArr[i]
            this.finalWritePage(pageObj)
        }
        // this.pageObj = pageObj
        // this.pf = pageObj.generate()
        // this.test()
    }

    finalWritePage(pageObj) {
        fse.outputFile(pageObj.path, pageObj.generate(), err => {
            if(err) {
              console.log(err);
            } else {
              console.log('The file has been saved!');
            }
          })
    }

    startServe() {
        
    }


    
    test() {
        fse.outputFile(this.pageObj.path, this.pf, err => {
            if(err) {
              console.log(err);
            } else {
              console.log('The file has been saved!');
            }
          })
        // fs.writeFile('index.html', this.pf, function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        //   });
    }
}


module.exports = {Builder}