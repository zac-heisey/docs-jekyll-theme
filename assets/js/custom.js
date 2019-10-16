//== Helpers ==//

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	url = url || window.location.href;
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i=0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};


//== Variables ==//

// Get URL params
var params = getParams();
// Get metro links
var metroLinks = document.querySelectorAll('.metro-link');
// Get current path and query params
var currentURL = window.location.pathname + window.location.search;
// Get element for attorney listings and profiles
var attorneyData = document.querySelector('#attorney-data');

// Loop through metro links and add active class if href matches current URL
for (var link of metroLinks) {
  if (currentURL == link.getAttribute('href')) {
    link.parentElement.classList.add('uk-active');
  }
}


//== Functions & Methods ==//

// Ping Sheety API to get attorney listing & profile data
function pingAPI() {

  // Set up XHR request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
    // Only run if the request is complete
    if (xhr.readyState !== 4) return;
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        renderMarkup(JSON.parse(xhr.responseText));
    } else {
        // This will run when it's not
        attorneyData.innerHTML = 'Sorry, we are having trouble locating estate planning attorneys in your area. Please try again later.';
        console.log(xhr);
    }
  };
  // Create and send a GET request based on URL params
  xhr.open('GET', 'https://api.sheety.co/8439def3-02f6-4dcf-a361-49093efba224');
  xhr.send();

}

// Render attorney listings or attorney profile markup
function renderMarkup(data) {

  // Set up HTML string
  var html =
    '<h1 class="uk-article-title">Estate Planning Attorneys in ' + params.city + '</h1>' +
    '<p class="uk-text-lead uk-text-muted">Find the Top Estate Planning Attorneys in the ' + params.metro + ' Area</p>';

  // Loop through attorney data from API and push to string
  data.forEach(function(attorney) {
    // If attorney metro area matches URL params metro
    if (attorney.metro === params.metro) {
      // Update HTML with attorney data (replace this markup with code from the boxes.html include file, etc.)
      html +=
        '<div class="article-content link-primary">' +
          '<p>' + attorney.practiceName + '</p>' +
          '<p>' + attorney.personName + '</p>' +
          '<p>' + attorney.street1 + '</p>' +
        '</div>';
    }

  });

  // Inject the HTML into the DOM
  attorneyData.innerHTML = html;

}


//== Inits & Event Listeners ==//

// Check is user is on a city/metro page
if (params.city !== undefined) {
  // Ping Sheet API
  pingAPI();
}
