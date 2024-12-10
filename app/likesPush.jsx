'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function LikesUpdate(formData) {
  console.log("update page")
  await prisma.recipes.update({
    where: {
        id: Number(formData.get("recipeID"))},
    data: {
      likes: Number(formData.get("recipeLikes"))+1,
    },
  });
}