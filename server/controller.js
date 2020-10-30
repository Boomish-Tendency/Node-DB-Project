let recipes = [
    {
        id: 0,
        recipeName: "Enchiladas",
        prepTime: "30 min",
        cookTime: "45 min",
        totalTime: "1hr 15min",
        yield: "8 servings",
        ingredientsList: {
            header0: {
                title: "Sauce:",
                ingredients: ["2 tablespoons canola oil", "2 tablespoons all-purpose flour", "One 28-ounce can enchilada or Mexican red sauce", "2 cups chicken broth", "1/2 teaspoon salt", "1/2 teaspoon black pepper"]
            },
            header1: {
                title: "Meat:",
                ingredients: ["1 pound ground beef", "1 medium onion, finely chopped", "1/2 teaspoon salt"]
            },
            header2: {
                title: "The Rest:",
                ingredients: ["Canola oil, for frying", "10 to 14 corn tortillas", "Two 4-ounce cans diced green chilies", "1 cup chopped green onions", "1/2 cup chopped black olives", "3 cups grated sharp Cheddar cheese", "Cilantro, for garnish"]
            }
        }
    }
]

let id = 1

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes)
    },
    getRecipe: (req, res) => {
        const {id} = req.params
        const recipeFound = recipes.find(recipe => recipe.id === +id)

        res.status(200).send(recipeFound)
    },
    addRecipe: (req, res) => {
        recipes.push({...req.body, id})
        id++
        
        res.status(200).send(recipes)
    },
    editRecipe: (req, res) => {
        const {id} = req.params
        const recipeFound = recipes.find(recipe => recipe.id === +id)
        const recipeIndex = recipes.findIndex(recipe => recipe.id === +id)

        recipes[recipeIndex] = ({...recipeFound, ...req.body})

        res.status(200).send(recipes)
    },
    deleteRecipe: (req, res) => {
        const {id} = req.params
        const recipeIndex = recipes.findIndex(recipe => recipe.id === +id)

        recipes.splice(recipeIndex, 1)
        res.status(200).send(recipes)
    },
}