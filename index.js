// JavaScript Document

var $ = function(id) {
	return document.getElementById(id);
}
//
//var downLoad = function() {
//	alert("You have VERY SLOW internet. This is going to take a while. I suggest you take a 15 min Yoga break and then go get coffee!");
//};
//
//$('download-boundaries').onclick = downLoad;


$(document).ready(function() {
var $easyzoom = $('.easyzoom').easyZoom();
});

function circleofdeath() {
	$("alert").style.display ="block";
}

function diecircleofdeath() {
	$("alert").style.display = "none";
}

//blah blah
