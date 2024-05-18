import { useEffect, useState } from "react";
import { dataInfoFood } from "../data/data"

interface Food {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface InfoFoodsProps {
  selectedId: number;
}

export const InfoFoods = ({ selectedId}: InfoFoodsProps) => {
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    const data = dataInfoFood.find((item) => item.id === selectedId);
    setFoods(data?.food || [])
  },[selectedId])

  function handleDeletFoosd(id:number) {
    const newFood = foods.filter(food => {
      return food.id !== id
    })
    setFoods(newFood)
  }
  return(
    <div className="w-full border p-4 min-h-[15rem] flex gap-4  mt-2">
      {foods?.map((food) => {
          return(
            <div
            onClick={() => handleDeletFoosd(food.id)}
            className="border w-52 flex-grow"
          >
            <img src={food.image} loading="lazy" alt={food.title} className="w-full h-44 object-cover" />
            <div className="flex flex-col items-center p-3">
              <strong className="text-base ">{food.title}</strong>
              <span className="text-sm">{food.description}</span>
            </div>
          </div>
          )
})
      }
    </div>
  )
}