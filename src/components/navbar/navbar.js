import './navbar.css';
import Link from 'next/link';

export default function Navbar(){
    return(
        <div className='select-none'>
            <div className="h-fit bg-gradient-to-r from-neutral-950 from-40% via-blue-900 via-50% to-neutral-950 to-60% flex justify-center">
                <Link href='/'><p className="content-center text-white text-2xl font-bold m-4" style={{ textShadow: '0 0 5px blue' }}>Shinapri</p></Link>
            </div>
            <div className="w-full bg-neutral-950 pt-4 pb-4">
                <ul className="flex justify-between h-16 justify-center pt-1 pb-1 ml-10 mr-10">
                    <Link href='/' className="custom-list"><li>Home</li></Link>
                    <Link href='/blog' className="custom-list"><li>Blog</li></Link>
                    <Link href='/gallery' className="custom-list"><li>Gallery</li></Link>
                    <Link href='/project' className="custom-list"><li>Project</li></Link>
                    <Link href='/about' className="custom-list"><li>About</li></Link>
                    <Link href='/aboutme' className="custom-list"><li>About Me</li></Link>
                </ul>
            </div>
        </div>
    )
}