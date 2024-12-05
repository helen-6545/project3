'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import recipeList from "./page"


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

  let method
  let ingredient

  let step

  let allSteps = []
  
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
        allSteps.push(stepP)
    }

  return (
    <div>
       {allSteps}


    </div>)
}