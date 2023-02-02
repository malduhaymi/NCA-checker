const { app, BrowserWindow ,ipcMain} = require('electron');
const path = require('path');
const ipc = require("electron").ipcMain;
const { once } = require('events');
var fs = require('fs');
const regedit = require('regedit').promisified

var port80=""
var port443=""
var port3306=""

var fs = require('fs'); 
var dir = 'C://tempncacheckerfolder';

if (!fs.existsSync(dir)){
fs.mkdirSync(dir, { recursive: true });
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
         nodeIntegration: true,
            contextIsolation: false,

    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
 //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


var threeTierArchitecture =     function (port) {

return  new Promise(function(myResolve, myReject) {

var exec = require('child_process').exec;

var p = exec('netstat -ano | find "0.0:'+port+'"'+' | find "LISTEN"');
console.log("pp"+p.toString());
let pidToPass="";
var flag="false";
p.stdout.on('data', function(data) {

flag="true";
if(data!=""){
const netStatArray = data.split("LISTENING");
const lengthNetStatArray=netStatArray.length;
pid_id=netStatArray[lengthNetStatArray-1];
 pidToPass= pid_id.trim();
let typeToPass = "http";
//myReject();  // when error


myResolve([pidToPass, port]); // when successful

}
else{
  console.log("emmmmty");

}


});
p.stderr.on('data', function(data) {
   event.sender.send("port", "error :"+data );


});  
p.on('exit', function() {

if(flag=="false"){

}
else{

}
   
});


}


);

}





function getpid(pid,port){
//const sqlite3 = require('sqlite3').verbose();
//const db = new sqlite3.Database('./src/db/nca.db');

var execSync2 = require('child_process').execSync;

var getproccesname = execSync2('tasklist /FI "PID eq '+pid+'"');
;
//getproccesname.stdout.on('data', function(data) {
console.log(getproccesname.toString("utf8")); 
var data =getproccesname.toString("utf8");
const serivceName = data.split(".exe");
const sName=serivceName[0];
const x = sName.split("=");
const ss=x[x.length-1].trim();




}



ipc.on("threeTierArchitectureScan",   function(event) {

 event.sender.send("cmd", "netstat commands.." );

fs.writeFile('c://tempncacheckerfolder/filethreeTierArchitectureScan.txt', '', function(){
  console.log('done')
})



  console.log("Here");
threeTierArchitecture("443").then(
function(value) {
x1=value[1];
console.log("x1"+x1); 
try{
fs.appendFile("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", x1+" || ", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8"));
    var data =fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8");
    let port80 = data.includes("80");
let port443 = data.includes("443");
let port3306 = data.includes("3306");
if(port80==true && port3306==true ) {
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );

}
else if(port80==true && port3306==true ){
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );


}
else{
  event.sender.send("port", "compliant with NCA , only Web port(443) is open without DB port . PID is : "+value[0]  );
 
}
  }
});

}
catch(err){
  console.log(err);
}
getpid(value[0],value[1]);

 },
  function(error) { 
console.log(error);
  }
);

threeTierArchitecture("3306").then(
  function(value) {
    x2=value[1];

getpid(value[0],value[1]);

try{

fs.appendFile("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", x2+" || ", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append3306:",
      fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8"));
    var data =fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8");
    let port80 = data.includes("80");
let port443 = data.includes("443");
let port3306 = data.includes("3306");
if(port80==true && port3306==true ) {
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );

}
else if(port80==true && port3306==true ){
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );


}
else{
  event.sender.send("port", "compliant with NCA , only DB port(3306) is open without Web port . PID is : "+value[0]  );
 
}
  }
});


}
catch(err){

}

    },
  function(error) { 

  }
);

threeTierArchitecture("80").then(
  function(value) {
    x3=value[1];
getpid(value[0],value[1]);

//fs.mkdirSync(dir, { recursive: true }); 
try{
fs.appendFile("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", x3+" || ", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after appendxxx:",
      fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8"));
var data =fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8");
    let port80 = data.includes("80");
let port443 = data.includes("443");
let port3306 = data.includes("3306");
if(port80==true && port3306==true ) {
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );

}
else if(port80==true && port3306==true ){
 event.sender.send("port", "Non-compliant with NCA, web server and DB are installed on same server" );


}
else{
  event.sender.send("port", "compliant with NCA , only Web port(80) is open without DB port . PID is : "+value[0]  );
 
}

  }
});

}
catch(err){
  
}

   },
  function(error) { 

  }
);


var alldate =fs.readFileSync("c://tempncacheckerfolder/filethreeTierArchitectureScan.txt", "utf8");
console.log("alldd"+alldate.toString());


});





ipc.on("checkusb",  async   function(event) {


  const listResult = await regedit.list('HKLM\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR')
  console.log(listResult['HKLM\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR'].values['Start'].value);
  var usbValue=listResult['HKLM\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR'].values['Start'].value;
  if(usbValue<=3){
      event.sender.send("usbcallback", "Non-compliant with NCA (USB Enabled)" );

  }
  else if(usbValue==4){
      event.sender.send("usbcallback", "compliant with NCA (USB Disabled)" );

  }

  event.sender.send("cmd", "Searching for Hive : HKLM\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR\Start" ); 


});

