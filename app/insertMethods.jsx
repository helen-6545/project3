'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertMethod(formData) {
  await prisma.methods.create({
    data: {
      name: formData.get("methodName"),
    },
  });
}