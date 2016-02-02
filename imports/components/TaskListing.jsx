import React from 'react';
import {Meteor} from 'meteor/meteor';

import Tasks from '/imports/collections/Tasks';

import AutorunMixin from '/imports/mixins/AutorunMixin.jsx';

import TaskItem from './TaskItem.jsx';

export default React.createClass({
    displayName: 'TaskListing',
    mixins: [AutorunMixin],
    autorun () {
        Meteor.subscribe('tasks');
        const tasks = Tasks.find({}, {sort: {createdAt: -1}}).fetch();
        this.setState({tasks});
    },
    render () {
        const {tasks = []} = this.state;
        return (
            <ul>
                {tasks.map(task => (
                <TaskItem {...task}
                    key={task._id}
                    onRemove={() => this.handleRemove(task)}
                    onChecked={() => this.handleCheck(task)}
                />
                    ))}
            </ul>
        );
    },
    handleRemove ({_id}) {
        Tasks.remove(_id);
    },
    handleCheck ({_id, checked}) {
        Tasks.update(_id, {
            $set: {
                checked: !checked
            }
        });
    }
});