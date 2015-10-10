Meteor.publish('creditcards', function() {
  return CreditCards.find();
})
/*
Meteor.publish('creditcards', function(param) {
	var selector = {
		//field: param
	}
	var options = {
		//sort: {created_time: 1},
		//fields: {field1:1, field2:1, created_time:1},
		//limit: 1
	}
  return CreditCards.find(selector, options);
})
*/