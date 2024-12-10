'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertIngredient(formData) {
  await prisma.ingredients.create({
    data: {
      name: formData.get("ingredientName"),
      tag: String(formData.get("ingredientTag"))
    },
  });
}