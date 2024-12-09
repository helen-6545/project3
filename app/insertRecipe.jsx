'use server'
import React from 'react';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function InsertRecipes(formData) {
    /*formData.get("recipeName")
    formData.get("recipeImage")
    formData.get("recipeSteps")*/

    console.log(formData.get("recipeSteps"))

    await prisma.recipes.create({
        data: {
          name: formData.get("recipeName"),
          image: formData.get("recipeImage"),
          stepNum: Number(formData.get("stepNumber")),
          instructions: String(formData.get("recipeSteps")),
          tag: String(formData.get("recipeTags"))
        },
      });

    /*console.log("test")
    console.log(props)
    await prisma.recipes.create({
        data: {
          name: props.recipe.name,
          image: props.recipe.image,
          stepNum: props.recipe.stepNum,
          instructions: String(props.recipe.instructions),
          tags: String(props.recipe.tag)
        },
      });*/
}