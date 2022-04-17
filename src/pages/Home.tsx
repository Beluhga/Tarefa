import React, { useState } from 'react';
import {Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

 export type EditTaskArgs = {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const taskWithSameTile = tasks.find(task => task.title === newTaskTitle) //Para procura uma title se ou nao
    
    if (taskWithSameTile){
      return Alert.alert('Tarefa já cadastrada', 'Você não pode cadastrar uma tarefa com o mesmo nome') // cria o alerta com a mensagem caso a tarefa (task) for a mesma q ja esta cadastrada
    }
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false

    }

    setTasks(oldTasks => [...oldTasks, newTask]) // para passar todas as tasks
    
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const foundItem = updatedTasks.find(task => task.id === id)

    if (!foundItem)
    return;
      
    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
    
  }
  

  function handleRemoveTask(id: number) {
    Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [ // logica para saber se deseja ou nao remover um item
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          const updatedTasks = tasks.filter(task => task.id !== id); // logica para remover com a lixeira

          setTasks(updatedTasks)
        }

      },
      {
        style: 'cancel',
        text: 'Não',
        
      }
      
    ])
  }

  function handEditTask({taskId, taskNewTitle}: EditTaskArgs) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const taskItem = updatedTasks.find(task => task.id === taskId) // para buscar se a Tarefa (task) existe

    if (!taskItem) // se a tarefa nao existir retorna
    return;

    taskItem.title = taskNewTitle; // se existe ela altera o title, para uma q nao exista

    setTasks(updatedTasks); // aqui atualiza o estado

  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handEditTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})