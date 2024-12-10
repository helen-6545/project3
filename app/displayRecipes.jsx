'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import recipeList from "./page"
//import parse from 'html-react-parser';




export default function Display(props) {
  const router = useRouter();
  let recipeList=props.recipeList
  let tagsOptions=props.tags

  let names =[] 
  names = recipeList.map(recipeList => recipeList.name)
  let images = recipeList.map(recipeList => recipeList.image)
  let steps = recipeList.map(recipeList => recipeList.stepNum)
  let instructions = recipeList.map(recipeList => recipeList.instructions)
  let tags = recipeList.map(recipeList => recipeList.tag)
  let likes = recipeList.map(recipeList => recipeList.likes)

  let dropDownText=dropDown()
  let recipeText = RecipeShow()
  //const parser = new DOMParser();
  //const text = parser.parseFromString(recipeText, "text/html");

  
  
  return (
    <div>
    {dropDownText}
    <button className="enterButtons">
          Ready!
        </button><br></br><br></br>

        {recipeText}

    </div>)
    function RecipeShow(){
      let recipe=[]

      
      //console.log(list)
      for(let i=0; i<recipeList.length; i++){
      let list = instructions[i].split(',')
      console.log(list)
       recipe.push(<p>Recipe #{i+1}: {names[i]}</p>),
       recipe.push(<img src={images[i]} alt='recipeImage' width='200'/>),
       recipe.push(<p>Tags: {tags[i]}</p>)
       //recipe.push(listMake(instructions[i]))
       return(<div key={i}>
        {recipe}<br></br>
        {list.map((list) => (
        <p value={list} key={list}>{list}</p>))}</div>)
       
      }
      return recipe
    }
    function listMake(props){
      let list = props.split(',')
      console.log(list)
      {list.map((list) => (
        recipe.push(<p value={list} key={list}>{list}</p>)))}
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