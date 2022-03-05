const im = require('imagemagick');

// im.identify('./layers/Objects/dude.JPG', function(err, features){
//   if (err) throw err;
//   console.log(features);
//   // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
// });

// im.convert(['./layers/Objects/dude.JPG', 'kittens-small.jpg'],
// function(err, stdout){
//   if (err) throw err;
//   console.log('stdout:', stdout);
// });


let spawn = require('child_process').spawn;
// var args = ['-ping', './layers/Objects/dude.JPG' ];


//
let child = spawn('convert', ['./layers/Tops/top_diamond_cray#10.gif', '-coalesce', 'null:', '(', './layers/Objects/alien_red#10.gif', '-coalesce', ')', '-layers', 'Composite', 'newgif.gif']);



child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
  //Here is where the output goes
});

child.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
  //Here is where the error output goes
});

child.on('close', function(code) {
  console.log('closing code: ' + code);
  //Here you can get the exit code of the script
  process.exit();
});
