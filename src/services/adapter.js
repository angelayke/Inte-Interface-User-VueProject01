class RecipeApiAdapter {
    apRecipesToRecipes(recipes){
        return recipes.map(
            this.formatRecipe.bind(this)
        )
    }

    formatRecipe(recipes) {
        return {
            ...recipes,
            date: new Date(recipe.date)
        }
    }
 }

export default RecipeApiAdapter;