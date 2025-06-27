import fs from "fs";

async function runcode() {
  fs.readdir("./filefolder", (err, files) => {
    if (err) return console.log(err);
    else {
      fs.readFile(
        "./filefolder/" + files[0],
        { encoding: "utf-8" },
        (err, text) => {
          if (err) return console.log(err);
          console.log(text);
          fs.writeFile(
            "./filefolder/file to write",
            "Hey im jsust writing into this file the 2nd time, dont mind me...",
            (err) => {
              if (err) console.log(err);
              else
                fs.readdir("./filefolder", (err, files) => {
                  if (err) return console.log(err);
                  else {
                    fs.readFile(
                      "./filefolder/" + files[0],
                      { encoding: "utf-8" },
                      (err, text) => {
                        if (err) return console.log(err);
                        console.log(text);
                      }
                    );
                  }
                });
            }
          );
        }
      );
    }
  });
}

runcode();
