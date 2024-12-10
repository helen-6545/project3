'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertMethod(formData) {
  await prisma.methods.update({
    where: {
        id: formData.get("recipeID")},
    data: {
      name: formData.get("recipeLikes"),
    },
  });
}