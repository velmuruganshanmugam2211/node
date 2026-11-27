const Fs = require("fs");

const ReadStream = Fs.createReadStream(`./docs/HugeFiles.txt` , {encoding: "utf-8"});
const WriteStream = Fs.createWriteStream(`./docs/NewHugeFiles.txt`);

ReadStream.on("data",(buffer)=>{
   WriteStream.write(buffer);
})

ReadStream.on("data", (buffer) => {
    console.log("/n/n New Buffer Received");
    console.log(buffer.toString());
});

// Its a Simple way to write the data from one file to another file using pipe method
//ReadStream.pipe(WriteStream); 
 