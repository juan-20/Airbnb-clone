export type ImagesProps = {
 url: string
 id?: number
} 

export  type PropertiesType ={
id: number
name: string,
price: number,
localization: string,
description: string,
host: string,
latitude?: number,
longitude?: number
rating?: number,
images: ImagesProps[],
}
  
export type Categories = {
title: string,
image: string,
properties?: PropertiesType[]
}
