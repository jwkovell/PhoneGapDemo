$(function(){

  var itemID = getItemID();
  var item = {
    title: 'This is a title',
    author: 'John Writesalot',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    pubDate: 1502203927
  }

  var dateObj = new Date(item.pubDate * 1000);
  var year = dateObj.getFullYear();
  var month = dateObj.getMonth();
  var date = dateObj.getDate();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  var seconds = dateObj.getSeconds();
  var day = dateObj.getDay();

  var monthString = '';
  if (month == 0) {
    monthString = 'Jan';
  }
  else if (month == 1) {
    monthString = 'Feb';
  }
  else if (month == 2) {
    monthString = 'Mar';
  }
  else if (month == 3) {
    monthString = 'Apr';
  }
  else if (month == 4) {
    monthString = 'May';
  }
  else if (month == 5) {
    monthString = 'Jun';
  }
  else if (month == 6) {
    monthString = 'Jul';
  }
  else if (month == 7) {
    monthString = 'Aug';
  }
  else if (month == 8) {
    monthString = 'Sep';
  }
  else if (month == 9) {
    monthString = 'Oct';
  }
  else if (month == 10) {
    monthString = 'Nov';
  }
  else if (month == 11) {
    monthString = 'Dec';
  }

  var dayString = '';
  if (day == 0) {
    dayString = 'Sun';
  }
  else if (day == 1) {
    dayString = 'Mon';
  }
  else if (day == 2) {
    dayString = 'Tue';
  }
  else if (day == 3) {
    dayString = 'Wed';
  }
  else if (day == 4) {
    dayString = 'Thu';
  }
  else if (day == 5) {
    dayString = 'Fri';
  }
  else if (day == 6) {
    dayString = 'Sat';
  }

  console.log(year);
  console.log(month);
  console.log(date);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  console.log(day);

  if (item.title) {
    $('.header .label').html('Title');
    $('.title .label').html(item.title);
    $('.title .value').html(item.title);
  }

  if (item.author) {
    $('.author .label').html('Author');
    $('.author .value').html(item.author);
  }

  if (item.pubDate) {
    $('.pub-date .label').html('Publication date');
    $('.pub-date .value').html(dayString + ', ' + monthString + ' ' + date + ' ' + year);
  }

  if (item.pubDate) {
    $('.details .label').html('Details');
    $('.details .value').html(item.details);
  }

});

function getItemID() {

  return new URL(window.location.href).searchParams.get('id');

}

function loadItem(id) {

  // Loop through all items.
  // If item matches the given ID.
  // Gat valus from item.

}
