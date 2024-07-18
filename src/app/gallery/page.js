'use client'

import { Gallery } from "react-grid-gallery";
import './gallery.css';

const images = [
   {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
         { value: "Ocean", title: "Ocean" },
         { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
   },
];

const duplicatedImages = [];

for (let i = 0; i < 10; i++) {
    images.forEach(image => {
        duplicatedImages.push({ ...image });
    });
}

export default function Page(){
    return(
        <div className="w-full h-fit bg-neutral-950 flex justify-center">
            
            <div className="w-[80%] h-full">
                <div className="flex justify-center">
                    <div className="flex text-white w-fit gap-4 h-auto" style={{cursor: 'pointer'}}>
                        <div><p className="tool-btn">Add</p></div>
                        <div><p className="tool-btn">Remove</p></div>
                    </div>
                </div>
                <Gallery images={duplicatedImages} />
            </div>
        </div>
    )
}