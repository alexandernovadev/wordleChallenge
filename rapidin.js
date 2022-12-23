fs = require("fs");

try {
  var data = fs.readFileSync("words.txt", "utf8");
  var dataArraya = data.toString().replace(/\r/gi, "").split("\n");

  fs.appendFile(
    "newfile_s2.js",
    "const data = " + JSON.stringify(dataArraya, null, 3),
    function (err) {
      if (err) throw err;
      console.log("error ", data);
    }
  );
} catch (e) {
  console.log("Error:", e.stack);
}
