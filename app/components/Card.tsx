import React from 'react'

interface CardProps{
    image:string;
    title:string;
    description:string;

}
const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
   <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card