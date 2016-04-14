var fs = require('fs');

function fourth() {
    var file = new fs.ReadStream('big_pipe.html');
    var fileOut = new fs.WriteStream('big_pipe_out.html');

    file.pipe(fileOut);
    // file.pipe(process.stdout);
    file.on('error', function(err) {
        console.log(err)
    });

    file
        .on('open', function() {})
        .on('close', function() {});


}
// fourth();

function third() {
    var file = new fs.ReadStream('big.html');
    var fileOut = new fs.WriteStream('big_out.html');

    file.on('readable', writeFile)

    file.on('end', function() {
        fileOut.end();
    });

    function writeFile() {
        var fileContent = file.read(); // read
        if (fileContent === null) return; //important line!
        fileOut.write(fileContent) // write
    }
}

third();

function first() {
    // will read file on next event loop tick
    var stream = new fs.ReadStream(__filename);

    stream.on('readable', function() {
        var data = stream.read();
        console.log(data);
    });

    stream.on('end', function() {
        console.log('the end')
    });

}

// first();



function second() {
    var stream = new fs.ReadStream('big.html');

    stream.on('readable', function() {
        var data = stream.read();

        // wont work correct w/ out this sht =(
        if (data === null) return;

        console.log(data);
        console.log(data.length); //64KB
    });

    stream.on('end', function() {
        console.log('the end')
    });

    // UNCOMMIT ONLY IN EMERGENCY CASES!!
    // stream.on('error', function(err) {
    //     console.error(err)
    // })
}
// second()
