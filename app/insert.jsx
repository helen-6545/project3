'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";

import InsertIngredient from './insertIngredients'
import InsertStep from './insertSteps'
import InsertMethod from './insertMethods'

let text = "(Ex: {method} {ingredient} for 10 minutes)"

export default function Insert() {
    return (
        <div><form action={InsertIngredient}>

        Enter ingredient name and tag here: (Ex: garlic, savory)<br></br>
                Ingredient Name: <input id="ingredientName" name="ingredientName" defaultValue="Name"/>
                <br></br>
                Ingredient Tag: <input id="ingredientTag" name="ingredientTag" defaultValue="Tag"/>
                <br></br>
                <button className="enterButtons" type="submit">
                Enter
                </button>
    
        </form><br></br><br></br>
        <form action={InsertMethod}>

        Enter method here: (Ex: boil)<br></br>
                Method Name: <input id="methodName" name="methodName" defaultValue="Name"/>
                <br></br>
                <button className="enterButtons" type="submit">
                Enter
                </button>
    
        </form><br></br><br></br>
        <form action={InsertStep}>

        Enter step here: {text}<br></br>
                Step: <input id="stepName" name="stepName" defaultValue="Step"/>
                <br></br>
                <button className="enterButtons" type="submit">
                Enter
                </button>
    
        </form><br></br><br></br>
        </div>)
}