// Start of bio //
var bio = {
	"name": "Jillian Levy",
	"role": "Web Developer",
	"contacts": {
		"mobile": "516-398-0773",
		"email": "levy.jillian@gmail.com",
		"github": "jlevyunderstoodorg",
		"twitter": "@jillianlevy",
		"location": "New York"
	},
	"welcomeMessage": "Hi my name is Jillian. Welcome to my interactive resume!",
	"skills": [
		"web production", "html", "css", "javascript", "jQuery"
	],
	"bioPic": "images/jillianlevy.jpg"
}
function displayBio() {
	var name = "Jillian Levy";
	var formattedName = HTMLheaderName.replace("%data%", name);

	var role = "Web Developer";
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	var mobile = "516-398-0773";
	var formattedMobile = HTMLmobile.replace("%data%", mobile);

	var email = "levy.jillian@gmail.com";
	var formattedEmail = HTMLemail.replace("%data%", email);

	var github = "jlevyunderstoodorg";
	var formattedGithub = HTMLgithub.replace("%data%", github);

	var twitter = "@jillianlevy";
	var formattedTwitter = HTMLtwitter.replace("%data%", twitter);

	var location = "New York";
	var formattedLocation = HTMLlocation.replace("%data%", location);

	var welcomeMessage = "Hi my name is Jillian. Welcome to my interactive resume!";
	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);

	var bioPic = "images/jillianlevy.jpg";
	var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedwelcomeMessage);
	$("#header").append(formattedbioPic);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
      $("#skills").append(formattedSkill);
    }
}
displayBio ();
// End of bio //

// Start of education //
var education = {
	"schools": [
	{
		"name": "University of Arizona",
		"location": "Tucson, AZ",
		"degree": "BA",
		"majors": ["Psychology"],
		"dates": 2012,
		"url": "http://www.arizona.edu/"
	}
  ],
	"onlineCourses": [
	{	
		"title": "Front-End Web Devloper Nanodegree",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
  ]
}
function displayEducation() {
	for (schools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
 		var formattedNameDegree = formattedName + formattedDegree;
 		$(".education-entry:last").append(formattedNameDegree);

 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[schools].majors);
		$(".education-entry:last").append(formattedMajors);
 }
 	for (onlineCourses in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
 		var formattedTitleSchool = formattedTitle + formattedSchool;
 		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].date);
		$(".education-entry:last").append(formattedDate);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
		$(".education-entry:last").append(formattedUrl);
 }
}
displayEducation ();
// End of education //

// Start of work //
var work = {
	"jobs": [
	{
		"employer": "National Center for Learning Disabilities",
		"title": "Web Production Associate",
		"location": "New York, NY",
		"dates": "December 2013 - Future",
		"description": "Primary responsibility of managing the quality and efficiency of production for all NCLD websites. Identifies and implements smart and creative online strategies and works across teams to advance the organization&rsquo;s goals. Time is mainly dedicated to the production of content online, the managing of NCLD’s SEO efforts and supporting the personalization tool that lives on Understood.org."
	},
	{
		"employer": "National Center for Learning Disabilities",
		"title": "Web Production Assistant",
		"location": "New York, NY",
		"dates": "October 2012 - December 2013",
		"description": "Primary responsibility of assisting the web production manager with the publication of content on all NCLD websites and the dissemination of NCLD&rsquo;s email based communications. Help to identify and implement smart and creative online strategies and make recommendations on using online communication tools to advance the organization&rsquo;s goals."
	},
	{
		"employer": "National Center for Learning Disabilities",
		"title": "Essential Information Intern",
		"location": "New York, NY",
		"dates": "May 2012 - October 2012",
		"description": "Key responsibilities: Web maintenance, communication and outreach to constituents and partner organizations, maintenance and expansion of NCLD&rsquo;s informational and resource databases and project&ndash;related material management."
	}
  ]
}
function displayWork() {
	for (job in work.jobs) {
 		$("#workExperience").append(HTMLworkStart);

 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
 		$(".work-entry:last").append(formattedEmployerTitle);

 		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 		$(".work-entry:last").append(formattedLocation);

 		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 		$(".work-entry:last").append(formattedDates);

 		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 		$(".work-entry:last").append(formattedDescription);
  }
}
displayWork (); 
// End of work //

// Start of projects //
var projects = {
	"projects": [
	{
		"title": "Understood",
		"dates": "2013 - Future",
		"description": "Our goal is to help the millions of parents whose children, ages 3–20, are struggling with learning and attention issues. We want to empower them to understand their children&rsquo;s issues and relate to their experiences. With this knowledge, parents can make effective choices that propel their children from simply coping to truly thriving.",
		"images": [
			"https://www.understood.org/~/media/images/global/socialmediaimage.png?h=300&w=300",
			"https://www.understood.org/~/media/images/poses/header/logoularge.png?h=300&w=300"
	    ]
	}
  ]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}
projects.display ();
// End of projects //

// Start of Map //
$("#mapDiv").append(googleMap);
// End of Map //

// Start of click locations //
 $(document).click(function(loc) {
	 var x = loc.pageX;
	 var y = loc.pageY;
	 logClicks(x,y);
});
// End of click locations //
  