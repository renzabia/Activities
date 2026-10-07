
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "../styles/styles";

const recipes = [
  {
    id: "1",
    name: "Spaghetti Carbonara",
    category: "Italian",
    time: "30 minutes",
    emoji: "🍝",
    ingredients:
      "Spaghetti, eggs, bacon, Parmesan cheese, garlic, black pepper, and salt.",
    instructions:
      "Cook the spaghetti until tender. Fry the bacon until crispy. Mix the eggs and Parmesan cheese in a bowl. Add the hot pasta to the bacon and remove from heat. Pour in the egg and cheese mixture and stir until creamy. Season with black pepper and serve.",
  },

  {
    id: "2",
    name: "Bicol Express",
    category: "Filipino",
    time: "45 minutes",
    emoji: "🌶️",
    ingredients:
      "Pork, coconut milk, shrimp paste, chili peppers, garlic, onion, ginger, and black pepper.",
    instructions:
      "Sauté the garlic, onion, and ginger until fragrant. Add the pork and cook until lightly browned. Add shrimp paste and mix well. Pour in the coconut milk and simmer until the pork becomes tender. Add chili peppers and cook until the sauce becomes thick and creamy.",
  },

  {
    id: "3",
    name: "Fried Chicken",
    category: "Filipino",
    time: "40 minutes",
    emoji: "🍗",
    ingredients:
      "Chicken pieces, flour, garlic powder, onion powder, black pepper, salt, and cooking oil.",
    instructions:
      "Season the chicken with salt, pepper, garlic powder, and onion powder. Coat each chicken piece evenly with flour. Heat the cooking oil in a pan. Fry the chicken until golden brown and crispy on the outside and fully cooked inside. Drain excess oil and serve hot.",
  },
];

export default function RecipeListScreen({ navigation }) {
  const renderRecipe = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.recipeCard}
        onPress={() =>
          navigation.navigate("RecipeDetails", {
            recipe: item,
          })
        }
      >
        <View style={styles.recipeContent}>

          <View style={styles.emojiCircle}>
            <Text style={styles.recipeEmoji}>
              {item.emoji}
            </Text>
          </View>

          <View style={styles.recipeTextContainer}>

            <Text style={styles.recipeTitle}>
              {item.name}
            </Text>

            <Text style={styles.recipeInfo}>
              {item.category} • {item.time}
            </Text>

            <Text style={styles.viewRecipe}>
              View Recipe →
            </Text>

          </View>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>
        Choose a Recipe 👨‍🍳
      </Text>

      <Text style={styles.sectionSubtitle}>
        Tap a recipe to see the ingredients and instructions.
      </Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

    </View>
  );
}
