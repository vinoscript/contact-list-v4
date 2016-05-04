'use strict';

$(function() {

  var $contacts = $('#contacts');
  var $firstname = $('#firstname');
  var $lastname = $('#lastname');
  var $email = $('#email');
  var $show = $('#show-contact');
  var $add = $('#add-contact');
  var $search = $('#search-contact');
  var $searchParams = $('#search-params');

  function addContact(contact){
    $contacts.append(contact.id + ': ' + contact.firstname + ' ' + contact.lastname + '; ' + contact.email + '<button data-id="id" class="btn btn-default btn-xs">x</button><br>');
  }

  function clearContacts(contact){
    $contacts.remove(contact);  // ???? // 
  }

  $('#show-contact-button').on('click', function(event){

    $($show).toggle();
    $($add).hide();
    $($search).hide();

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

  });


  $('#add-contact-button').on('click', function(){

    $($add).toggle();
    $($search).hide();
    $($show).hide();

    $('#submit-contact-button').on('click', function(){

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


  $('#search-contact-button').on('click', function(){

    $($search).toggle();
    $($add).hide();
    $($show).hide();

    $('#submit-search-button').on('click', function(){

      var search = $searchParams.val();

      $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/search',
      success: function(contacts){
          $.each(contacts, function(i, contact){
            addContact(contact);
            console.log("hello");
          });
        },
      error: function(){
        alert:('No contact found');
      }
    });

    });
  
  });

  
});
