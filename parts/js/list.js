$(function(){

  var url = new URL(window.location.href);
  updateLocalStorage(url);
  updateFieldValues();
  updateList();

  $('form select').change(function(){
    updateList();
  });

  $('form .favorite').click(function(){
    toggleFavoriteButton(this);
    updateList();
  });

});

function clearFliterValues() {

  localStorage.removeItem('filterTag');
  localStorage.removeItem('filterCategory');
  localStorage.removeItem('filterDay');
  localStorage.removeItem('filterLocation');
  localStorage.removeItem('filterFavorite');

}

function updateLocalStorage(url) {

  // If reset was provided...
  if (url.searchParams.get('reset') === 'true') {

    clearFliterValues();

  } else {

    // If tag was supplied by URL...
    if (url.searchParams.get('tag')) {
      // Store value in local storage.
      localStorage.setItem('filterTag', url.searchParams.get('tag'));
    }

    // If category was supplied by URL...
    if (url.searchParams.get('category')) {
      // Store value in local storage.
      localStorage.setItem('filterCategory', url.searchParams.get('category'));
    }

    // If day was supplied by URL...
    if (url.searchParams.get('day')) {
      // Store value in local storage.
      localStorage.setItem('filterDay', url.searchParams.get('day'));
    }

    // If location was supplied by URL...
    if (url.searchParams.get('location')) {
      // Store value in local storage.
      localStorage.setItem('filterLocation', url.searchParams.get('location'));
    }

    // If favorite was supplied by URL...
    if (url.searchParams.get('favorite')) {
      if (url.searchParams.get('favorite') === 'true') {
        // Store value in local storage.
        localStorage.setItem('filterFavorite', true);
      } else {
        // Store value in local storage.
        localStorage.setItem('filterFavorite', false);
      }
    }

  }

}

function updateFieldValues() {

  if (localStorage.filterTag) {
    $('[name="tag"]').val(localStorage.filterTag);
  }

  if (localStorage.filterCategory) {
    $('[name="category"]').val(localStorage.filterCategory);
  }

  if (localStorage.filterDay) {
    $('[name="day"]').val(localStorage.filterDay);
  }

  if (localStorage.filterLocation) {
    $('[name="location"]').val(localStorage.filterLocation);
  }

  if (localStorage.filterFavorite == 'true') {
    $('.favorite').attr('data-active', 'true');
  }

}

function toggleFavoriteButton(button) {
  if ($(button).attr('data-active') === 'false') {
    $(button).attr('data-active', true);
    localStorage.setItem('filterFavorite', true);
  } else {
    $(button).attr('data-active', false);
    localStorage.setItem('filterFavorite', false);
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
    // Update local storage.
    localStorage.setItem('filterTag', filter.tag);
    // Filter by tag.
    filterByTag(items, filter.tag);
  }

  // If category was provided...
  if (filter.category) {
    // Update local storage.
    localStorage.setItem('filterCategory', filter.category);
    // Filter by category.
    filterByCategory(items, filter.category);
  }

  // If day was provided...
  if (filter.day) {
    // Update local storage.
    localStorage.setItem('filterDay', filter.day);
    // Filter by day.
    filterByDay(items, filter.day);
  }

  // If location was provided...
  if (filter.location) {
    // Update local storage.
    localStorage.setItem('filterLocation', filter.location);
    // Filter by day.
    filterByLocation(items, filter.location);
  }

  // If favorite was selected...
  if (filter.favorite) {
    // Update local storage.
    localStorage.setItem('filterFavorite', true);
    // Filter by favorite.
    filterByFavorite(items);
  }

}

function updateList(){

  var favorite = false;
  if ($('form .favorite').attr('data-active') == 'true') {
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
