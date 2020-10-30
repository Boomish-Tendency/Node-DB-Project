const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require('./controller'),
express = require('express'),
app = express(),
port = 4040

app.use(express.json())


app.get("/api/recipes", getRecipes)
app.get("/api/recipes/:id", getRecipe)
app.post("/api/recipes", addRecipe)
app.put("/api/recipes/:id", editRecipe)
app.delete("/api/recipes/:id", deleteRecipe)


app.listen(port, () => console.log(`Server running on port ${port}`))