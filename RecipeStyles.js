
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F0F6FF",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: "#F0F6FF",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 45,
  },

  homeEmoji: {
    fontSize: 58,
    marginBottom: 8,
  },

  homeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#123B6D",
    textAlign: "center",
    marginBottom: 8,
  },

  homeSubtitle: {
    fontSize: 16,
    color: "#55708F",
    textAlign: "center",
    marginBottom: 30,
  },

  welcomeCard: {
    width: "100%",
    backgroundColor: "#DCEEFF",
    borderRadius: 25,
    padding: 28,
    alignItems: "center",
    marginBottom: 30,

    borderWidth: 1,
    borderColor: "#C3DDF7",
  },

  welcomeEmoji: {
    fontSize: 55,
    marginBottom: 12,
  },

  welcomeTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#123B6D",
    marginBottom: 8,
    textAlign: "center",
  },

  welcomeText: {
    fontSize: 15,
    color: "#55708F",
    textAlign: "center",
    lineHeight: 23,
  },

  mainButton: {
    width: "100%",
    backgroundColor: "#2878C8",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",

    elevation: 5,

    shadowColor: "#123B6D",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#123B6D",
    marginBottom: 5,
  },

  sectionSubtitle: {
    fontSize: 14,
    color: "#55708F",
    marginBottom: 18,
  },

  listContainer: {
    paddingBottom: 25,
  },

  recipeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 15,
    padding: 18,

    borderWidth: 1,
    borderColor: "#D7E8F8",

    shadowColor: "#123B6D",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  recipeContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  emojiCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  recipeEmoji: {
    fontSize: 34,
  },

  recipeTextContainer: {
    flex: 1,
  },

  recipeTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1B3A57",
    marginBottom: 5,
  },

  recipeInfo: {
    fontSize: 14,
    color: "#64819D",
    marginBottom: 8,
  },

  viewRecipe: {
    fontSize: 14,
    color: "#2878C8",
    fontWeight: "bold",
  },

  detailsContainer: {
    flex: 1,
    backgroundColor: "#F0F6FF",
  },

  detailsContent: {
    padding: 20,
    paddingBottom: 35,
  },

  detailsEmoji: {
    fontSize: 65,
    textAlign: "center",
    marginBottom: 8,
  },

  detailsTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#123B6D",
    textAlign: "center",
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: "#DCEEFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#C3DDF7",
  },

  infoText: {
    fontSize: 15,
    color: "#456681",
    marginBottom: 5,
  },

  detailsHeading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#123B6D",
    marginBottom: 10,
    marginTop: 5,
  },

  textBox: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 15,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#E0ECF7",

    shadowColor: "#123B6D",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  detailsText: {
    fontSize: 15,
    color: "#4B6378",
    lineHeight: 24,
  },

  backButton: {
    backgroundColor: "#2878C8",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 5,

    elevation: 3,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});

export default styles;
