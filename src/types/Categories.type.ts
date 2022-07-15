export type ImagesProps = {
 url: string
} 

export  type PropertiesType ={
name: string,
price: number,
localization: string,
rating: number,
images: ImagesProps[],
description: string,
host: string,
id: number
}
  
export type Categories = {
title: string,
image: string,
properties?: PropertiesType[]
}