// Page
angular
  .module('app')
  .service('Page', function(){
    var title = 'default';
		var description = 'default';

		return {
			title: function() { return title; },
			setTitle: function(newTitle) { title = newTitle; },
			description: function() { return description; },
			setDescription: function(newDescription) { description = newDescription; }
		};
  });
