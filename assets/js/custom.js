---
---
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

// Ping Sheety API to get attorney listing & profile data from Google Sheet
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
      // If user is on an attorney listings page
      if (!params.firstName) {
        // Run renderListings function
        renderListings(JSON.parse(xhr.responseText));
      }
      // Else if user is on an attorney profile page
      else if (params.firstName) {
        // Run renderProfile function
        renderProfile(JSON.parse(xhr.responseText));
      }
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

// Render attorney listings markup
function renderListings(data) {

  // Set up HTML strings
  var featuredHTML =
    '<h1 class="uk-article-title">Estate Planning Attorneys in ' + params.city + '</h1>' +
    '<p class="uk-text-lead uk-text-muted">Find the Top Estate Planning Attorneys in the ' + params.metro + ' Area</p>' +
    '<div class="uk-child-width-1-2@m uk-grid-match uk-text-center uk-margin-medium-top" data-uk-grid>';

  var standardHTML =
    '<hr class="uk-margin-medium">' +
    '<div class="section-team">' +
    '<div class="uk-container uk-container-expand">' +
    '<div class="uk-margin-medium-top uk-grid-small uk-text-center uk-margin-medium-top link-primary" data-uk-grid>';

  // Loop through attorney data from API and push to string
  data.forEach(function(attorney) {
    // If attorney metro area matches URL params metro AND attorney is featured
    if (attorney.metro === params.metro && attorney.featured) {
      // Update HTML with featured attorney data
      featuredHTML +=
        '<div class="featured-listing">' +
          '<div class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">' +
            '<a class="uk-position-cover" href="' + currentURL + '&firstName=' + attorney.firstName + '&lastName=' + attorney.lastName + '"></a>' +
            '<img class="uk-border-circle" src="' + attorney.image + '" alt="' + attorney.firstName + ' ' + attorney.lastName + ' headshot">' +
            '<h3 class="uk-card-title uk-margin">' + attorney.firstName + ' ' + attorney.lastName + '</h3>' +
            '<address>' +
              '<p class="uk-text-lead">' + attorney.practiceName + '</p>' +
              '<p class="street">' + attorney.street + '</p>' +
              '<p class="city-zip">' + attorney.city + ', ' + attorney.stateShort + ' ' + attorney.zip + '</p>' +
            '</address>' +
            '<p style="color: #323247;"><span uk-icon="icon: user;"></span>View Profile</p>' +
          '</div>' +
        '</div>';
    }
    // Else if attorney metro area matches URL params metro
    else if (attorney.metro === params.metro) {
      // Update HTML with standard attorney data
      standardHTML +=
        '<div class="standard-listing">' +
          '<div class="uk-card">' +
            '<img class="uk-border-circle" src="' + attorney.image + '" alt="' + attorney.firstName + ' ' + attorney.lastName + ' headshot">' +
            '<h5 class="uk-margin-remove-bottom uk-margin-top">' + attorney.firstName + ' ' + attorney.lastName + '</h5>' +
            '<p class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top">' + attorney.practiceName + '</p>' +
            '<p class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top">' + attorney.city + ', ' + attorney.stateShort + '</p>' +
            '<a class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top" href="' + currentURL + '&firstName=' + attorney.firstName + '&lastName=' + attorney.lastName + '">View Profile</a>' +
          '</div>' +
        '</div>';
    }

  });

  // Close open divs from HTML strings
  featuredHTML += '</div>';
  standardHTML += '</div></div></div>';

  // Inject the HTML into the DOM
  featuredHTML += standardHTML;
  attorneyData.innerHTML = featuredHTML;

}

// Render attorney profile markup
function renderProfile(data) {

  // Set up HTML string
  var profileHTML = '';
  var freeConsult = '';

  // Loop through attorney data from API and push to string
  data.forEach(function(attorney) {
    // If attorney metro & last name match params AND attorney is featured
    if (attorney.metro === params.metro && attorney.lastName === params.lastName && attorney.featured) {
      // Check if attorney offers free consultation
      if (attorney.freeConsult) {
        freeConsult = '<p><span uk-icon="icon: check; ratio: 1.5;" style="color: orange;"></span> YES</p>';
      } else {
        freeConsult = '<p><span uk-icon="icon: close; ratio: 1.5;" style="color: red;"></span> NO</p>';
      }
      // Update HTML with featured attorney data
      profileHTML += {% include featured-profile-markup.js %};
    }

  });

  // Inject the HTML into the DOM
  attorneyData.innerHTML = profileHTML;

}


//== Inits & Event Listeners ==//

// If user is on a city/metro page
if (params.city !== undefined) {
  // Ping Sheety API
  pingAPI();
}
