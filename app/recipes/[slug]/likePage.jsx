'use client'
import React from 'react';
import { PrismaClient } from '@prisma/client'
import {useState } from 'react'
import {useRouter} from "next/navigation";



export default function Likes(props) {
const router = useRouter();

let id = props.id
let recipeList = props.recipeList

let list = instructions[id].split(',')

let ids = recipeList.map(recipeList => recipeList.id)
let names = recipeList.map(recipeList => recipeList.name)
let images = recipeList.map(recipeList => recipeList.image)
let instructions = recipeList.map(recipeList => recipeList.instructions)
let tags = recipeList.map(recipeList => recipeList.tag)
let likes = recipeList.map(recipeList => recipeList.likes)
const [likeNumber, setLikeNumber] = useState(likes[id])
return(<div>

       <p>Recipe #{id+1}: {names[id]}</p>
       <img src={images[id]} alt='recipeImage' width='200'/>
       <p>Tags: {tags[id]}</p>

        {list.map((list) => (
        <p>{list}</p>))}<br></br><br></br>

        <p>Likes: {likeNumber}</p>

        <button className="enterButtons" onClick={like}>
          Like!
        </button></div>)
        function like(){
            setLikeNumber(likeNumber+1)
            router.refresh()
            return(<form action={likesUpdate}>
            <input type="hidden" name="recipeID" value={ids[id]}></input>
            <input type="hidden" name="recipeLikes" value={likeNumber}></input></form>)
            
        }
}