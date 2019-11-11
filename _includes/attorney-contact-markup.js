'<section id="practice-contact">' +
  // Contact Form
  '<form class="uk-form-stacked" method="POST" name="Attorney Contact Form" accept-charset="UTF-8" netlify-honeypot="bot-field" netlify>' +
    '<div class="uk-margin-medium-bottom">' +
      // Netlify honeypot field
      '<p class="hidden">' +
        '<label>Don’t fill this out if you are human: <input name="bot-field" /></label>' +
      '</p>' +
      // Hidden field passing in Attorney email address
      '<input name="attorney-email" type="hidden" value="' + attorney.email + '">' +
      '<label class="uk-form-label uk-margin-small-bottom" for="form-stacked-text">Your Name</label>' +
      '<div class="uk-form-controls">' +
        '<input class="uk-input uk-form-large uk-border-rounded" name="name" type="text" required>' +
      '</div>' +
    '</div>' +
    '<div class="uk-margin-medium-bottom">' +
      '<label class="uk-form-label uk-margin-small-bottom" for="form-stacked-text">Your Email</label>' +
      '<div class="uk-form-controls">' +
        '<input class="uk-input uk-form-large uk-border-rounded" name="_replyto" type="email" required>' +
      '</div>' +
    '</div>' +
    '<div class="uk-margin-medium-bottom">' +
      '<label class="uk-form-label uk-margin-small-bottom" for="form-stacked-text">How Can We Help?</label>' +
      '<div class="uk-form-controls">' +
        '<textarea class="uk-textarea uk-form-large uk-border-rounded" name="message" rows="5" minlength="10" required></textarea>' +
      '</div>' +
    '</div>' +
    '<div>' +
      '<input type="text" name="_gotcha" style="display:none">' +
      '<input class="uk-button uk-button-primary uk-button-large uk-width-1-1" type="submit" value="Contact Attorney">' +
    '</div>' +
  '</form>' +
  // Google Maps Embed
  '<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAqB87gS3F-Ya4-81tWv7p3xX6TioDzEmo&q=' + attorney.practiceName.replace(/\ & |\, |\s| /g, '+') + '+' + attorney.zip + '" allowfullscreen></iframe>' +
'</section>'
