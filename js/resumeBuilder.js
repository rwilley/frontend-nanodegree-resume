//var name = "Rob Willey";
//var formattedName = HTMLheaderName.replace("%data%", name);


//var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").append(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
	"name": "Rob Willey",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to my resume! Please explore and feel free to contact me with any questions.",
	"contacts": {
		"mobile": "612-226-8448",
		"email": "rwilleyart@gmail.com",
		"github": "rwilley",
		"twitter": "@rwilley",
		"location": "Washington, DC"
	},
	"skills": [
		"Website design and creation", "Search Engine Optimization", "User Experience"
		],
	"biopic": "images/profile.jpg"
	//display: function taking no paramaters
};
bio.display = function(){
	//At top is another way, that looks better, to display role and name
	var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);
	//var formattedContacts = HTMLcontactGeneric.replace("%d%", contacts); NOT sure what this Generic thing is for
	//$("#header").append(formattedContacts);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGit);
	$("#footerContacts").append(formattedGit);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	//RESTART with rest of contact info
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

var work = {
	"jobs": [
		{
			"employer": "George Mason University School of Law",
			"title": "Research Services Specialist",
			"location": "Arlington, Virginia",
			"dates": "June 2010 - Present",
			"description": "Manage the Circulation Desk at the Law Library; Hire, train and supervise staff of 10 – 12 student workers; Draft and publish guides for library patrons; Process interlibrary loan requests for students and faculty; Assist students and members of the public in their use of library materials; Teach research classes in legal writing program; Participate in collection development; Serve as a liaison in the library's Faculty Liaison Program."
		},
		{
			"employer": "George Mason University School of Law",
			"title": "Green Bag Journal Fellow",
			"location": "Arlington, Virginia",
			"dates": "April 2009 - July 2010",
			"description": "Managed day-to-day activities of The Green Bag journal (general law journal featuring eclectic mix of readable legal scholarship: www.greenbag.org); Worked with publishers and authors to secure reprint copyright licenses; Conducted research on a range of issues from copyright status of works to law journal circulation numbers."
		},
		{
			"employer": "George Mason University School of Law",
			"title": "Writing Fellow",
			"location": "Arlington, Virginia",
			"dates": "Fall 2008 - Spring 2009",
			"description": "Taught First Year legal research and writing class; Designed lectures and projects; Graded students’ written work."
		},
		{
			"employer": "U.S. Department of Justice, Professional Responsibility Advisory Office",
			"title": "SLIP Intern",
			"location": "Washington, D.C.",
			"dates": "Summer 2008",
			"description": "Conducted in-depth research on ethics issues; Drafted memoranda and opinion letters."
		},
		{
			"employer": "U.S. Department of Justice, Civil Rights Division",
			"title": "Intern",
			"location": "Washington, D.C.",
			"dates": "Spring 2008",
			"description": "Researched and wrote memoranda on First Amendment issues, with focus on religion clause."
		},
		{
			"employer": "Law Offices of Leonard P. Buscemi",
			"title": "Law Clerk",
			"location": "Arlington, Virginia",
			"dates": "Fall 2007 - Spring 2008",
			"description": "Researched several tort claims; Drafted complaints, motions, and discovery documents."
		},
		{
			"employer": "Special Counsel to the Governor",
			"title": "Law Clerk",
			"location": "Arlington, Virginia",
			"dates": "Fall 2007 - Spring 2008",
			"description": "Wrote memoranda for brief to Supreme Court of the Northern Mariana Islands."
		},
		{
			"employer": "Legal Services of Northern Virginia",
			"title": "Intern",
			"location": "Arlington, Virginia",
			"dates": "Summer 2007",
			"description": "Provided legal services to indigent clients, with a focus on consumer, housing, and family law."
		},
		{
			"employer": "Harris Teeter",
			"title": "Starbucks Manager",
			"location": "Virginia Beach, Virginia",
			"dates": "August 2005 - August 2006",
			"description": "Opened and then managed a Starbucks kiosk in a brand new Harris Teeter grocery store. Participated in the hiring of employees for the new store."
		},
		{	
			"employer": "NOVA Group of Japan",
			"title": "English Teacher",
			"location": "Osaka, Japan",
			"dates": "April 2004 - April 2005",
			"description": "Taught English to small groups of Japanese students of varying ages and ability levels. Learned Japanese customs and culture."
		},
		{
			"employer": "Field of Dreams",
			"title": "Sales Associate",
			"location": "San Digeo, California",
			"dates": "Fall 2003",
			"description": "Sold sports memorabilia."
		}
	]
};
function displayWork() {
		for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork();

var projects = { 
	"projects": [
		{ 
		"title": "Webpage",
		"dates": "2015",
		"description": "Udacity P1",
		"images": ["http://placehold.it/350x150"]
		},
		{ 
		"title": "placeholder",
		"dates": "2015",
		"description": "placeholder",
		"images": ["http://placehold.it/350x200"]
		}
	]
};
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}	
	}
};

projects.display();


var education = {
	"schools": [
		{
			"name": "Gustavus Adolphus College",
			"location": "St. Peter, MN, US",
			"degree": "BA",
			"majors": "Studio Art & Political Science",
			"dates": "Fall 1999 - Spring 2003",
			"url": "https://gustavus.edu/"
		},
		{
			"name": "George Mason University School of Law",
			"location": "Arlington, VA, US",
			"degree": "J.D.",
			"majors": "Law",
			"dates": "Fall 2006 - Spring 2009",
			"url": "http://www.law.gmu.edu/"
		},
	],
	"onlineClasses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Place Holder U",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]	
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameandDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameandDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for(onlineClass in education.onlineClasses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		var formattedTitleandSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleandSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
		$(".education-entry:last").append(formattedURL);
		//var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		//RESTART by figuring out how to display below education yet under online class heading (could create seperate variable) $(".onlineClasses-entry:last").append(formattedTitle);
	}
}

education.display();





$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#map-div").append(googleMap);

