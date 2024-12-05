const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const seed = async () => {
        const createMany = await prisma.ingredients.createMany({
            data: [
                {
                    name: "carrot",
                    tag: "Savory"
                },
                {
                    name: "ghost pepper",
                    tag: "Spicy"
                },
                {
                    name: "chocolate",
                    tag: "Sweet"
                },
                {
                    name: "arsenic",
                    tag: "Spicy"
                },
                {
                    name: "milk",
                    tag: "Dairy"
                },
                {
                    name: "cheese wheel",
                    tag: "Dairy"
                },
                {
                    name: "4 pounds of sugar",
                    tag: "Sweet"
                },
                {
                    name: "tomato",
                    tag: "Sweet"
                },
            ]})}

const seed1 = async () => {
        const createMany = await prisma.methods.createMany({
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
        const createMany = await prisma.steps.createMany({
            data: [
                {
                    name: '${method} ${ingredient} for 2 minutes'
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

seed()
seed1()
seed2()
            


