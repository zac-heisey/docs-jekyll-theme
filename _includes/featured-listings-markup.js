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
    '<p style="color: #323247"><span uk-icon="icon: bookmark;"></span>View Featured Attorney</p>' +
  '</div>' +
'</div>'
