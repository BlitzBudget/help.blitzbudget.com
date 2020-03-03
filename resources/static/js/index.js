"use strict";
(function scopeWrapper($) {
	/**
	* Autocomplete Module
	**/
	function autocomplete(inp, arr, scrollWrapEl) {
		  /*Removes a function when someone writes in the text field:*/
		  inp.removeEventListener("input", inputTriggerAutoFill);
		  /*Removes a function presses a key on the keyboard:*/
		  inp.removeEventListener("keydown", keydownAutoCompleteTrigger);
		  /*the autocomplete function takes two arguments,
		  the text field element and an array of possible autocompleted values:*/
		  let currentFocus;
		  /*execute a function when someone writes in the text field:*/
		  inp.addEventListener("input", inputTriggerAutoFill);
		  /*execute a function presses a key on the keyboard:*/
		  inp.addEventListener("keydown", keydownAutoCompleteTrigger);
		  function addActive(x) {
		    /*a function to classify an item as "active":*/
		    if (!x) return false;
		    /*start by removing the "active" class on all items:*/
		    removeActive(x);
		    if (currentFocus >= x.length) currentFocus = 0;
		    if (currentFocus < 0) currentFocus = (x.length - 1);
		    /*add class "autocomplete-active":*/
		    x[currentFocus].classList.add("autocomplete-active");
		    // Change focus of the element
		    x[currentFocus].focus();
		  }
		  function removeActive(x) {
		    /*a function to remove the "active" class from all autocomplete items:*/
		    for (let i = 0, len = x.length; i < len; i++) {
		      x[i].classList.remove("autocomplete-active");
		    }
		  }
		  function closeAllLists(elmnt) {
		    /*close all autocomplete lists in the document,
		    except the one passed as an argument:*/
		    let x = document.getElementsByClassName("autocomplete-items");
		    for (let i = 0, len = x.length; i < len; i++) {
		      if (elmnt != x[i] && elmnt != inp) {
		        x[i].parentNode.removeChild(x[i]);
		      }
		    }
		  }
	      /*
		  * Auto Complete Input Trigger function 
		  */
		  function inputTriggerAutoFill(e) {
		      let a, b, i, val = this.value,  len = arr.length, upperVal, startsWithChar, regVal;
		      /*close any already open lists of autocompleted values*/
		      closeAllLists();
		      if (!val) {
		      	len = arr.length < 5 ? arr.length : 5;
		      } else {
		      	upperVal = val.toUpperCase()
		      }
		      currentFocus = -1;
		      /*create a DIV element that will contain the items (values):*/
		      a = document.createElement("DIV");
		      a.setAttribute("id", this.id + "autocomplete-list");
		      a.setAttribute("class", "autocomplete-items");
		      /*append the DIV element as a child of the autocomplete container:*/
		      this.parentNode.appendChild(a);
		      /*for each item in the array...*/
		      for (let i = 0; i < len; i++) {
		      	let autoFilEl = false;
			  	if(!val) {
			  		autoFilEl = true;
			  	} else {
			  		/* check if the starting characters match */
			        startsWithChar = arr[i].substr(0, val.length).toUpperCase() == upperVal;
			        /* build a regex with the value entered */
			        regVal = new RegExp(upperVal,"g");
			        /*check if the item starts with the same letters as the text field value:*/
			        if (startsWithChar || includesStr(arr[i].toUpperCase(), upperVal)) {
			        	autoFilEl = true;
			        }	
			  	}

			  	// Confinue with the iteration
			  	if(!autoFilEl) {
			  		continue;
			  	}
		        
		        /*create a DIV element for each matching element:*/
		        b = document.createElement("DIV");
		        b.classList.add("dropdown-item");
		        /*make the matching letters bold:*/
		        if(startsWithChar) {
		          	b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>" + arr[i].substr(val.length);
		        } else if(!val) {
		        	b.innerHTML = arr[i];
		        } else {
		          	let startPos = regVal.exec(arr[i].toUpperCase()).index;
		          	let startPos2 = startPos + val.length;
		          	b.innerHTML = arr[i].substr(0, startPos) + "<strong>" + arr[i].substr(startPos, val.length) + "</strong>" + arr[i].substr(startPos2);
		        }
		        /*insert a input field that will hold the current array item's value:*/
		        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		        /*execute a function when someone clicks on the item value (DIV element):*/
		        b.addEventListener("click", function(e) {
		              /*insert the value for the autocomplete text field:*/
		              if(isNotEmpty(inp)) inp.value = this.getElementsByTagName("input")[0].value;
		              /*close the list of autocompleted values,
		              (or any other open lists of autocompleted values:*/
		              closeAllLists();
		        });
		        a.appendChild(b);
		      }
		  }

		  /*
		  *	Autocomplete Key down event
		  */
		  function keydownAutoCompleteTrigger(e) {
		  	  let wrapClassId = this.id + "autocomplete-list";
		      let x = document.getElementById(wrapClassId);
		      if (x) x = x.getElementsByTagName("div");
		      if (e.keyCode == 40) {
		        /*If the arrow DOWN key is pressed,
		        increase the currentFocus variable:*/
		        currentFocus++;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 38) { //up
		        /*If the arrow UP key is pressed,
		        decrease the currentFocus variable:*/
		        currentFocus--;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 13) {
		        /*If the ENTER key is pressed, prevent the form from being submitted,*/
		        e.preventDefault();
		        if (currentFocus > -1) {
		          /*and simulate a click on the "active" item:*/
		          if (x) x[currentFocus].click();
		        }
		      }
		      /* set equal to the position of the selected element minus the height of scrolling div */
		      let scrollToEl = $("#" + scrollWrapEl);
		      /* set to top */
		      scrollToEl.scrollTop(0);
		      let ddItemac = $('#' + wrapClassId + ' .autocomplete-active');
		      /* Chceck if elements are present, then scrolls to them */
		      if(ddItemac && scrollToEl && ddItemac.offset() && scrollToEl.offset()) {
	    	  	scrollToEl.scrollTop(ddItemac.offset().top - scrollToEl.offset().top + scrollToEl.scrollTop());
		      }
		  }
	}

	/*
	*	Country Drop down Populate
	*/

	/*An array containing all the country names in the world:*/
	let countries = [];
	let lToC = {};
	let locToCou = window.localeToCountry.localeToCountry;
	for(let i = 0, l = locToCou.length; i < l; i++) {
		// Map of country and locale to be used later
		lToC[locToCou[i].name] = locToCou[i].country
		// To be used for Auto complete
		countries.push(locToCou[i].name);
	}

	/*initiate the autocomplete function on the "searchArticle" element, and pass along the countries array as possible autocomplete values:*/
	autocomplete(document.getElementById("searchArticle"), countries, "searchArticleDD");

	// Close all lists within element
	function closeAllDDLists(elmnt) {
	    /*close all autocomplete lists in the document,
	    except the one passed as an argument:*/
	    let x = elmnt.getElementsByClassName("autocomplete-items");
	    for (let i = 0, len = x.length; i < len; i++) {
	      if (elmnt != x[i]) {
	        x[i].parentNode.removeChild(x[i]);
	      }
	    }
	}

	// On click drop down btn of country search
	$(document).on("click", ".dropdown-item" , function(event){
		let chooseCtyId = 'searchArticleautocomplete-list';
		let id = this.parentElement.id;
		// Choose country DD update locale
		if(isEqual(id, chooseCtyId))  {
			let valObj = { parentElId : "searchArticle", valueChosen : this.lastChild.value};
			updateUserAttr('locale', locale +  lToC[this.lastChild.value], this, valObj);
		} 
	});

	// Update user attributes
	function updateUserAttr(param, paramVal, event, valObj) {
	}

}(jQuery));
		