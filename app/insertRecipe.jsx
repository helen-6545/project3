'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function InsertRecipes(formData) {

    await prisma.recipes.create({
        data: {
          name: formData.get("recipeName"),
          image: formData.get("recipeImage"),
          stepNum: Number(formData.get("stepNumber")),
          instructions: String(formData.get("recipeSteps")),
          tag: String(formData.get("recipeTags")),
          likes: 0
        },
      });
}