ipc.on("localadmin",     function(event) {

var exec = require('child_process').exec;
var p = exec('net localgroup Administrators');
p.stdout.on('data', function(data) {
  event.sender.send("cmd", "net localgroup Administrators"); 
//console.log(data);
const listusers = data.split("Members");
if(typeof listusers[1] !== "undefined"){
//console.log(listusers[1].split("\r\n"));
memebersbefore=listusers[1].split("\r\n");
var usernameRegex = /^[A-Za-z0-9_.]+$/
var arraylistofusers = [];
for (let i = 0; i < memebersbefore.length; i++) {

if(usernameRegex.test(memebersbefore[i])){
  console.log("u:"+memebersbefore[i]);
  arraylistofusers.push(memebersbefore[i]);
}

}

}
if(typeof arraylistofusers!== "undefined"){
console.log(arraylistofusers.length);
if(arraylistofusers.length>=2){

  event.sender.send("admincallback", "Non-compliant with NCA, There Are "+arraylistofusers.length+" Admins in This Server; Privileged Access Management Is Not Properly Managed Well! <br/> <b>Admins List:</b> <br/>"  + arraylistofusers ); 

}
else if(arraylistofusers.length==1){
if(arraylistofusers[0].includes("Administrator")){
   event.sender.send("admincallback", "Compliant with NCA, there is Only One Admin Called Administrator; Default Admin Account");
}
else if(arraylistofusers.length==0){
   event.sender.send("admincallback", "Compliant with NCA, there is No local admin ");

}

}

  
}
});

p.stderr.on('data', function(data) {
event.sender.send("av", "Error in CMD , Error logs:"+data);

});

p.on('exit', function() {

});


});



ipc.on("av",     function(event) {



let data = "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";
  
fs.writeFile("c:/tempncacheckerfolder/avtest.txt", data, (err) => {
try{
  if (err){
    console.log(err);
    event.sender.send("cmd", "could not write the File" + err);
   event.sender.send("av", "we are not sure if there is AV installed or not!");

  }
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
   console.log(fs.readFileSync("c:/tempncacheckerfolder/avtest.txt", "utf8"));
   var d=fs.readFileSync("c:/tempncacheckerfolder/avtest.txt", "utf8");
   if(d!=""){
   event.sender.send("av", "Non-compliant with NCA, there is No AntiVirus Installed!"); 
   event.sender.send("cmd", "NCA Checker was trying to create a eicar file in c:/tempncacheckerfolder and read it but the AV stopped the process!");
 
   }
   
  }
}
catch(err){
   event.sender.send("av", "compliant with NCA, there is an AntiVirus Installed");
event.sender.send("cmd", "NCA Checker was trying to create a eicar file in c:/tempncacheckerfolder and read it but the AV stopped the process!");
  console.log(err);
}

});


});


