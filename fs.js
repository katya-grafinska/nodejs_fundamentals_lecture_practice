var fs = require('fs');

function doReadFile() {
    // fs.readFile(__filename, function(err, data) {
    fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data) {
        if (err) {
            console.error(err);
        }
        console.log(data); // data is typeof String
        // console.log(data.toString()); // data is typeof Buffer
        // console.log(data instanceof Buffer) // proof! ha!
    });
}

function doWriteRenameDeleteFile() {
    fs.writeFile('file.tmp', 'data', function(err) {
        if (err) throw err;

        fs.rename('file.tmp', 'new.tmp', function(err) {
            if (err) throw err;

            fs.unlink('new.tmp', function(err) {
                if (err) throw err;
            })
        })
    })
}

fs.stat(__filename, function(err, stat) {
    console.log(stat);
})

// doWriteRenameDeleteFile();
// doReadFile();
