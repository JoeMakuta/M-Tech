const LandingPhoto = () => {
   return (
      <div className="flex justify-start items-center overflow-hidden  bg-amber-600 h-[20vh] w-[100vw] sm:h-[100vh] sm:w-[50vw] rounded-b-[50px] sm:rounded-r-[50px] sm:rounded-l-[0px]  bg-cover bg-center" >
         {/* <p className=" text-white " >Hello World</p> */}
         <img src="/src/assets/img/bg_m_tech.webp" alt="" className=" w-full h-full object-cover " />
      </div>
   )
}

export default LandingPhoto