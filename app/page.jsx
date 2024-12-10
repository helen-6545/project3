import { PrismaClient } from '@prisma/client'
import Home from './pageLayout'
const prisma = new PrismaClient()


export default async function extract() {

    

const ingredientList = await prisma.ingredients.findMany()
const methodList = await prisma.methods.findMany()
const stepList = await prisma.steps.findMany()
const recipeList = await prisma.recipes.findMany()

return( <div>
    
    <Home ingredientList={ingredientList} methodList={methodList} stepList={stepList} recipeList={recipeList}> </Home>



</div> )
}
