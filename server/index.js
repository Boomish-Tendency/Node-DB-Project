const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require('./controller'),
express = require('express'),
app = express(),
port = 4040

app.use(express.json())

//# Get All Recipes
app.get("/api/recipes", getRecipes)

//# Get One Recipie
app.get("/api/recipes/:id", getRecipe)

//# Add Recipe via body
app.post("/api/recipes", addRecipe)

//# edit recipe
app.put("/api/recipes/:id", editRecipe)

//# delete recipe
app.delete("api/recipes/:id", deleteRecipe)


app.listen(port, () => console.log(`Server running on port ${port}`))