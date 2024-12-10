'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
import LikesUpdate from './likesPush'


let searchShow = []


export default function Display(props) {
  const router = useRouter();
  let recipeList=props.recipeList
  let tagsOptions=props.tags

  let ids = recipeList.map(recipeList => recipeList.id)
  let names = recipeList.map(recipeList => recipeList.name)
  let images = recipeList.map(recipeList => recipeList.image)
  let instructions = recipeList.map(recipeList => recipeList.instructions)
  let tags = recipeList.map(recipeList => recipeList.tag)
  
  let likes = recipeList.map(recipeList => recipeList.likes)

  let dropDownText=dropDown()
  
  const [recipeText, setRecipeText] = useState("")

  let showAll = []
  for(let i=0; i<recipeList.length; i++){
    showAll.push(i)
  }
  if(recipeText===""){
  setRecipeText(RecipeShow(showAll))}

  
  
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
       recipe.push(<p key='1'>Recipe #{props+1}: {names[props]}</p>),
       recipe.push(<img key='2' src={images[props]} alt='recipeImage' width='200'/>),
       recipe.push(<p key='3'>Tags: {tags[props]}</p>)
       recipe.push(<p key='4'>Likes: {likes[props]}</p>)
       return(<div key={"list"+props}>
        {recipe}<br></br>
        {list.map((list) => (
        <p value={list} key={list}>{list}</p>))}<br></br>
        <form action={LikesUpdate}>
        <input type="hidden" name="recipeID" value={ids[props]}></input>
        <input type="hidden" name="recipeLikes" value={likes[props]}></input>
        <button className="enterButtons" type="submit">
          Like!
        </button></form>
        <br></br><br></br></div>)
    }
    function dropDown(){
      return(
        <select className="dropdown" id={"recipeTagfind"} key={"recipeTagfind"}>
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