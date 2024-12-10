'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";


let searchShow = []


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
  
  const [recipeText, setRecipeText] = useState("")

  let showAll = []
  for(let i=0; i<recipeList.length; i++){
    showAll.push(i)
  }
  if(recipeText==""){
  setRecipeText(RecipeShow(showAll))}
  //const parser = new DOMParser();
  //const text = parser.parseFromString(recipeText, "text/html");

  
  
  return (
    <div>
    {dropDownText}
    <button className="enterButtons" onClick={search}>
          Ready!
        </button><br></br><br></br>

        {recipeText}

    </div>)

    function search(){
      const searchTag = document.getElementById("recipeTagfind").value
      if(searchTag==="all"){
        setRecipeText(RecipeShow(showAll))
      }
      else{
        for(let i=0; i<recipeList.length; i++){
        if(tags[i].includes(searchTag)){
          searchShow.push(i)
        }
      }
      setRecipeText(RecipeShow(searchShow))}
      router.refresh()
    }
    function RecipeShow(props){
      let text=[]
      setRecipeText("")
      for(let i=0; i<props.length; i++){
        text.push(textForm(props[i]))
      }
      return text
    }
    function textForm(props){
      let recipe=[]
      let list = instructions[props].split(',')
       recipe.push(<p>Recipe #{props+1}: {names[props]}</p>),
       recipe.push(<img src={images[props]} alt='recipeImage' width='200'/>),
       recipe.push(<p>Tags: {tags[props]}</p>)
       return(<div key={"list"+props}>
        {recipe}<br></br>
        {list.map((list) => (
        <p value={list} key={list}>{list}</p>))}<br></br><br></br><br></br></div>)
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