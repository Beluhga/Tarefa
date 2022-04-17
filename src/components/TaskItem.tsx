import React, {useState, useRef, useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';

import { TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
import { Task } from './TasksList';
import { EditTaskArgs } from '../pages/Home';

interface TaskItemProps {
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
    editTask: ({taskId, taskNewTitle}: EditTaskArgs) => void;
  }


export function TaskItem({task, editTask, removeTask, toggleTaskDone} : TaskItemProps){
  const [isEditing, setIsEditing] = useState(false) // estado é para sinalizar se o item está sendo editado ou não
  const [taskNewTitleValue, setTaskNewTitleValue] = useState(task.title) //para salvar o valor editado do item
  const textInputRef = useRef<TextInput>(null) // manipular manualmente se o item está sendo editado ou não (Ref e pra quando clica na caneta abrir o teclado e quando fechar guarda o teclado)

  function handleStartEditing() { // pra quando clicar na caneta, vc começa à editar
    setIsEditing(true); // para colocar o curso 
  }

  function handleCancelEditing() {
    setTaskNewTitleValue(task.title); // setou o valor antigo (task.title)
    setIsEditing(false); // para tirar da edição e fecha o teclado
  }

  function handleSubmitEditing(){ // aqui é pra confirma as alterações da edição
    editTask({taskId: task.id, taskNewTitle: taskNewTitleValue}) // aqui q esta as alterações locais
    setIsEditing(false); // para quando nao estiver mais editando
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing])
    return(
        <View style ={styles.container}>
            <View style={styles.infoContainer}>
              
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(task.id)}
              >
                <View 
                  style={task.done ? styles.taskMarkerDone : styles.taskMarker }// estilo q ira mudar a cor da caixa ao clicar
                  > 
                
                  { task.done && (
                    <Entypo name="check" size={12}  color="#FFF" />
                  )}
                
                </View>

                <TextInput 
                value={taskNewTitleValue} // valor editado
                onChangeText={setTaskNewTitleValue}
                editable={isEditing} // quando o valor e editavel ou nao
                onSubmitEditing={handleSubmitEditing} // para finalizar a edição
                style={task.done ? styles.taskTextDone : styles.taskText} // estilo q ira mudar a cor do texto q ira clicar
                ref={textInputRef} 
                
                />
              </TouchableOpacity>
            </View>

        
            <View style={styles.iconsContainer}>
              { isEditing ? ( // Logica para mudar os icones de X e Edit
                <TouchableOpacity
                    onPress={handleCancelEditing} // para aparecer o X (fecha, cancelar) quando estiver editando
                    >
                    <Entypo name="cross" size={24} color="black" />
                  
                </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleStartEditing} // para ficar a caneta quando nao fica editando
                    >
                  <Entypo name="edit" size={24} color="#b2b2b2" />                  
                </TouchableOpacity>
                ) }
                <View style={styles.iconsDivider} /> 

                <TouchableOpacity
                    onPress={() => removeTask(task.id)} // botão para remover o a tarefa.
                    disabled={isEditing}
                    >
                  <Entypo name="trash" size={24} color="#b2b2b2" style={{opacity: isEditing ? 0.2 : 1}} />                  
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
    taskButton: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 10,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#B2B2B2',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskText: {
      color: '#666',
      fontFamily: 'Inter-Medium'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 4,
      backgroundColor: '#1DB863',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTextDone: {
      color: '#1DB863',
      textDecorationLine: 'line-through',
      fontFamily: 'Inter-Medium'
    },
    infoContainer: {
      flex: 1,
    },
    iconsContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 24,
    },
    iconsDivider:{
      width: 1,
      height: 24,
      backgroundColor: 'rgba(196, 196, 196, 0.24)',
      marginHorizontal: 12
    }

  })