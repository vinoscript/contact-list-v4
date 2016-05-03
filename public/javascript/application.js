$(function() {

  var $contacts = $('#contacts');

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/contacts',
    success: function(contacts){
      $.each(contacts, function(i, contact){
        $contacts.append('<li>' + contact.id + ': ' + contact.firstname + ' ' + contact.lastname + '; ' + contact.email + '</li>');
      });
    }
  });
  
});
