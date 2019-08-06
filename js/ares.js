// Is this IE?
      var isIE = (function() { 
         var div = document.createElement('div');
         div.innerHTML = '<!--[if lt IE 9]><marquee></marquee><![endif]-->';
         return (div.getElementsByTagName('marquee').length === 1);         
      }());

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-2700108-13', 'auto');
ga('send', 'pageview');
ga('set', 'anonymizeIp', true);

 function createCookie(name,value,days)
      {
      	if (days) {
      		var date = new Date();
      		date.setTime(date.getTime()+(days*24*60*60*1000));
      		var expires = "; expires="+date.toGMTString();
      	}
      	else var expires = "";
      	document.cookie = name+"="+value+expires+"; path=/";
      	$(".close").closest(".update-info").css("display","none");
      }

      function readCookie(name)
      {
      	var nameEQ = name + "=";
      	var ca = document.cookie.split(';');
      	for(var i=0;i < ca.length;i++) {
      		var c = ca[i];
      		while (c.charAt(0)==' ') c = c.substring(1,c.length);
      		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      	}
      	return null;
      }

$(document).ready(function() {
		// Sub navigation 
		// Comment for testing

		$("#lib-subnav-toggle").click(function() {
			$(this).next("#lib-subnav-wrap").slideToggle(400);
		});

		var itemURLLink, itemTextLink;
		
		
		if($('.statusNormal').length > 0) {
			$(".statusNormal").addClass("alert alert-warning");

			var statusText = $(".statusNormal").text();
			var stupidBlankStatus = $("#status0").text();
	        console.log(statusText);
			if(stupidBlankStatus == "") {
				$("#status0").hide();
			}
			if(statusText.indexOf("Your User Information has been saved") >= 0) {
				$('#statusContainer').prepend('<div class="alert alert-success"><p>Your user information has been updated.</div>');
			}

			if(statusText == "Your password is incorrect.") {
				$('#status').html('<div class="alert alert-danger">Your password is incorrect.</div>');
			}

			if(statusText == "When Finished Editing, press the Submit Information button below.") {
				$(".statusNormal").hide();
			}
			if(statusText == "Your item was added to ares.") {
				$(".statusNormal").text("Thank you! We'll process your item soon.");
			}
			if(statusText == "Choose an option from the choices below.") {
				$(".statusNormal").hide();
			}
			if(statusText == "Choose a file to upload") {
				$(".statusNormal").hide();
			}
			if(statusText == "Please logon") {
				$(".statusNormal").text("Your session has expired. Please log in again.");
			}
	        if(statusText == "Your course was removed. If this was done in error, please contact the reserve desk staff.") {
	            $(".statusNormal").text('<b>Your class was removed.</b><br />Didn&#8217;t mean to remove it? Get in touch so we can help: <a href="mailto:ereserve@gvsu.edu">ereserve@gvsu.edu</a> or (616) 331-2617.');
	        }
		}
		
		
		
		if($(".tableCourseValidation").length > 0) {
		
			$(".tableCourseValidation").find("table").find("a").addClass("lib-button-small-grey");
			console.write("Yup.");
		}
		

		if($("table#courseInfo").length > 0) { // Make item listing more humane - link to the item directly!

			$("table#courseInfo").find("tbody").find("tr").each(function() {

				itemURLLink = $(this).find("a").attr("href"); // get link value to item

				if(typeof itemURLLink === "undefined" || itemURLLink === null) { // item is a hard copy

					var itemJSLink = $(this).find("td").attr("onclick").toString().match(/window\.location\s*=\s*['"]([^'"]*)['"]/)[1];
					itemURLLink = itemJSLink;
					
				}

				itemTextLink = $(this).find("td").find("strong").text();

				$(this).find("td").find("strong").html('<a href="' + itemURLLink + '" target="_blank" title="Read this item">' + itemTextLink + '</a>');

				$(this).find("td").removeAttr("onclick");

			});

		}
		
		$("#lib-ares-address-toggle").html('<span class="btn btn-default">Add Address</span>');
		$(".ares-mailing-address").hide();
		$("#lib-ares-address-toggle").click(function() {
		$(".ares-mailing-address").slideToggle(400);
		});
		
		$('a.removeCourse').click(function() {
			confirm('Are you sure you want to remove this class?');
		});
		$('span.subscribe').click(function() {
			confirm("We'll email you when new items become available.");
		});
		$('span.unsubscribe').click(function() {
			confirm("We won't email you when new items become available.");
		});
		
		$("#new-semester").find("select#Semester").find("option:contains('Permanent Reserve')").next("option").attr("selected", "selected");
		$("#new-pickup").find("select#PickupLocation").find("option:contains('Mary Idema Pew Library')").attr("selected", "selected");


		if($("div#tabs").length > 0) {
			$('#tabs div.tab-content').hide();
			$('#tabs div.tab-content:first').show();
			$('#tabs ul li:first').addClass('active');
			$('#tabs ul li a').click(function(){ 
				$('#tabs ul li').removeClass('active');
				$(this).parent().addClass('active'); 
				var currentTab = $(this).attr('href'); 
				$('#tabs div.tab-content').hide();
				$(currentTab).show();
				return false;
			});
		}
        
        if($('#student_classes').length > 0) { // Student Home Screen 
                         
            var classesMessage = $('#student_classes').find('table').find('tr.row-message').text();
            
             console.log('On student page: ' + classesMessage);
             
            if(classesMessage.indexOf('classes found') > 0) {
                console.log('Student has no classes. Hiding empty table and showing help tips.');
                
                $('#student_classes').hide();
                $('#no_classes').show();
            }
            
        } 

        // Add clone links to listings
        if($('table.instructor-table').length > 0) {
        	$('table.instructor-table').find('a').each(function() { 
				var baseLink = $(this).attr('href');

				// Replace the form value with the one for cloning a class
				var cloneLink = baseLink.replace('Form=60', 'Form=114');

				// Add new cell at the end of the table for Cloning the course
				$(this).closest('tr').find('td:last-child').prepend('<a href="' + cloneLink + '" class="clone-link btn btn-default" style="float: right;font-size:.85em;">Clone Class</a>');

			});
        }

        
        if($("#current_classes").length > 0) { // Instructor Home Screen
            
            var classesMessage = $("#current_classes").find('table').find("tr.row-message").text();
            var waitingMessage = $('#waiting_for').find('table').find('tr.row-message').text();


           if($('.table-action').length > 0) { // Homepage, Course Home Links need fixin'

				console.log('Homepage, Course Home Links need fixing.');

				$('.table-action').find('a').each(function() {
					$(this).addClass('btn btn-primary');
				});
			} 
            
            if(classesMessage.indexOf('classes found') > 0) {
                console.log('Instructor has no classes. Hiding empty table and showing help tips.');
                
                $('#current_classes').hide();
                $('#no_classes').show();
            }
            
            console.log(waitingMessage);
            
              if(waitingMessage == "No classes found") {
                  
                console.log('Not waiting on materials from instructor. Hiding empty table.');
                
                $('#waiting_for').hide();
                
            }
            
        }

        // Prepopulate Instructor Name in Create Course Screen


		if(($('#CourseInstructor').length > 0) && ($('#CourseInstructor').val() == '')) {

			// Load user account page in the background to get user name

			$('#renewalHack').load('https://gvsu.ares.atlas-sys.com/ares/ares.dll?Action=20&Form=81 #nameInfo', function() {
  	
  					console.log('Load was performed.');
					// Now grab the info

					var userFirstName = $('#renewalHack').find('#FirstName').text();
					var userLastName = $('#renewalHack').find('#LastName').text();

					$('#CourseInstructor').val(userLastName + ', ' + userFirstName);
			});

		}


        
        

		if($("#provide-div").length > 0) { // Instructor add items screen

			// Remove unncessary fields
			
			var hardCopyDiv = $("#hardcopyitems").html();
			$("#hardcopyitems").html("&nbsp;");

			
			var bookDetails = $(".js-fallback-book").html();
			var publisher = $("#publisher").html();
			
			$(".js-fallback-book").html(""); // HTML instead of remove for IE7
			
			// Swap out Journal dates for publisher field & make the PubDate field Journal dates
			
			$("#journal-dates").html(publisher);
			$("#publication-date-field").find("input").attr("id","JournalYear").attr("name","JournalYear");
			$("#publication-date-field").find("label").attr("for","JournalYear");
			
			var serialDetails = $(".js-fallback-article").html();
			
			$("#supply-url").hide();
			$("#supply-campus").hide();
			
			// Make ISBN field hidden by default and add a label

			$("#isbn-div").prepend('<span id="isbn-toggle">+ Add More Details</span>').css("color","#00549D").css("text-transform", "capitalize").css("cursor", "pointer").css("margin-bottom","1.2em").css("margin-top","1em");
			$("#number-wrapper").hide();
			$("#isbn-toggle").click(function() {
				$(this).next("#number-wrapper").slideToggle(400);
			});
			
			

			$("#article-toggle").click(function() {
				// Toggle between serial and monograph
				var checkedbox = $(this).is(":checked");
				if(checkedbox == true) {
					$("#article-book-chapter").slideToggle(400);
					$(".js-fallback-article").html(serialDetails);
					$(".js-fallback-book").html("");
					$("#publication-date-field").find("input").attr("id","JournalYear").attr("name","JournalYear");
					$("#publication-date-field").find("label").attr("for","JournalYear");
					$('label[for="Title"]').html('<span class="req">*</span><span class="Valid">Book, Journal, or work title</span>');
					$('#StaffSearch').attr("checked", "");
					$('#File').attr("checked", "checked");
					$("#supply-file").show();
					$("#provide-div").hide();
					CallNo = $("#CallNoDiv2").html();
					$("#CallNoDiv").html(CallNo);
					$('label[for="StaffSearch"]').text('Scan Library Copy');
					document.getElementById('format').value = 'Article';
					document.getElementById('ItemType').value = 'SER';

				} else {
					document.getElementById('ArticleTitle').value = '';
					document.getElementById('format').value = 'Book';
					document.getElementById('ItemType').value = 'MON';
					$('label[for="Title"]').html('<span class="req">*</span><span class="Valid">Book, DVD, CD, or other title</span>');
					$("#publication-date-field").find("input").attr("id","PubDate").attr("name","PubDate");
					$("#publication-date-field").find("label").attr("for","PubDate");
					$(".js-fallback-book").html(bookDetails);
					$(".js-fallback-article").html("");
					$('#StaffSearch').attr("checked", "checked");
					$('label[for="StaffSearch"]').text('Use Library Copy');
					$("#article-book-chapter").slideToggle(400);
					$("#provide-div").show();
					CallNo = $("#CallNoDiv").html();
					$("#provide-div").html('<div class="line row row-gutter" style="margin-top:1em;"><div class="span2 col-8 col-sm-12"><div class="cms-chunk-inner"><p>If the library owns or has access to this item, we&#8217;ll use our copy. If not, we&#8217;ll do our best to get a copy we can use. If you know the call number, that will help us find the item more quickly.</p></div></div><div id="CallNoDiv2" class="span1 col-4 col-sm-12"><div class="cms-chunk-inner">' + CallNo + '</div></div><style>label[for="CallNumber"]{margin-top:0 !important;}</div>');
					$("#CallNoDiv").html("&nbsp;");
					$("#supply-file").hide();

				}	
			});
			
			// Edit reserve item toggle
			
			if($("#edit-reserve-item").length > 0) {
				$("#button-suffix").hide();
				if($("#supply-url").find("input").val().length > 0) {
					$("#supply-url").show();
				}
			}
			
			$("#edit-reserve-item").hide();
			$("#None").click(function() {
				$("#edit-reserve-item").slideToggle(400);
				var checkedlink = $(this).is(":checked");
				if(checkedlink == true) {
				$("#edit-reserve-item").find("input[type='radio']").removeAttr("checked");
				$("#button-suffix").hide();
				}
			});
			
			var CallNo = "";

			$("#WebLink").click(function(){ // Show URL field, since they want the item linksed
				var checkedlink = $(this).is(":checked");
				if(checkedlink == true) {
					$("#supply-url").show();
					$("#supply-file").hide();
					$("#button-suffix").hide();
					$("#supply-campus").hide();
					$("#provide-div").hide();
					if(CallNo !== "") {
						$("#CallNoDiv").html(CallNo);
					}
				} else {
					$("#supply-url").hide();
					document.getElementById("URL").value = ''; // Clear the value
				}
			});

			$("#WillDeliver").click(function() {
				var checkedlink = $(this).is(":checked");
				if(checkedlink == true) {
				
					if($("#article-toggle").is(":checked")) {
						// Don't need hard copy things
						$("#hardcopyitems").html("&nbsp;");
					} else {
						$("#hardcopyitems").html(hardCopyDiv);
						$("select#PickupLocation").find("option:contains('Zumberge Library')").text("Mary Idema Pew Library @ Allendale");
					}
				
					$("#supply-campus").show();
					$("#supply-file").hide();
					$("#supply-url").hide();
					$("#button-suffix").hide();
					$("#provide-div").hide();
					if(CallNo !== "") {
						$("#CallNoDiv").html(CallNo);
					}
					document.getElementById("URL").value = ''; // Clear the value
				} else {
					$("#supply-campus").hide();
				}
			});

			$("#File").click(function() {
				var checkedlink = $(this).is(":checked");
				if(checkedlink == true) {
					$("#supply-campus").hide();
					$("#supply-url").hide();
					$("#supply-file").show();
					$("#provide-div").hide();
					if(CallNo !== "") {
						$("#CallNoDiv").html(CallNo);
					}
					document.getElementById("URL").value = ''; // Clear the value
					$("#button-suffix").show();
					
				} else {
					$("#button-suffix").hide();
				}
			});

			$("#StaffSearch").click(function() {
				var checkedlink = $(this).is(":checked");
				if(checkedlink == true) {
					$("#supply-campus").hide();
					$("#supply-url").hide();
					$("#supply-file").hide();
					document.getElementById("URL").value = ''; // Clear the value
					$("#provide-div").show();
					CallNo = $("#CallNoDiv").html();
					$("#provide-div").html('<div class="line row row-gutter"><div class="span2 col-8 col-sm-12"><p>If the library owns or has access to this item, we&#8217;ll use our copy. If not, we&#8217;ll do our best to get a copy we can use. If you know the call number, that will help us find the item more quickly.</p></div><div class="span1 col-4 col-sm-12 lastUnit">' + CallNo + '</div></div>');
					$("#CallNoDiv").html("&nbsp;");
					// Show a "loading" animation

					// Load catalog search in hidden div
						// Is there a call number? An ISBN/ISSN? Otherwise use Title

					// Parse that div for relevant information

					// Display the results, give them a chance to say that is not their item but populate the form

					// Give them other options if results are null

				} else {
					if(CallNo !== "") {
						$("#CallNoDiv").html(CallNo);
					}
				}
			});

		}
		
		if($(".ValidationError").length > 0) {
		
			$("span.ValidationError").append(" is a required field.");
			$(".statusNormal").hide();
			var inputError = $("span.ValidationError").parent().parent().find("input");
			inputError.css("background-color", "#ffc");
			inputError.focus();
			
			// Show the appropriate supply selection
			
			if($("#WebLink").is(":checked")) {
				$("#supply-url").show();
			}
			
			if($("#WillDeliver").is(":checked")) {
				$("#supply-campus").show();
			}
			
			if($("#StaffSearch").is(":checked")) {
				$("#provide-div").show();
					CallNo = $("#CallNoDiv").html();
					$("#provide-div").html('<div class="line row row-gutter"><div class="span2 col-8 col-sm-12"><p>If the library owns or has access to this item, we&#8217;ll use our copy. If not, we&#8217;ll do our best to get a copy we can use. If you know the call number, that will help us find the item more quickly.</p></div><div class="span1 col-4 col-sm-12">' + CallNo + '</div></div>');
					$("#CallNoDiv").html("&nbsp;");
			}
		
		}
		
		// Show password boxes if Access password option is checked
		
		$("#hidden-password").hide();
		// Check password box on edit course screen if password had been supplied
		
		if($("#ud-first-password").length > 0) {
			if($("#ud-first-password").val().length > 0) { // There was a password
			
				var coursePass = $("#ud-first-password").val();

				$("#UseCoursePassword").attr("checked", "checked");
				$("#hidden-password").show(); 
			}
		}
		
		$("#item-delete-button").click(function() {
			confirm("Are you sure you want to delete this item?");
		});
		
		$("#UseCoursePassword").click(function() {
		var checkedbox = $(this).is(":checked");
		if(checkedbox == true) {
				$("#hidden-password").slideToggle(400);
			} else {
				document.getElementById('ud-first-password').value = '';
				$("#hidden-password").slideToggle(400);
			}	
		});
		
		// Check to see if passwords match
		
		// Make tables more usable on small screens by replicating the course name in table header

		if(($(".instructor").length > 0) && ($("#courseInfo").length > 0)) {

			courseName = $(".instructor").find("h2").text();
			courseName = courseName.trim();

			$("#courseInfo").find("tr.row-header").find("th").append(" for " + courseName);
		}

		if($("#SearchResults").length > 0) {


			$(".course-search-results").find("table#SearchResults").find("tbody tr").each(function() {

				// Check for empty rows

				$(this).find("td:nth-of-type(2)").each(function() {

					if($(this).html() == '&nbsp;') {
						$(this).parent().css("display","none");
					}

				});

			});

		}

/* Function for improving Course Cloning */

if($('#addClassModal').length > 0) {

	var prevCourseList = '<div class="modal-box"><p style="margin-top:2em;">Course Reserves are moving to Blackboard beginning in Fall 2019. Please visit the University Libraries&#8217; <a href="https://www.gvsu.edu/library/coursereserve">new Course Reserves page</a> for more details.</p><p><span class="btn btn-default" style="><a href="https://www.gvsu.edu/library/coursereserve">Learn More</a></span>&nbsp;<span class="close-button" style="cursor:pointer;">[x] Close</span></p></div>';
			
      // Add the current classes to the modal window
      $('#addClassModal').html(prevCourseList);

      $('.clone-link').hide();

      // Change class on addClassBtn
      $('.addClassBtn').removeClass('btn-primary').addClass('btn-default').text('Add Class');
	  
}

	  // Set listener on Add Classes links
	  $('.addClassBtn').click(function(e) {
	  	e.preventDefault();
	  	$('#addClassModal').show();

	  });

	  // Set listener on Close links
	  $('.close-button').click(function(e) {
	  	$('#addClassModal').hide();

	  });
	  

/*
 if(readCookie('nomyName') !== 'prevent') {
 	 $('.close-myName').click(function() {
      createCookie('nomyName','prevent',7);
      $('#myName-banner').hide();
    });
 	 console.log('Showing myName banner');
 } else {
  	$('#myName-banner').hide();
  	console.log('Cookie preventing myName banner.');
 }
 */
 $('#myName-banner').hide();
		
});