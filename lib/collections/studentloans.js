var Schemas = {};

StudentLoans = new Meteor.Collection('studentloans');

Schemas.StudentLoans = new SimpleSchema({
 /*
  _id: {
    type: Number,
    label: "_id"
  },
  field: {
    type: String,
    label: "field",
    optional: true
  },
  "object.$": {
    type: [Object],
    optional: true
  },
  "object.id": {
    type: Number,
    label: "object id",
    optional: true
  },
  "object.field": {
    type: String,
    label: "object field",
    optional: true
  }
 */
});

StudentLoans.attachSchema(Schemas.StudentLoans);