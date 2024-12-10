
import React from 'react';



import InsertRecipes from './insertRecipe'


let StartUp = true
let inputShow = false

let recipeTemplete = {name:"", image:"", stepNum:0, instructions:[], tag:[]}


export default function Generation(props) {

  let allStepsDisplay=props.allStepsDisplay
  let allStepsString=props.allStepsString
  let StepNum=props.StepNum
  let tagList=props.tagList


    

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
      InsertRecipes(recipeTemplete)

    }
    
  }
