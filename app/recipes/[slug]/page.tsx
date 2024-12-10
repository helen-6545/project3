//'use server'
import React from 'react';
import { PrismaClient } from '@prisma/client'
import {useState } from 'react'
import {useRouter} from "next/navigation";
import Likes from './likePage'
const prisma = new PrismaClient()



export default async function Page( {params}: { params: { slug: number } } ) {
    const recipeList = await prisma.recipes.findMany()
let id = params.slug
return(<div>
    <Likes recipeList={recipeList} id={id}></Likes>
       </div>)

}