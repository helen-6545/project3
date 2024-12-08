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
                {
                    name: "salt",
                    tag: "Salty"
                },
                {
                    name: "tofu",
                    tag: "Protein"
                },
                {
                    name: "garlic",
                    tag: "Savory"
                },
                {
                    name: "honey",
                    tag: "Sweet"
                },
                {
                    name: "egg",
                    tag: "Protein"
                },
                {
                    name: "pasta",
                    tag: "Grain"
                },
                {
                    name: "bread",
                    tag: "Grain"
                },
                {
                    name: "microplastic",
                    tag: "Savory"
                }
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
                {
                    name: "Destroy"
                },
                {
                    name: "Consider the"
                },
                {
                    name: "Cut"
                },
                {
                    name: "Just eat the"
                },
                {
                    name: "Realize you forgot the"
                },
                {
                    name: "Saute"
                },
                {
                    name: "Simmer"
                },
                {
                    name: "Broil"
                },
                {
                    name: "Fry"
                },
                {
                    name: "Caramelize"
                },
                {
                    name: "Boil"
                }
            ]})}

const seed2 = async () => {
        const createMany = await prisma.steps.createMany({
            data: [
                {
                    name: '{method} {ingredient} for 2 minutes'
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
                {
                    name: "{method} {ingredient} for as long as it takes"
                }, 
                {
                    name: "{method} {ingredient}. Good job!"
                }, 
                {
                    name: "{method} {ingredient}, ponder takeout"
                }, 
                {
                    name: "{method} {ingredient} but ultimately say it's good enough"
                }, 
                {
                    name: "{method} {ingredient} immensely"
                }, 
                {
                    name: "{method} {ingredient} until it's in little tiny pieces"
                }, 
                {
                    name: "{method} {ingredient}, don't ponder life"
                }, 
                {
                    name: "Realize you don't know how to cook"
                }, 
                {
                    name: "I think you messed up that last step there"
                }, 
                {
                    name: "Now do that again"
                }, 
                {
                    name: "Ignore the next step, it's A TRAP!!!!"
                }, 
                {
                    name: "Nice job loser, that's exactly what I wanted you to do"
                }, 
                {
                    name: "I bet now you're gonna want to {method} {ingredient}, huh?"
                }, 
                {
                    name: "Wait, did you forget the {ingredient}? Literally how? It's the most important ingredient!"
                }, 
                {
                    name: "Go back to the store"
                }, 
                {
                    name: "Do you even know how to {method} stuff?"
                }, 
            ]})}

seed()
seed1()
seed2()
            


