const Tasks = new Mongo.Collection('tasks');

Tasks.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
});

export default Tasks;