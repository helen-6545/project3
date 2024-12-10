'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertStep(formData) {
  await prisma.steps.create({
    data: {
      name: formData.get("stepName"),
    },
  });
}