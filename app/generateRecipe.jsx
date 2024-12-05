'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import Generation from "./generation"
//import {ingredientList, tags} from "./page"
//import methodList from "./page"
//import stepList from "./page"
let generation = false


export default function Generate(props) {
  const router = useRouter();
  //const tags = ingredientList.data.map((ingredientList, index) => {
    //return <div>{ingredientList.tag}</div>
  //})

  //const tags = new Set()
  //ingredientList.map(ingredientList => tags.add(ingredientList.tag))

  const ingredientList = props.ingredientList
  const methodList = props.methodList
  const stepList = props.stepList
  let ingredients = ingredientList.map(ingredientList => ingredientList.name)
  let tagsFull = ingredientList.map(ingredientList => ingredientList.tag)
  let methods = methodList.map(methodList => methodList.name)
  let steps = stepList.map(stepList => stepList.name)
  let tags = [...new Set(tagsFull)]
  let dropdown1 = dropDown(1)
  let dropdown2 = dropDown(2)
  let Choices = []
  const [listChoice, setListChoice] = useState([]);
  //let dropdownHtml = parser.parseFromString(dropdownString, "text/html")
//console.log(dropdown)
  
  return (
    <div>
   Select two options for your recipe: 
 {dropdown1}
 {dropdown2}
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

        {generation && <div>
          <Generation ingredients={ingredients}methods={methods}steps={steps}tagsFull={tagsFull}listChoice={listChoice}></Generation>
          </div>}
    </div>)

    function dropDown(num){
      return(
        <select id={"ingredientTag"+num}>
          {tags.map((tags) => (
        <option value={tags}>
          {tags}
        </option>))}
        </select>
      )
    }
    function selectionCheck(){
      const tag1 = document.getElementById("ingredientTag1").value
      const tag2 = document.getElementById("ingredientTag2").value
      const StepNum = document.getElementById("stepnum").value
      console.log(tag1,tag2,StepNum)
      Choices.push(tag1)
      Choices.push(tag2)
      Choices.push(StepNum)
      setListChoice(Choices)
      generation=true
      router.refresh()
    }
}