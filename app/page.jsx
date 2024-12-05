//'use server'
import { PrismaClient } from '@prisma/client'
import Home from './pageLayout'
const prisma = new PrismaClient()

let ingredientList = { 
    id:0, name:"", tag:""}
//let tags = []


export default async function extract() {

    

ingredientList = await prisma.ingredients.findMany()
//tags = ingredientList.map(ingredients => ingredients.tag)
const methodList = await prisma.methods.findMany()
const stepList = await prisma.steps.findMany()
const recipeList = await prisma.recipes.findMany()

//console.log(String(ingredientList))

return( <div>
    
    <Home ingredientList={ingredientList} methodList={methodList} stepList={stepList}>

    </Home>
</div> )
}
