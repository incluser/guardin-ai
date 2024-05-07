# React Task Management Application

This application is a task management system built with React, Redux, and Chakra UI.

## Overview

The application allows users to add new tasks, select a task, and edit the details of the selected task. The details of a task include its goal, labels, and policies.

## Components

The application is composed of several components:

- **Logo**: Displays the logo of the application.
- **AddTask**: Allows users to add new tasks.
- **TaskItem**: Represents a single task in the task list.
- **Goal**: Allows users to edit the goal of the selected task.
- **Labels**: Allows users to edit the labels of the selected task.
- **Policies**: Allows users to edit the policies of the selected task.
- **SubmitForm**: Represents the form that users can submit.

## Redux

The application uses Redux for state management. The state includes a list of tasks and the details of each task. Actions and reducers are defined in TaskSlice.

## Chakra UI

The application uses Chakra UI for styling. Chakra UI components used include Button, Tab, TabIndicator, TabList, TabPanel, TabPanels, and Tabs.

## Usage

To use the application, users can click the "Add new task" button to add a new task. The new task will appear in the task list. Users can click on a task in the task list to select it. The details of the selected task will appear in the form on the right. Users can edit the details and click the "Save" button to save the changes.

## Installation

```bash
  git clone <link>
  npm install
  npm run dev
```
