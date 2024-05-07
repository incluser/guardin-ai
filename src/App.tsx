import { Button, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTask, Goal, Labels, Logo, Policies, SubmitForm, TaskItem } from './components';
import { addTask } from './redux/slices/TaskSlice';
import { RootState } from './redux/store';
import { Task } from './types/Task.types';

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const [currentTask, setCurrentTask] = useState<Task>(tasks[0])

  const dispatch = useDispatch()
  const handleTaskClick = (id: number) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      setCurrentTask(task);
    }
  }

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
      goal: "",
      goal_description: "",
      label_description: "",
      tags: [],
      policies: "",

    }
    dispatch(addTask(newTask))
  }



  return (
    <div className='container'>
      <div className="sidebar" >
        <Logo />
        <AddTask onAddTask={handleAddTask} />
        {
          tasks.map((task) => {
            return <TaskItem selected={currentTask.id === task.id} onClick={() => handleTaskClick(task.id)} {...task} key={task.id} />
          })
        }
      </div>
      <div className="forma">
        <div className="form-container">
          <div className='form-header'>
            <h1>Welcome!</h1>
            <Button isDisabled bg="main.tab_underline" colorScheme='blue' size='md'>Save</Button>
          </div>
          <Tabs>
            <TabList>
              <Tab w="50%" _selected={{ bg: "main.tab", color: "main.tab_underline" }} fontWeight={600} >Task</Tab>
              <Tab w="50%" _selected={{ bg: "main.tab", color: "main.tab_underline" }} fontWeight={600} >Result</Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg="main.tab_underline" borderRadius='1px' />
            <TabPanels >
              <TabPanel  >
                <Goal currentTask={currentTask} />
                <Labels currentTask={currentTask} />
                <Policies currentTask={currentTask} />
                <SubmitForm />
              </TabPanel  >
              <TabPanel h="500px" >
                <p>Not Implemented</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default App


