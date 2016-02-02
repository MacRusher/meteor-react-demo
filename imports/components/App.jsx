import React from 'react';

import TaskForm from './TaskForm.jsx';
import TaskListing from './TaskListing.jsx';

export default () => (
    <div className="container">
        <header>
            <h1>Todo List</h1>
            <TaskForm />
        </header>

        <TaskListing />
    </div>
);