ipc.on("cloud",     function(event) {
event.sender.send("cmd", "HTTP request for Google Drive+AWS+Dropbox");

const { net } = require('electron')
var times=Date.now()

const googledrive = "https://drive.google.com/";
                   event.sender.send("cloudcallback1", "Trying to connect to https://drive.google.com/"+times+", please wait");

   const request = net.request({
        method: 'GET',
        protocol: 'http:',
        hostname: 'drive.google.com',
        path: "/"+times,
        redirect: 'follow'
    });

request.setHeader("Expires","Sat, 26 Jul 1997 05:00:00 GMT")
    request.setHeader("pragma","no-cache")
   request.setHeader("Cache-Control","no-cache, must-revalidate")


      request.on('response', (response) => {
        
       console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
        response.on('data', (data) => {
         // console.log("dddd"+data);
       //   console.log("data"+data);
                   event.sender.send("cloudcallback1", "Non-compliant with NCA , the HTTP request to https://drive.google.com is Not Blocked!");

        });


 });


    request.on('finish', () => {
        console.log('Request is Finished')
    });
    request.on('abort', () => {
        console.log('Request is Aborted')
         event.sender.send("cloudcallback1", "compliant with NCA , the HTTP request to https://drive.google.com is Aborted");

    });
    request.on('error', (error) => {
       // if(error.includes("ERR_INTERNET_DISCONNECTED")==true){
               event.sender.send("cloudcallback1", "compliant with NCA , the connection with https://drive.google.com is not successfully! ");
        //}
    });
    request.on('close', (error) => {
        console.log('Last Transaction has occured')
    });
    //request.setHeader('Content-Type', 'application/json');

    request.end();
var times=Date.now()

//https://aws.amazon.com/
event.sender.send("cloudcallback2", "Trying to connect to https://aws.amazon.com/"+times+", please wait");



const aws = "https://aws.amazon.com/";

   const request2 = net.request({
        method: 'GET',
        protocol: 'http:',
        hostname: 'aws.amazon.com',
        path: "/"+times,
        redirect: 'follow'
    });
  // request2.setHeader("Cache-Control","no-cache, must-revalidate")
     request2.setHeader("Expires","Sat, 26 Jul 1997 05:00:00 GMT")
    request2.setHeader("pragma","no-cache")
   request2.setHeader("Cache-Control","no-cache, must-revalidate")

      request2.on('response', (response) => {
       console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
        response.on('data', (data) => {
       // console.log("data"+data);
                   event.sender.send("cloudcallback2", "Non-compliant with NCA , the HTTP request to https://aws.amazon.com is Not Blocked!");

        });


 });


    request2.on('finish', () => {
        console.log('Request is Finished')
    });
    request2.on('abort', () => {
        console.log('Request is Aborted')
         event.sender.send("cloudcallback2", "compliant with NCA , the HTTP request to https://aws.amazon.com is Aborted");

    });
    request2.on('error', (error) => {
       // if(error.includes("ERR_INTERNET_DISCONNECTED")==true){
               event.sender.send("cloudcallback2", "compliant with NCA , the connection with https://aws.amazon.com is not successfully! ");
        //}
    });
    request2.on('close', (error) => {
        console.log('Last Transaction has occured')
    });
    //request.setHeader('Content-Type', 'application/json');

    request2.end();



// www.dropbox.com 
var times=Date.now()

event.sender.send("cloudcallback3", "Trying to connect to https://www.dropbox.com/"+times+", please wait");

const dropbox = "https://www.dropbox.com";

   const request3 = net.request({
        method: 'GET',
        protocol: 'http:',
        hostname: 'dropbox.com',
        path: "/"+times,
        redirect: 'follow'
    });

    //request3.setHeader("Cache-Control","no-cache, must-revalidate")
     request3.setHeader("Expires","Sat, 26 Jul 1997 05:00:00 GMT")
    request3.setHeader("pragma","no-cache")
   request3.setHeader("Cache-Control","no-cache, must-revalidate")

      request3.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
        response.on('data', (data) => {
       //   console.log("data"+data);
                   event.sender.send("cloudcallback3", "Non-compliant with NCA , the HTTP request to https://www.dropbox.com is Not Blocked!");

        });


 });


    request3.on('finish', () => {
        console.log('Request is Finished')
    });
    request3.on('abort', () => {
        console.log('Request is Aborted')
         event.sender.send("cloudcallback3", "compliant with NCA , the HTTP request to https://www.dropbox.com is Aborted");

    });
    request3.on('error', (error) => {
       // if(error.includes("ERR_INTERNET_DISCONNECTED")==true){
               event.sender.send("cloudcallback3", "compliant with NCA , the connection with https://www.dropbox.com is not successfully!" );
        //}
    });
    request3.on('close', (error) => {
        console.log('Last Transaction has occured')
    });
    //request.setHeader('Content-Type', 'application/json');

    request3.end();
});



ipc.on("passcan", function(event) {


var exec = require('child_process').exec;
var p = exec("secedit.exe /export /cfg C:\\tempncacheckerfolder\\PasswordPolicy.txt");
p.stdout.on('data', function(data) {
  event.sender.send("cmd", "secedit.exe /export /cfg C:\\tempncacheckerfolder\\PasswordPolicy.txt" ); 
console.log("ffff"+data);

    var data =fs.readFileSync("C://tempncacheckerfolder/PasswordPolicy.txt", "utf8");;
//console.log("ffff"+data);
//event.sender.send("passcan", data);
var datax = data.split("\n");
//console.log("ffff"+datax[0]);
//for (let i = 0; i < datax.length; i++) {
 //console.log(datax[i]);
  //console.log(datax[i]+datax[i].includes("password"));

//if(datax[i].toString().includes("PasswordComplexity")==true){
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh"+datax[6]);
  var passwordc=datax[6];
//}
//}

if(passwordc.includes("0")==true){
 event.sender.send("passcan", "Non-compliant with NCA, PasswordComplexity is Set To ZERO which is mean the Password Complexity is not enabled!");
}
else {
event.sender.send("passcan", "compliant with NCA, PasswordComplexity is Enabled!"); 

}

});

p.stderr.on('data', function(data) {
 event.sender.send("passcan", "Error in CMD , Error logs:"+data);



});

p.on('exit', function() {

});



});


ipc.on("appscan", function(event) {

console.log("appscan");
event.sender.send("appscancallback", "Loading .. Please Wait!");

var exec = require('child_process').exec;
var p = exec("wmic /OUTPUT:c:\\tempncacheckerfolder\\listapps.txt product get name");
p.stdout.on('data', function(data) {


});

p.stderr.on('data', function(data) {
 event.sender.send("appscancallback", "Error in CMD , Error logs:"+data);



});

p.on('exit', function() {

event.sender.send("cmd", "wmic /OUTPUT:c:\\tempncacheckerfolder\listapps.txt product get name" ); 

var datax =fs.readFileSync("C://tempncacheckerfolder/listapps.txt", "utf8").toString();
var datay = datax.split("\n");
//event.sender.send("appscancallback", datay);
var htmlarray="";

for (let i = 1; i < datay.length; i++) {
  console.log(datay[i]);
 htmlarray=htmlarray+datay[i]+"<br/>";

}


event.sender.send("appscancallback", htmlarray);


});





});
