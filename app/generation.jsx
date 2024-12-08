//'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import recipeList from "./page"
import Push from './page'

let StartUp = true
let inputShow = false

let recipeTemplete = {name:"", image:"", stepNum:0, instructions:[], tag:[]}

let allSteps = []
let allStepsDisplay = []
let finalized = []
let finalizedDisplay = []

export default function Generation(props) {
  const router = useRouter();
  let ingredients=props.ingredients
  let methods=props.methods
  let steps=props.steps
  let tagsFull=props.tagsFull
  let Choices=props.listChoice
  let StepNum=Choices[2]-1

  let ingredient1 =[]
  let ingredient2 =[]

  let allIngredients =[]
  let allMethods =[]

  let step

  
  for(let i=0; i<tagsFull.length; i++){
    if (tagsFull[i] === (Choices[0])){
     ingredient1.push(ingredients[i])
    }}
  for(let i=0; i<tagsFull.length; i++){
    if (tagsFull[i] === (Choices[1])){
     ingredient2.push(ingredients[i])
    }}

    for(let i=(StepNum/2); i>=0; i--){
        allIngredients.push(ingredient1[Math.floor(Math.random()*ingredient1.length)])
        allIngredients.push(ingredient2[Math.floor(Math.random()*ingredient2.length)])
    }
    for(let i=StepNum; i>=0; i--){
        allMethods.push(methods[Math.floor(Math.random()*methods.length)])
    }


   for(let i=StepNum; i>=0; i--){
        step =(steps[Math.floor(Math.random()*steps.length)])
        step = step.replace("{method}",allMethods[i])
        step = step.replace("{ingredient}",allIngredients[i])
        let stepP = <p>{step}</p>
        allSteps.push(step)
        allStepsDisplay.push(stepP)
    }

  return (
    <div>
       {StartUp && <div>
        {allStepsDisplay}
        <br></br><br></br>
        <button className="enterButtons" onClick={saveInput}>
          Save Recipe
        </button></div>}

        {inputShow && <div>
            {finalizedDisplay}
        <br></br><br></br>
            Recipe Name: <input id="recipeName" defaultValue="Name"/>
            <br></br>
            Recipe Image: <input id="recipeImage" defaultValue="Image Path Here"/>
            <br></br>
            <button className="enterButtons" onClick={enterData}>
          Enter
        </button>
            </div>}

    </div>)
    function saveInput(){
        StartUp=false
        inputShow=true
        for(let i=StepNum; i>=0; i--){
          finalized.push(allSteps[i])
        }
        for(let i=StepNum; i>=0; i--){
          finalizedDisplay.push(allStepsDisplay[i])
        }
        //console.log(finalized)
        router.refresh()
    }
    function enterData(){
      recipeTemplete.name = document.getElementById("recipeName").value
      recipeTemplete.image = document.getElementById("recipeImage").value
      recipeTemplete.stepNum = StepNum+1
      recipeTemplete.instructions = finalized
      for(let i=StepNum; i>=0; i--){
        recipeTemplete.instructions.push(finalized[i])
      }
      recipeTemplete.tag.push(Choices[0])
      recipeTemplete.tag.push(Choices[1])
      console.log("dataEnter")
      Push(recipeTemplete)
      //console.log(finalized)
      //console.log(recipeTemplete)
    }
}