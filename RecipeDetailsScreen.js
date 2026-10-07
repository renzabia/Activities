import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "../styles/styles";

export default function RecipeDetailsScreen({
  navigation,
  route,
}) {
  const { recipe } = route.params;

  return (
    <ScrollView
      style={styles.detailsContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.detailsContent}>
        <Text style={styles.detailsEmoji}>
          {recipe.emoji}
        </Text>

        <Text style={styles.detailsTitle}>
          {recipe.name}
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            📂 Category: {recipe.category}
          </Text>

          <Text style={styles.infoText}>
            ⏰ Cooking Time: {recipe.time}
          </Text>
        </View>

        <Text style={styles.detailsHeading}>
          🛒 Ingredients
        </Text>

        <View style={styles.textBox}>
          <Text style={styles.detailsText}>
            {recipe.ingredients}
          </Text>
        </View>

        <Text style={styles.detailsHeading}>
          👩‍🍳 Instructions
        </Text>

        <View style={styles.textBox}>
          <Text style={styles.detailsText}>
            {recipe.instructions}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>
            ← Back to My Recipes
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}