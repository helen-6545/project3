//'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import recipeList from "./page"

//import sqlite3 from "sqlite3";

import InsertRecipes from './insertRecipe'


let StartUp = true
let inputShow = false

let recipeTemplete = {name:"", image:"", stepNum:0, instructions:[], tag:[]}


/*let finalized = []
let finalizedDisplay = []

let allStepsString = ""*/

export default function Generation(props) {
  //const router = useRouter();
  let allStepsDisplay=props.allStepsDisplay
  let allStepsString=props.allStepsString
  let StepNum=props.StepNum
  let tagList=props.tagList
  //let Choices=props.listChoice
  //let StepNum=Choices[5]-1

  /*let ingredient1 =[]
  let ingredient2 =[]
  let ingredient3 =[]
  let ingredient4 =[]
  let ingredient5 =[]*/

 // let potentialIngredients = []

 // let allIngredients =[]
  //let allMethods =[]

  //let step

  //let allSteps = []
  //let allStepsDisplay = []
  //let tagList = []

  //let recipeDatabase = SQLite.openDatabase({  name: 'testTable', //Name of my table
    //createFromLocation: "~MyDB.db", })// Name of my DB

    //const recipeDatabase = new sqlite3.Database('prisma\dev.db');

  /*for(let i=0; i<5; i++){
    if(Choices[i]!="nothing"){
      tagList.push(Choices[i])
    }
  }
  
  for(let j=0; j<=tagList.length; j++){
    for(let i=0; i<tagsFull.length; i++){
      if (tagsFull[i] === (tagList[j])){
        potentialIngredients.push(ingredients[i])
    }}}
    console.log(potentialIngredients)
  /*for(let i=0; i<tagsFull.length; i++){
    if (tagsFull[i] === (Choices[1])){
     ingredient2.push(ingredients[i])
    }}

    for(let i=(StepNum); i>=0; i--){
        allIngredients.push(potentialIngredients[Math.floor(Math.random()*potentialIngredients.length)])
        //allIngredients.push(ingredient2[Math.floor(Math.random()*ingredient2.length)])
    }
    for(let i=StepNum; i>=0; i--){
        allMethods.push(methods[Math.floor(Math.random()*methods.length)])
    }


   for(let i=StepNum; i>=0; i--){
        step =(steps[Math.floor(Math.random()*steps.length)])
        step = step.replace("{method}",allMethods[i])
        step = step.replace("{ingredient}",allIngredients[i])
        let stepP = <p key={"step"+i}>{step}</p>
        allSteps.push(step)
        allStepsDisplay.push(stepP)
        allStepsString+="<p key={"+i+"}>"+step+"</p>"
    }*/

    

  return (
    <div><form action={InsertRecipes}>
       <div>
        {allStepsDisplay}
        <br></br><br></br>
       </div>

        <div>
            <input type="hidden" name="recipeSteps" value={allStepsString}></input>
            <input type="hidden" name="stepNumber" value={StepNum}></input>
            <input type="hidden" name="recipeTags" value={tagList}></input>
        <br></br><br></br>
            Recipe Name: <input id="recipeName" name="recipeName" defaultValue="Name"/>
            <br></br>
            Recipe Image: <input id="recipeImage" name="recipeImage" defaultValue="Image Path Here"/>
            <br></br>
            <button className="enterButtons" type="submit">
          Enter
        </button>
            </div>

        </form>
    </div>)
    function saveInput(){
        StartUp=false
        inputShow=true
        for(let i=StepNum; i>=0; i--){
          finalized.push(allSteps[i])
        }
        for(let i=0; i<=StepNum; i++){
          finalizedDisplay.push(allStepsDisplay[i])
        }
        //console.log(finalized)
        //router.refresh()
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
      //console.log(recipeTemplete)
      InsertRecipes(recipeTemplete)
      //console.log("dataEnter")

      //RecipePush(recipeTemplete)
      //console.log(finalized)
      //console.log(recipeTemplete)
    }
    
  }
