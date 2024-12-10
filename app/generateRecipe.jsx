'use client';
import React from 'react';
import {useRouter} from "next/navigation";
import Generation from "./generation"
let generation = false

let allIngredients =[]
let allMethods =[]
let potentialIngredients = []
let step
let allStepsDisplay = []
let tagList = []
let allStepsString = ""
let StepNum

export default function Generate(props) {
  const router = useRouter();

  let ingredientList = props.ingredientList
  let methods = props.methods
  let stepList = props.stepList

  let ingredients = ingredientList.map(ingredientList => ingredientList.name)
  let tagsFull = ingredientList.map(ingredientList => ingredientList.tag)

  let steps = stepList.map(stepList => stepList.name)
  let tags = [...new Set(tagsFull)]

  let dropdown1 = dropDown(1)
  let dropdown2 = dropDown(2)
  let dropdown3 = dropDown(3)
  let dropdown4 = dropDown(4)
  let dropdown5 = dropDown(5)
  let Choices = []

  
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
<select className="dropdown" id="stepnum">
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
        {generation && <Generation allStepsDisplay={allStepsDisplay} allStepsString={allStepsString} tagList={tagList} StepNum={StepNum}></Generation>}
    </div>)

    function dropDown(num){
      return(
        <select className="dropdown" id={"ingredientTag"+num} key={"ingredientTag"+num}>
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
      StepNum = document.getElementById("stepnum").value
      Choices.push(tag1)
      Choices.push(tag2)
      Choices.push(tag3)
      Choices.push(tag4)
      Choices.push(tag5)
      Choices.push(StepNum)
      setSteps()
    }

    function setSteps(){
      for(let i=0; i<5; i++){
        if(Choices[i]!="nothing"){
          tagList.push(Choices[i])
        }
      }
      
      for(let j=0; j<=tagList.length; j++){
        for(let i=0; i<tagsFull.length; i++){
          if (tagsFull[i] === (tagList[j])){
            potentialIngredients.push(ingredients[i])
        }}}
    
        for(let i=(StepNum); i>=0; i--){
            allIngredients.push(potentialIngredients[Math.floor(Math.random()*potentialIngredients.length)])
        }
        for(let i=StepNum; i>=0; i--){
            allMethods.push(methods[Math.floor(Math.random()*methods.length)])
        }
    
    
       for(let i=StepNum; i>0; i--){
            step =(steps[Math.floor(Math.random()*steps.length)])
            step = step.replace("{method}",allMethods[i])
            step = step.replace("{ingredient}",allIngredients[i])
            let stepP = <p key={"step"+i}>{step}</p>
            allStepsDisplay.push(stepP)
            allStepsString+=(step+",")
        }
      generation=true
      router.refresh()
    }

}