// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("DOMContentLoaded", function(event) {
  var laneFilter = document.querySelector('#filterByLane');
  var driverFilter = document.querySelector('#filterByDriver');
  var truckFilter = document.querySelector('#filterByTruck');

  var filters = [laneFilter, driverFilter, truckFilter];

  filters.forEach(function(filter) {
    filter.addEventListener('click', function(event) {
      showFilterOptions(filters, filter);
    });
  });
});

function showFilterOptions(filters, filterDivToOpen) {
  // console.warn(filterDivToOpen);
  filters.forEach(function(filter) {
    if(filterDivToOpen.id === filter.id) {
      var filterOptions = document.querySelector('.' + filter.id + '__options')
      filterOptions.classList.remove('is-hidden');
    } else {
      var filterOptions = document.querySelector('.' + filter.id + '__options')
      filterOptions.classList.add('is-hidden');
    }
  });
}
