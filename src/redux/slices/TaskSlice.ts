import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, UpdateFieldPayload } from "../../types/Task.types";

const initialState = {
  tasks: [
    {
      id: 0,
      goal: "Example Task",
      goal_description: "this is test goal description",
      label_description: "fake description",
      tags: [
        {
          id: 0,
          label: "React",
          description: "React is big shit",
        },
        {
          id: 1,
          label: "Vue",
          description: "isnt bad",
        },
      ],
      policies: "some fake data",
    },
  ] as Task[],
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { id, field, value } = action.payload;
      const currentTask = state.tasks.find((task) => task.id === id);
      if (!currentTask) {
        return;
      }
      currentTask[field as keyof Task] = value as never;
    },
  },
});

export const { addTask, updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;
