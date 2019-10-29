'<h1 class="uk-article-title">' + attorney.firstName + ' ' + attorney.lastName + ' | ' + attorney.practiceName + '</h1>' +
'<p class="uk-text-lead uk-text-muted"><span id="featured-icon" uk-icon="icon: bookmark; ratio: 2;"></span>Featured Estate Planning Attorney in ' + attorney.city + ', ' + attorney.stateShort + '</p>' +
'<div class="uk-child-width-1-1@m uk-grid-match uk-margin-medium-top" data-uk-grid>' +
  '<div class="featured-profile">' +
    '<div id="profile-card" class="uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">' +
      // Left side of profile card
      '<div id="left">' +
        '<img class="uk-border-circle" src="' + attorney.image + '" alt="' + attorney.firstName + ' ' + attorney.lastName + ' headshot">' +
        '<address>' +
          '<p class="practice">' + attorney.practiceName + '</p>' +
          '<p class="street">' + attorney.street + '</p>' +
          '<p class="city-zip">' + attorney.city + ', ' + attorney.stateShort + ' ' + attorney.zip + '</p>' +
        '</address>' +
        '<a class="uk-button uk-button-success" href=""><span uk-icon="icon: comment;"></span>Send Message</a>' +
      '</div>' +
      // Right side of profile card
      '<div id="right">' +
        '<h3 class="uk-card-title uk-margin">Practice Areas</h3>' +
        '<ul>' +
          '<li>' + attorney.practiceArea1 + '</li>' +
          '<li>' + attorney.practiceArea2 + '</li>' +
          '<li>' + attorney.practiceArea3 + '</li>' +
          '<li>' + attorney.practiceArea4 + '</li>' +
        '</ul>' +
        '<h3 class="uk-card-title uk-margin">Free Consultation?</h3>' +
        freeConsult +
        '<a class="uk-button uk-button-success" href=""><span uk-icon="icon: receiver;"></span>Call</a>' +
        '<a class="uk-button uk-button-success" href=""><span uk-icon="icon: link;"></span>Visit Website</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
  // Practice Overview
  '<div>' +
    '<h3 class="uk-card-title uk-margin">Practice Overview</h3>' +
    '<p style="margin: 0;">' + attorney.practiceOverview + '</p>' +
  '</div>' +
  // Attorney Contact Markup (_includes/attorney-contact-markup.js)
  '<h3 class="uk-card-title uk-margin">Get In Touch With ' + attorney.practiceName + '</h3>' +
  {% include practice-contact.js %} +
'</div>'
