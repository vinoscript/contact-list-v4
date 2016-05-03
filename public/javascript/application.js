$(function() {

  var $contacts = $('#contacts');
  var $firstname = $('#firstname');
  var $lastname = $('#lastname');
  var $email = $('#email');

  function addContact(contact){
    $contacts.append('<li>' + contact.id + ': ' + contact.firstname + ' ' + contact.lastname + '; ' + contact.email + '</li>');
  }

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/contacts',
    success: function(contacts){
      $.each(contacts, function(i, contact){
        addContact(contact);
      });
    },
    error: function(){
      alert:('Error loading contacts');
    }
  });

  $('#add-contact').on('click', function(){

    var contact = {
      firstname: $firstname.val(),
      lastname: $lastname.val(),
      email: $email.val()
    };

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/contacts',
      data: contact,
      success: function(newContact){
        addContact(newContact);
      },
      error: function(){
        alert:('Error creating contact');
      }
    });

  });
  
});
