import fs from "fs";

const writer = fs.createWriteStream("stream.log");
writer.write("hafiz\n");
writer.write("yazid\n");
writer.write("muhammad\n");
writer.end();

const reader = fs.ReadStream("stream.log");
reader.addListener("data", (data)=>{
    console.info(data.toString())
});
