'<form class="uk-form-stacked uk-margin-medium-top" method="POST" action="https://formspree.io/{{ include.email }}" accept-charset="UTF-8">' +
  '<div class="uk-margin-medium-bottom">' +
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
'</form>'
