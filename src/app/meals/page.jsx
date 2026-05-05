"use client"
import React, { useEffect, useState } from "react"

export default function searchMeals() {
    const [meals, setmeals] = useState([]);
    const [search, setSearch] = useState([]);
    const fetchMeals = async () =>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setmeals(data?.meals || [])
            return data.meals;

        } catch(error){
            console.log(error);
            
        }
    };
    useEffect(()=>{
        fetchMeals();
    },[search])
  return (
    <div className="m-12">
       <div className="w-full flex justify-center my-6">
         <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} className="bg-white  text-black" />
       </div>
     <div className="grid grid-cols-5 gap-8 ">
         {
        meals.map((meal)=>(
            <div key={meal.idMeal} className="p-4 border border-gray-300 rounded-lg">
                 <p>
                    {meal.idMeal}
                 </p>
                 <p>{meal.strMeal}</p>
                 <img src={meal.strMealThumb} alt="" />
            </div>
        ))
      }
     </div>
    </div>
  )
}
