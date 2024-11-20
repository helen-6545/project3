const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.Ingredients.createMany({
            data: [
                {
                    name: "carrot",
                    tag: "savory"
                },
                {
                    name: "ghost pepper",
                    tag: "spicy"
                },
                {
                    name: "chocolate",
                    tag: "sweet"
                },
                {
                    name: "arsenic",
                    tag: "spicy"
                },
                {
                    name: "milk",
                    tag: "dairy"
                },
                {
                    name: "cheese wheel",
                    tag: "dairy"
                },
                {
                    name: "4 pounds of sugar",
                    tag: "sweet"
                },
                {
                    name: "tomato",
                    tag: "sweet"
                },
            ]})}

const seed1 = async () => {
        const createMany = await prisma.Methods.createMany({
            data: [
                {
                    name: "Cook"
                },
                {
                    name: "Beat"
                },
                {
                    name: "Chop"
                },
                {
                    name: "Bake"
                },
                {
                    name: "Sneak a taste of"
                },
                {
                    name: "Judge quality of"
                },
            ]})}

const seed2 = async () => {
        const createMany = await prisma.Steps.createMany({
            data: [
                {
                    name: "{method} {ingredient} for 2 minutes"
                }, 
                {
                    name: "{method} {ingredient} until you're done"
                },      
                {
                    name: "{method} {ingredient} instead of looking behind you"
                },    
                {
                    name: "{method} {ingredient} until you feel something"
                },   
                {
                    name: "{method} {ingredient} just like your grandmother used to"
                },  
                {
                    name: "{method} {ingredient} for 10 minutes"
                }, 
                {
                    name: "{method} {ingredient} and leave it. Take a load off! Wait, is something burning?"
                }, 
                {
                    name: "Preheat oven to 350 degrees"
                }, 
                {
                    name: "Don't look behind you :("
                }, 
            ]})}
            


