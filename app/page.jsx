//'use server'
import { PrismaClient } from '@prisma/client'
import Home from './pageLayout'
const prisma = new PrismaClient()

//let ingredientList = { 
 //   id:0, name:"", tag:""}
//let tags = []



export default async function extract() {

    

const ingredientList = await prisma.ingredients.findMany()
//tags = ingredientList.map(ingredients => ingredients.tag)
const methodList = await prisma.methods.findMany()
const stepList = await prisma.steps.findMany()
const recipeList = await prisma.recipes.findMany()

//console.log(ingredientList)

//let tests = Home(ingredientList,methodList,stepList)
//test(tests)

return( <div>
    
    <Home ingredientList={ingredientList} methodList={methodList} stepList={stepList} recipeList={recipeList}> </Home>



</div> )

/*function test(props){
    console.log("test")
    console.log(props)
}

function Push(props){
    console.log("push")
    RecipePush(props)
}*/
async function RecipePush(props){
    //console.log("pushRecipe")
    await prisma.recipes.create({
        data: {
          name: props.recipe.name,
          image: props.recipe.image,
          stepNum: props.recipe.stepNum,
          instructions: String(props.recipe.instructions),
          tags: String(props.recipe.tag)
        },
      });
}

}
