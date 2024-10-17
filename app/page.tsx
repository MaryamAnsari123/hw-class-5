import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex w-full bg-blue-600 h-44">
        <div className="w-auto p-8">
      <Image 
      src="/img/logo.webp" 
      alt="logo"
      width={300}
      height={200}
      
     />
     </div>
     <div className="flex justify-center items-end w-96">
      <h1 className="text-9xl text-white font-bold">GIAIC</h1>
     </div>
     
     <div className="flex w-4/5 justify-center items-end">
     <div className="bg-yellow-200 h-10 w-44 text-center font-bold p-2 border-2 border-blue-700">Home</div>
     <div className="bg-yellow-200 h-10 w-44 text-center font-bold p-2 border-2 border-blue-700">About</div>
     <div className="bg-yellow-200 h-10 w-44 text-center font-bold p-2 border-2 border-blue-700">Services</div>
     <div className="bg-yellow-200 h-10 w-44 text-center font-bold p-2 border-2 border-blue-700">Contact us</div>
</div>
      </nav>
<div className="flex justify-around mt-5">
      <div>
        <h1 className="mt-36 text-4xl text-black font-bold ml-12">Governor Sindh</h1>
        <h1 className="text-5xl text-green-800 font-bold ml-12">Kamran Khan Tessori</h1>
        <h1 className="text-2xl mt-2 text-cyan-400 font-bold ml-12">
              Certified Cloud <br />
              Applied Generative AI <br />
              Engineer (GenEng)</h1>
</div>
            <div className="w-96 h-96 justify-end bg-[url('/img/image.png')] bg-cover bg-center"></div>
            </div>



            <div>
        <h1 className="mt-12 text-center text-4xl font-bold text-blue-500">Certified Cloud Applied Generative AI Engineer (GenEng) <br />
          and Solopreneur Developing Billion-Dollar <br /> Valued Developers and Solopreneurs</h1>
      </div>

      <div>
        <p className="mt-5 ml-32 mr-32 text-xl font-sans text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model 
          and work independently and will not need to hire employees or other team members.</p>
      </div>

{/* 3 images */}

<div className="flex w-full justify-center items-center p-8 gap-4">
  <div className="w-full h-96 bg-[url('/img/i1.jpg')] bg-cover bg-center hover:shadow-2xl"></div>
  <div className="w-full h-96 bg-[url('/img/i2.jpg')] bg-cover bg-center hover:shadow-2xl"></div>
  <div className="w-full h-96 bg-[url('/img/i3.jpg')] bg-cover bg-center hover:shadow-2xl"></div>
</div>

 {/* 2 image */}

      <div className="flex w-full justify-around items-center p-8 mt-8 gap-4">
  <div className="w-full h-96 bg-[url('/img/i6.jpg')] bg-cover bg-center hover:shadow-2xl"></div>
  <div className="w-full h-96 bg-[url('/img/i5.jpg')] bg-cover bg-center hover:shadow-2xl"></div>
</div>

<div className="bg-blue-700 text-center p-8">
  <p className=" text-white text-center text-base mt-2">Homework Done!<br /> Given by <br /> <b>Sir Ali Jawad</b></p>
  <p className="text-base text-white mt-2">Slot: Tuesday 7 to 10</p>
</div>
<p className="text-black text-center text-sm bg-yellow-300">Made by <b>Maryam Ansari</b></p>
    </div>

  
  )
}