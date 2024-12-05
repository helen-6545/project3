'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";

import Generate from './generateRecipe'
import Display from './savedRecipes'

let generatePage = false;
let displayPage = false;

export default function Home(props) {
  const router = useRouter();
  return (
    <div>
      <button className="mainButtons" onClick={generatePageLoad}>
          Generate Recipe
        </button>
        <button className="mainButtons" onClick={displayPageLoad}>
          Insert
        </button>
        <button className="mainButtons" onClick={displayPageLoad}>
          Saved Recipes
        </button>


        {generatePage && <div>
          <Generate ingredientList={props.ingredientList}methodList={props.methodList}stepList={props.stepList}></Generate>
          </div>}
        {displayPage && <div>
          <Display></Display>
          </div>}
    </div>
    
  )
  function generatePageLoad(){
    generatePage = true;
    displayPage = false;
    router.refresh()
  }
  function displayPageLoad(){
    generatePage = false;
    displayPage = true;
    router.refresh()
  }

}