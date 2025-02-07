import { groq } from "next-sanity";


export const allProducts = groq`*[_type == "product"]`;
export  const four = groq`*[_type == "product"][0..3]`;
export const four2 = groq`*[_type == "product"][4..7]`;
