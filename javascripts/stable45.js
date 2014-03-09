<!--
	/*
	Page Author: Carlis Moore
	Base Content: Most of this javascript is taken from a previous project, Storytime with Revel Romp. <http://storytime.revelromp.com/storytime.js>
	Creation Date: 8 March 2014
	Last Modified:  8 March 2014
	Purpose: Utility code to help keep sections on the site uniform more easily. Headers and footers, for example.
	*/
	
		function lastUpdated()
	{
		var lastMod = document.lastModified.substring(0,10);
		//footer.innerHTML = "<p>This document was last modified "+lastMod+".</p>";
		return "&gt;This document was last modified "+lastMod+"&lt;";
	}
	
	function displayCopyrightAndLastUpdatedDetailed()
	{
		var output = "";
		output += "<p>";
		output += "The HTML, CSS, and Javascript code presenting this page to you are &copy; Carlis Moore 2014 unless otherwise noted in the source. The stories presented here are works of fiction and are not intended to be taken as truths."
		output += "<br />";
		output += "&gt;This document was last modified "+ document.lastModified.substring(0,10)+ "&lt;";
		output += "</p>";
		footer.innerHTML += output;
	}
	
	function displayCopyrightAndLastUpdated()
	{
		var output = "";
		output += "<p>";
		output += "This page is &copy; Carlis Moore 2014 unless otherwise noted. The stories here are fiction."
		output += "<br />";
		output += "&gt;This document was last modified "+ document.lastModified.substring(0,10)+ "&lt;";
		output += "</p>";
		footer.innerHTML += output;
	}
	
	//We're going to call this to replace the navbar if javascript is enabled. If it isn't, we'll already have links included in the section we're replacing anyway to deal with it.
	function getQuicknavLinks()
	{
		var output = "";
		output += '<a href="about.htm">About</a>&nbsp;~&nbsp;';
		output += '<a href="characters.htm">Characters</a>&nbsp;~&nbsp;' ;
		output += '<a href="contact.htm">Contact</a>&nbsp;~&nbsp;';
		output += '<a href="fun.htm">FUN!</a>&nbsp;~&nbsp;';
		output += '<a href="index.htm">Home</a>&nbsp;~&nbsp;';
		output += '<a href="setting.htm">Setting</a>&nbsp;~&nbsp;';
		output += '<a href="stories.htm">Stories</a>&nbsp;~&nbsp;';
		output += '<a href="roleplay.htm">Roleplay</a>';
		
		
		return output;
	}
	
	//This next function is based on a discussion over on stackoverflow. Their implmentation is a good bit more thorough than mine. Reference: <http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser>
	function isUserOnMobile() 
	{ 
		if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Windows Phone/i))
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
//-->

  
