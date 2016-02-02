import React from 'react';

import Tasks from '/imports/collections/Tasks';

export default React.createClass({
    displayName: 'TaskForm',
    handleSubmit(event) {
        event.preventDefault();

        var taskName = this.refs.taskName.value.trim();

        Tasks.insert({
            text: taskName,
            checked: false,
            createdAt: new Date()
        });

        this.refs.taskName.value = "";
    },
    render () {
        return (
            <form className="new-task" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref="taskName"
                    placeholder="Type to add new tasks"/>
            </form>
        );
    }
});