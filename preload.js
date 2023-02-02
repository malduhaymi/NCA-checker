const ipc = require("electron").ipcRenderer;
// read file config
//var userid="";
function threeTierArchitectureScan(){
//	document.getElementById("three").innerHTML="";
	document.getElementById("three").style.display="block"; 


document.getElementById("usb").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 

document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 


 ipc.send("threeTierArchitectureScan");


}

function checkusb(){
 ipc.send("checkusb");

}
function localadmin(){
 ipc.send("localadmin");

}

function av(){
ipc.send("av");

}

function cloud(){
ipc.send("cloud");	
}


function passcan(){
ipc.send("passcan");		
}

function appscan(){
ipc.send("appscan");			
}

 ipc.on("port", (event, args) => {

 	console.log("argsxxx"+args);
 //document.getElementById("three").innerHTML=""
document.getElementById("usb").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 

document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="block"; 

document.getElementById("three").innerHTML=args


});


 ipc.on("usbcallback", (event, args) => {
 	console.log("args"+args);
 	document.getElementById("usb").style.display="block"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 

document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 

 //document.getElementById("three").innerHTML=""
document.getElementById("usb").innerHTML=args


});


 ipc.on("admincallback", (event, args) => {
 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
 	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="block"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 


document.getElementById("admincallback").innerHTML=args




});

  ipc.on("cmd", (event, args) => {
 	console.log("args"+args);
if(args.includes("netstat commands")){
 document.getElementById("three").innerHTML="Ports (80,443,3306) Are Not Opened in This Server!";
}
//document.getElementById("three").innerHTML="";

document.getElementById("cmd").innerHTML=args


});

ipc.on("av", (event, args) => {
 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="block"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 

document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 


document.getElementById("av").innerHTML=args


});


ipc.on("cloudcallback1", (event, args) => {

 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="block"; 
//document.getElementById("cmd").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 
//document.getElementById("cloudcallback2").style.display="none"; 

document.getElementById("cloudcallback1").innerHTML=args

});

ipc.on("cloudcallback2", (event, args) => {

 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback2").style.display="block"; 
//document.getElementById("cmd").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 
//document.getElementById("cloudcallback1").style.display="none"; 

document.getElementById("cloudcallback2").innerHTML=args

});


ipc.on("cloudcallback3", (event, args) => {

 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback3").style.display="block"; 
//document.getElementById("cmd").style.display="none"; 
document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="none"; 
//document.getElementById("cloudcallback1").style.display="none";
document.getElementById("cloudcallback3").innerHTML=args

});

ipc.on("passcan", (event, args) => {

 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 

document.getElementById("passcan").style.display="block"; 
document.getElementById("appscan").style.display="none"; 

//document.getElementById("cmd").style.display="none"; 

document.getElementById("passcan").innerHTML=args

});


ipc.on("appscancallback", (event, args) => {

 	console.log("args"+args);
 //document.getElementById("three").innerHTML=""
  	document.getElementById("usb").style.display="none"; 
document.getElementById("admincallback").style.display="none"; 
document.getElementById("av").style.display="none"; 
document.getElementById("three").style.display="none"; 
document.getElementById("cloudcallback1").style.display="none"; 
document.getElementById("cloudcallback2").style.display="none"; 
document.getElementById("cloudcallback3").style.display="none"; 

document.getElementById("passcan").style.display="none"; 
document.getElementById("appscan").style.display="block"; 

//document.getElementById("cmd").style.display="none"; 

document.getElementById("appscan").innerHTML  =args

});
