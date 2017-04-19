console.log('JS loaded');

var numberOfClicks = 0;

var onReady = function() {
  console.log('the doc is ready');

};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);

//click listener event buttons:
$('#create').on('click', createElement);
$('#swap').on('click', createElement);
$('#delete').on('click', createElement);
//Using jQuery, when the create button is clicked append a <div>
//element to the provided container div.  The new div should have
//the class color-div
$('#container').append('<div class="color-div"></div>');

//Inside the <div> element you created in the previous step, create
//a <p> element that shows how many times you have clicked the button
//from the first step
function createElement(){
  var txt1 = '<p>Button Clicks</p>';
  var txt2 = $('<p></p').text('Button Clicks');
  var txt3 = document.createElement('p');
    txt3.innerHTML = 'Button Clicks';
  $('.color-div').append(txt1, txt2, txt3);
}


//Inside the <div> element you created in step two, append two <button>
//elements.  The buttons should have a class of 'swap' and 'delete'
$(function(){
    $('button').on('click', function(){
        var s = $('<button id="swap">SWAP COLOR</button>');
        var d = $('<button id="delete">DELETE</button>');
        $('.color-div').append(s);
        $('.color-div').append(d);
    });
});

//In a CSS file, any <div> created using the 'create' button should
//have a 'Red' background-color.


//Clicking a 'swap' <button> should change its parent background-color
//from 'Red' to 'Yello'
$('#swap').parent()
  .animate({backgroundColor: 'Yellow'});

//Clicking a 'delete' <button> should remove its parent <div> container
//(and all of its contents)
$('#delete').parent()
  .remove({});
