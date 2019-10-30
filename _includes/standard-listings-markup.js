'<div class="standard-listing">' +
  '<div class="uk-card">' +
    '<img class="uk-border-circle" src="' + attorney.image + '" alt="' + attorney.firstName + ' ' + attorney.lastName + ' headshot">' +
    '<h5 class="uk-margin-remove-bottom uk-margin-top">' + attorney.firstName + ' ' + attorney.lastName + '</h5>' +
    '<p class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top">' + attorney.practiceName + '</p>' +
    '<p class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top">' + attorney.city + ', ' + attorney.stateShort + '</p>' +
    '<a class="uk-article-meta uk-margin-remove-bottom uk-margin-small-top" href="' + currentURL + '&firstName=' + attorney.firstName + '&lastName=' + attorney.lastName + '">View Profile</a>' +
  '</div>' +
'</div>'
