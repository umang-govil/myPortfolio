var app = angular.module('portfolio', []);

app.controller('myApp', function($scope) {
	$scope.person = {
		name: "John Doe",
		image: "12.jpg",
		designation: "Consultant, Blogger and Public Speaker in Jaipur",
		descriptionLine1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		descriptionLine2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		tags: ["#photography", "#travel", "#shopping", "#music"],
		work: "Lorem Ipsum",
		education: "University Of Lorem",
		links: ["dribbble.com/john-doe", "behance.net/john-doe", "xyz.com/jon_doe"]
	};
});
