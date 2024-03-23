
 function SideBarOption({Icon,Title}){

    return(

        <div>
             <div className='flex justify-around items-center bg-gray-600 w-[80%] ml-5 mt-10 rounded text-white cursor-pointer hover:bg-gray-500 hover:scale-[1.1] transition p-3 '>
                <Icon size={30} color="white" className='mt-[10px]'/> 
                 <h1 className='text-[25px] font-bold'>{Title}</h1>
            </div>
        </div>
    )
 }
 export default SideBarOption