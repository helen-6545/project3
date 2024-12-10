'use client';
import React from 'react';
import {useRouter} from "next/navigation";

import Generate from './generateRecipe'
import Insert from './insert'
import Display from './displayRecipes'

let generatePage = false;
let insertPage = false
let displayPage = false;


export default function Home(props) {

  let ingredientList=props.ingredientList
  let methodList=props.methodList
  let stepList=props.stepList
  let recipeList=props.recipeList

  let tagsFull = ingredientList.map(ingredientList => ingredientList.tag)
  let methods = methodList.map(methodList => methodList.name)
  let tags = [...new Set(tagsFull)]

  const router = useRouter();

  return (
    <div>
      <button className="mainButtons" onClick={generatePageLoad}>
          Generate Recipe
        </button>
        <button className="mainButtons" onClick={insertPageLoad}>
          Insert
        </button>
        <button className="mainButtons" onClick={displayPageLoad}>
          Saved Recipes
        </button>
        

        {generatePage && <Generate ingredientList={ingredientList} methods={methods} stepList={stepList}></Generate>}
        {insertPage && <Insert></Insert>}   
        {displayPage && <Display recipeList={recipeList} tags={tags}></Display>}   


        </div>)

  function generatePageLoad(){
    generatePage = true;
    insertPage = false;
    displayPage = false;
    router.refresh()
  }
  function insertPageLoad(){
    generatePage = false;
    insertPage = true;
    displayPage = false;
    router.refresh()
  }
  function displayPageLoad(){
    generatePage = false;
    insertPage = false;
    displayPage = true;
    router.refresh()
  }

}