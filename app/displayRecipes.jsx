'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import recipeList from "./page"

let recipeText = ""


export default function Display(props) {
  const router = useRouter();
  let recipeList=props.recipeList
  let tagsOptions=props.tags

  let names = recipeList.map(recipeList => recipeList.name)
  let images = recipeList.map(recipeList => recipeList.image)
  let steps = recipeList.map(recipeList => recipeList.stepNum)
  let instructions = recipeList.map(recipeList => recipeList.instructions)
  let tags = recipeList.map(recipeList => recipeList.tag)
  let likes = recipeList.map(recipeList => recipeList.likes)

  let dropDownText=dropDown()
  RecipeShow()
  
  return (
    <div>
    {dropDownText}
    <button className="enterButtons">
          Ready!
        </button><br></br><br></br>

        {recipeText}

    </div>)
    function RecipeShow(){
      for(let i=0; i<recipeList.length; i++){
       recipeText+="<p>Recipe #"+i+": "+names[i]+"</p><br></br>"
       recipeText+="<img src='"+images[i]+"' alt='recipe"+i+"image' width=200><br></br><br></br>"
       recipeText+=instructions[i]+"<br></br><br></br>"
       recipeText+="<p>Tags: "+tags[i]+"</p><br></br><br></br><br></br>"
      }
    }
    function dropDown(){
      return(
        <select id={"recipeTagfind"} key={"recipeTagfind"}>
          <option value="all" key={"all"}>
          Show All
        </option>
          {tagsOptions.map((tagsOptions) => (
        <option value={tagsOptions} key={tagsOptions}>
          {tagsOptions}
        </option>))}
        </select>
      )
    }
}