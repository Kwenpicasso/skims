import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
    projectId: 'p41kkvlr',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true
    
  });

  const builder = imageUrlBuilder(client)

 export function urlFor(source) {
  return builder.image(source)
}
  
//   const builder = imageUrlBuilder(client);
  
//   export const urlFor = (source) => builder.image(source);