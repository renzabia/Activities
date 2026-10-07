import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { styles } from './styles';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Buy fresh groceries', completed: false },
    { id: '2', title: 'Finish React Native assignment', completed: true },
  ]);

  // Add new task
  const handleAddTask = () => {
    const trimmed = taskText.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now().toString(),
      title: trimmed,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskText('');
  };

  // Toggle completed status
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Render individual item card
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.taskTouchArea}
          onPress={() => handleToggleTask(item.id)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.checkbox,
              item.completed && styles.checkboxCompleted,
            ]}
          >
            {item.completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text
            style={[
              styles.taskText,
              item.completed && styles.taskTextCompleted,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTask(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Tasks</Text>
        <Text style={styles.headerSubtitle}>
          {activeCount === 1
            ? '1 task remaining'
            : `${activeCount} tasks remaining`}
        </Text>
      </View>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          placeholderTextColor="#999"
          value={taskText}
          onChangeText={setTaskText}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic List */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>All caught up!</Text>
              <Text style={styles.emptySubtext}>
                Add a new task above to get started.
              </Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}