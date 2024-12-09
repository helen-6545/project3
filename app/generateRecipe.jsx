'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import Generation from "./generation"
//import {ingredientList, tags} from "./page"
//import methodList from "./page"
//import stepList from "./page"
let generation = false

let ingredient1 =[]
let ingredient2 =[]

let allIngredients =[]
let allMethods =[]

let step


export default function Generate(ingredientList,methodList,stepList) {
  //const router = useRouter();
  //const tags = ingredientList.data.map((ingredientList, index) => {
    //return <div>{ingredientList.tag}</div>
  //})

  //const tags = new Set()
  //ingredientList.map(ingredientList => tags.add(ingredientList.tag))

  //const ingredientList = props.ingredientList
  //const methodList = props.methodList
  //const stepList = props.stepList
  let ingredients = ingredientList.map(ingredientList => ingredientList.name)
  let tagsFull = ingredientList.map(ingredientList => ingredientList.tag)
  //console.log(tagsFull)
  let methods = methodList.map(methodList => methodList.name)
  let steps = stepList.map(stepList => stepList.name)
  let tags = [...new Set(tagsFull)]
  //console.log(tags)
  let dropdown1 = dropDown(1)
  let dropdown2 = dropDown(2)
  let dropdown3 = dropDown(3)
  let dropdown4 = dropDown(4)
  let dropdown5 = dropDown(5)
  let Choices = []
  const [listChoice, setListChoice] = useState([]);

  //if(generation){
  //  generation()
 // }
  
  return (
    <div>
   Select up to five options for your recipe: 
 {dropdown1}
 {dropdown2}
 {dropdown3}
 {dropdown4}
 {dropdown5}
<br></br>
Select how many steps your recipe should be:
<select id="stepnum">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
</select>
<br></br>
<button className="enterButtons" onClick={selectionCheck}>
          Ready!
        </button>
        {generation && <Generation ingredients={ingredients}methods={methods}steps={steps}tagsFull={tagsFull}listChoice={listChoice}></Generation>}
    </div>)

    function dropDown(num){
      return(
        <select id={"ingredientTag"+num} key={"ingredientTag"+num}>
          <option value="nothing" key={"nothing"+num}>
          
        </option>
          {tags.map((tags) => (
        <option value={tags} key={tags+num}>
          {tags}
        </option>))}
        </select>
      )
    }
    function selectionCheck(){
      const tag1 = document.getElementById("ingredientTag1").value
      const tag2 = document.getElementById("ingredientTag2").value
      const tag3 = document.getElementById("ingredientTag3").value
      const tag4 = document.getElementById("ingredientTag4").value
      const tag5 = document.getElementById("ingredientTag5").value
      const StepNum = document.getElementById("stepnum").value
      //console.log(tag1,tag2,StepNum)
      Choices.push(tag1)
      Choices.push(tag2)
      Choices.push(tag3)
      Choices.push(tag4)
      Choices.push(tag5)
      Choices.push(StepNum)
      setListChoice(Choices)
      generation=true
      router.refresh()
    }

/*function generation(){
  let StepNum=Choices[2]-1
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
    return(
      <div>generation</div>
    )
}*/

}