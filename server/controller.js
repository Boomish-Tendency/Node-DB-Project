let recipes = [
    {
        id: 0,
        recipeName: "Enchiladas",
        prepTime: "30 min",
        cookTime: "45 min",
        totalTime: "1hr 15min",
        yields: "8 servings",
        lists: [
            [
                {
                    title: "Sauce:",
                    ingredients: ["2 tablespoons canola oil", "2 tablespoons all-purpose flour", "One 28-ounce can enchilada or Mexican red sauce", "2 cups chicken broth", "1/2 teaspoon salt", "1/2 teaspoon black pepper"]
                },
                {
                    title: "Meat:",
                    ingredients: ["1 pound ground beef", "1 medium onion, finely chopped", "1/2 teaspoon salt"]
                },
                {
                    title: "The Rest:",
                    ingredients: ["Canola oil, for frying", "10 to 14 corn tortillas", "Two 4-ounce cans diced green chilies", "1 cup chopped green onions", "1/2 cup chopped black olives", "3 cups grated sharp Cheddar cheese", "Cilantro, for garnish"]
                }
            ],
            [
                {
                    title: "For the sauce:",
                    directions: ["In a saucepan over medium-low heat, combine the canola oil and flour. Whisk together and allow to bubble for 1 minute. Pour in the red sauce, chicken broth, salt and pepper. Bring to a boil. Reduce the heat and simmer while you prepare the other ingredients."]
                },
                {
                    title: "For the meat:",
                    directions: ["While the sauce is simmering, brown the ground beef with the onions in a large skillet over medium-high heat. Drain the fat, add the salt and stir to combine. Turn off the heat and set aside."]
                },
                {
                    title: "For the rest:",
                    directions: ["In a small skillet over medium heat, heat some canola oil. Lightly fry the tortillas just until soft. Do not crisp. Drain on a paper towel-lined plate. Repeat until all the tortillas have been fried.", "Preheat the oven to 350 degrees F.", "Spread 1/2 cup of the sauce in the bottom of a 9- by 13-inch baking dish. Next, one at a time, dip each tortilla into the sauce. Set the sauce-soaked tortilla on a plate. Place on some of the meat mixture, chilies, green onions and black olives. Top with a generous portion of grated Cheddar. Roll up the tortilla to contain the filling inside.", "Place the tortilla seam side down in the baking dish. Repeat with the rest of the tortillas and pour the remaining sauce over the top. End with a generous sprinkling of cheese and any other bits of chiles, green onions or olives you have left over from the filling.", "Bake the enchiladas for 20 minutes, or until bubbly. Sprinkle chopped cilantro over the top and serve."]
                }
            ]
        ]
    },
    {
        id: 1,
        recipeName: "MCTASTY!!!",
        prepTime: "0 min",
        cookTime: "0 min",
        totalTime: "0 min",
        yields: "1 servings",
        lists: [
            [
                {
                    title: "SAUCY:",
                    ingredients: ["2 tablespoons canola oil", "2 tablespoons all-purpose flour", "One 28-ounce can enchilada or Mexican red sauce", "2 cups chicken broth", "1/2 teaspoon salt", "1/2 teaspoon black pepper"]
                },
                {
                    title: "Meat:",
                    ingredients: ["1 pound ground beef", "1 medium onion, finely chopped", "1/2 teaspoon salt"]
                },
                {
                    title: "The Rest:",
                    ingredients: ["Canola oil, for frying", "10 to 14 corn tortillas", "Two 4-ounce cans diced green chilies", "1 cup chopped green onions", "1/2 cup chopped black olives", "3 cups grated sharp Cheddar cheese", "Cilantro, for garnish"]
                }
            ],
            [
                {
                    title: "For the sauce:",
                    directions: ["In a saucepan over medium-low heat, combine the canola oil and flour. Whisk together and allow to bubble for 1 minute. Pour in the red sauce, chicken broth, salt and pepper. Bring to a boil. Reduce the heat and simmer while you prepare the other ingredients."]
                },
                {
                    title: "For the meat:",
                    directions: ["While the sauce is simmering, brown the ground beef with the onions in a large skillet over medium-high heat. Drain the fat, add the salt and stir to combine. Turn off the heat and set aside."]
                },
                {
                    title: "For the rest:",
                    directions: ["In a small skillet over medium heat, heat some canola oil. Lightly fry the tortillas just until soft. Do not crisp. Drain on a paper towel-lined plate. Repeat until all the tortillas have been fried.", "Preheat the oven to 350 degrees F.", "Spread 1/2 cup of the sauce in the bottom of a 9- by 13-inch baking dish. Next, one at a time, dip each tortilla into the sauce. Set the sauce-soaked tortilla on a plate. Place on some of the meat mixture, chilies, green onions and black olives. Top with a generous portion of grated Cheddar. Roll up the tortilla to contain the filling inside.", "Place the tortilla seam side down in the baking dish. Repeat with the rest of the tortillas and pour the remaining sauce over the top. End with a generous sprinkling of cheese and any other bits of chiles, green onions or olives you have left over from the filling.", "Bake the enchiladas for 20 minutes, or until bubbly. Sprinkle chopped cilantro over the top and serve."]
                }
            ]
        ]
    },
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
        const {index} = req.params
        
        recipes[index] = {...recipes[index], ...req.body}

        res.status(200).send(recipes)
    },
    deleteRecipe: (req, res) => {
        const {id} = req.params
        const recipeIndex = recipes.findIndex(recipe => recipe.id === +id)

        recipes.splice(recipeIndex, 1)
        res.status(200).send(recipes)
    },
}