
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>

      {/* Header Icon */}
      <Text style={styles.homeEmoji}>👨‍🍳</Text>

      {/* App Title */}
      <Text style={styles.homeTitle}>
        Renz's Recipe Book
      </Text>

      <Text style={styles.homeSubtitle}>
        Delicious recipes made with love 
      </Text>

      {/* Welcome Card */}
      <View style={styles.welcomeCard}>

        <Text style={styles.welcomeEmoji}>🍗</Text>

        <Text style={styles.welcomeTitle}>
          Welcome to my Recipe
        </Text>

        <Text style={styles.welcomeText}>
          Explore simple and delicious recipes 
        </Text>

      </View>

      {/* Main Button */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.mainButtonText}>
          View My Recipes 🍴
        </Text>
      </TouchableOpacity>

    </View>
  );
}
