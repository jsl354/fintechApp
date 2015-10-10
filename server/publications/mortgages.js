Meteor.publish('mortgages', function() {
  return Mortgages.find();
})
/*
Meteor.publish('mortgages', function(param) {
	var selector = {
		//field: param
	}
	var options = {
		//sort: {created_time: 1},
		//fields: {field1:1, field2:1, created_time:1},
		//limit: 1
	}
  return Mortgages.find(selector, options);
})
*/