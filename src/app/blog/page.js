import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "postcss/lib/input"
import './blog.css';
import Image from "next/image";


export default function Page() {
    const blogPost = Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="blog-post w-full h-[500px] mb-2 p-2 flex">
            <div className="w-4/6 h-full text-center content-center text-pretty">
                <Image
                    src='/slideimg/img1.jpg'
                    width={1500}
                    height={1500}
                    className="block h-full w-full object-cover rounded-md"
                />
            </div>
            <div className="w-2/6 h-full text-white p-2">
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
        <div className="w-full h-[100vh] bg-neutral-950 p-[20px] flex justify-center">
            <div className="w-[60%] h-full">
                <div className="w-full h-[10%] flex justify-center content-center gap-4 text-white bg-gradient-to-r from-blue-950 to-blue-800 rounded-t-xl p-2">
                    {/* เพิ่มโพสต์ ฟิลเตอร์ ค้นหา ปุ่มค้นหา */}
                    <div className="w-1/4 h-full flex justify-center">
                        <div className="content-center text-center bg-gradient-to-r from-blue-900 to-blue-600 w-2/4 rounded-md" style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faPlus} />
                            <p>Add</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center content-center gap-4">
                        <div className="w-2/12 h-full flex justify-center">
                            <div className="content-center text-center bg-gradient-to-r from-blue-900 to-blue-600 w-full h-full rounded-md" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon="fa-solid fa-filter" />
                                <p>Filter</p>
                            </div>
                        </div>

                        <div className="w-8/12 h-full">
                            <div className="flex justify-center w-full h-full" style={{ cursor: 'pointer' }}>
                                <div className="content-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-l-full w-1/6 text-center">
                                    <p>Search</p>
                                </div>
                                <div className="content-center ">
                                    <input className="h-full bg-gradient-to-r from-blue-800 to-blue-700"></input>
                                </div>
                                <div className="content-center bg-gradient-to-r from-blue-700 to-blue-600 rounded-r-full w-1/6 text-center">
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                </div>
                            </div>
                        </div>
                        <div className="w-2/12 h-full">
                            <div className="w-[50px] h-[50px] bg-white rounded-full" style={{ cursor: 'pointer' }}>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full h-[90%] bg-gradient-to-r from-blue-950 to-blue-800 rounded-b-xl p-1">
                    <div className="bg-gradient-to-b from-blue-950 to-neutral-950 w-full h-full rounded-md flex justify-center p-4">
                        <div className="container w-full h-full overflow-y-auto">

                            {blogPost}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}