'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";

import Generate from './generateRecipe'
import InsertIngredient from './insertIngredients'
import Display from './savedRecipes'

let generatePage = false;
let insertPage = false
let displayPage = false;


export default function Home(props) {

  let ingredientList=props.ingredientList
  let methodList=props.methodList
  let stepList=props.stepList

  //console.log(ingredientList)

  let ingredients = ingredientList.map(ingredientList => ingredientList.name)
  let tagsFull = ingredientList.map(ingredientList => ingredientList.tag)
  //console.log(tagsFull)
  let methods = methodList.map(methodList => methodList.name)
  let steps = stepList.map(stepList => stepList.name)
  let tags = [...new Set(tagsFull)]
  //console.log(tags)


  const router = useRouter();

 /*if(generatePage){
  return(
  <div>
  {Generate(ingredientList,methodList,stepList)}</div>)
  //return recipe
 }
 if(insertPage){
  return(
    <div>{Insert()}</div>)
 }
 if(displayPage){
  Generate()
 }*/

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
        

        {generatePage && <div> {Generate(ingredientList,methodList,stepList)}</div>}
        {insertPage && <div>{InsertIngredient()}</div>}   
        {displayPage && <div>{Display()}</div>}   


        </div>)

    /*    {generatePage && <div>
          <Generate ingredientList={props.ingredientList}methodList={props.methodList}stepList={props.stepList}></Generate>
          PageLayout
          </div>}
        {displayPage && <div>
          <Display></Display>
          </div>}
    </div>
    
  )*/
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