import Image from "next/image";
import './project.css';




export default function Page() {
    const projectBlock = Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="blog-post w-full h-[300px] mb-2 p-2 flex">
            <div className="w-2/6 h-full text-center content-center text-pretty">
                <Image
                    src='/slideimg/img1.jpg'
                    width={1000}
                    height={1000}
                    className="block h-full w-full object-cover rounded-md"
                />
            </div>
            <div className="w-4/6 h-full text-white p-2">
                <div className="topic">
                    <h1>Topic????????????</h1>
                </div>
                <div>
                    <p className="description">Physics is the natural science of matter, involving the study of matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.[1] Physics is one of the most fundamental scientific disciplines.[2][3][4] A scientist who specializes in the field of physics is called a physicist.

                        Physics is one of the oldest academic disciplines and, through its inclusion of astronomy, perhaps the oldest.[5] Over much of the past two millennia, physics, chemistry, biology, and certain branches of mathematics were a part of natural philosophy, but during the Scientific Revolution in the 17th century these natural sciences emerged as unique research endeavors in their own right.[a] Physics intersects with many interdisciplinary areas of research, such as biophysics and quantum chemistry, and the boundaries of physics are not rigidly defined. New ideas in physics often explain the fundamental mechanisms studied by other sciences[2] and suggest new avenues of research in these and other academic disciplines such as mathematics and philosophy.</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="w-full h-fit bg-neutral-950 flex justify-center">
            <div className="w-[60%] h-full">
                {projectBlock}
            </div>

        </div>
    )
}