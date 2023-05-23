import Image from 'next/image';
import './globals.css'
import Link from 'next/link';
import local from './Secondpage/Capture.PNG'


export default function Home() {
  return (
   <div>
<h1    className='text-center text-xl mt-11' >Ahmed Raza Learning Next js 13</h1>


<h2 className='raza'   >Ahmed Raza Jafri </h2>
<button><a   target="_blank" href="https://www.facebook.com/">Click Here to Visit Facebook </a></button>




<br />
<br />
<br />
<div>
<Link href="/Secondpage ">Transfer on Next Page </Link>


</div>

<div>


{/* Outside Image  */}
<Image
    src="https://cache1.pakwheels.com/system/car_version_specification_pictures/426/original/Toyota_Hilux_Revo_GR-S_2023_.png?1679076556" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />

{/* Local Image    */}

<Image
    src={local} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
</div>





   </div>
  )
}
