
import React from 'react';
import InsertRecipes from './insertRecipe'


export default function Generation(props) {

  let allStepsDisplay=props.allStepsDisplay
  let allStepsString=props.allStepsString
  let StepNum=props.StepNum
  let tagList=props.tagList


    

  return (
    <div>
       <div>
        {allStepsDisplay}
        <br></br><br></br>
       </div>

       <form action={InsertRecipes}><div>
            <input type="hidden" name="recipeSteps" value={allStepsString}></input>
            <input type="hidden" name="stepNumber" value={StepNum}></input>
            <input type="hidden" name="recipeTags" value={tagList}></input>
        <br></br><br></br>
            Recipe Name: <input className="textbox" id="recipeName" name="recipeName" defaultValue="Name"/>
            <br></br>
            Recipe Image: <input className="textbox" id="recipeImage" name="recipeImage" defaultValue="Image Path Here"/>
            <br></br>
            <button className="enterButtons" type="submit">
          Enter
        </button>
            </div>

        </form>
    </div>)
  }
