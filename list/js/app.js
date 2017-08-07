$(function(){

  var defaults = {
    tag: '',
    category: '',
    day: '',
    location: '',
    favorite: ''
  };

  $('form select').change(function(){
    updateList();
  });

  $('form label.favorite').click(function(){
    toggleFavoriteButton(this);
    updateList();
  });

  styleFavoriteButton($('form label.favorite'));

  loadSchedule();

});

function toggleFavoriteButton(button) {
  if ($(button).attr('data-favorite') === 'false') {
    $(button).attr('data-favorite', true);
  } else {
    $(button).attr('data-favorite', false);
  }
  styleFavoriteButton(button);
}

function styleFavoriteButton(button) {
  if ($(button).attr('data-favorite') === 'false') {
    $(button).html('&#9734;');
  } else {
    $(button).html('&#9733;');
  }
}

function filterByTag(items, tag) {
  // Loop through items.
  $(items).each(function() {
    // Get tag(s) associated with this item.
    var itemTags = $(this).attr('data-tags').split(',');
    // If item does not have given tag...
    if (itemTags.indexOf(tag) === -1) {
      // Hide item.
      $(this).hide();
    }
  });
}

function filterByCategory(items, category) {
  // Loop through items.
  $(items).each(function() {
    // Get category associated with this item.
    var itemCategory = $(this).attr('data-category');
    // If item category is not given category...
    if (itemCategory !== category) {
      // Hide item.
      $(this).hide();
    }
  });
}

function filterByDay(items, day) {
  // Loop through items.
  $(items).each(function() {
    // Get day associated with this item.
    var itemDay = $(this).attr('data-day');
    // If item day is not given day...
    if (itemDay !== day) {
      // Hide item.
      $(this).hide();
    }
  });
}

function filterByLocation(items, location) {
  // Loop through items.
  $(items).each(function() {
    // Get location associated with this item.
    var itemLocation = $(this).attr('data-location');
    // If item location is not given location...
    if (itemLocation !== location) {
      // Hide item.
      $(this).hide();
    }
  });
}

function filterByFavorite(items) {
  // Loop through items.
  $(items).each(function() {
    // If item day is not a favorite...
    if ($(this).attr('data-favorite') !== 'true') {
      // Hide item.
      $(this).hide();
    }
  });
}

function filterItems(items, filter){

  // If tag was provided...
  if (filter.tag) {
    // Filter by tag.
    filterByTag(items, filter.tag);
  }

  // If category was provided...
  if (filter.category) {
    // Filter by category.
    filterByCategory(items, filter.category);
  }

  // If day was provided...
  if (filter.day) {
    // Filter by day.
    filterByDay(items, filter.day);
  }

  // If location was provided...
  if (filter.location) {
    // Filter by day.
    filterByLocation(items, filter.location);
  }

  // If favorite was selected...
  if (filter.favorite) {
    // Filter by favorite.
    filterByFavorite(items);
  }

}

function updateList(){

  var favorite = false;
  if ($('form label.favorite').attr('data-favorite') === 'true') {
    favorite = true;
  }

  var filter = {
    tag: $('[name="tag"]').val(),
    category: $('[name="category"]').val(),
    day: $('[name="day"]').val(),
    location: $('[name="location"]').val(),
    favorite: favorite
  }
  var items = $('.list-item');

  // Show all items.
  $(items).show();

  // If a filter was provided...
  if (filter.tag + filter.category + filter.day + filter.location + filter.favorite) {
    // Filter items.
    filterItems(items, filter);
  }

}

function loadSchedule() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

console.log(this.responseText);

//document.getElementById("demo").innerHTML = this.responseText;

    }
  };
  xhttp.open('GET', 'json-export.json', true);
  xhttp.send();
}



