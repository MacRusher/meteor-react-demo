import Tasks from '/imports/collections/Tasks';

Meteor.publish('tasks', function () {
    // this will publish all tasks data to the client
    return Tasks.find();
});