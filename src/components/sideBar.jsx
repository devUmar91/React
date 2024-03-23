import { FaHome } from 'react-icons/fa';
import { DiNodejsSmall } from "react-icons/di";
import { MdOutlinePermMedia } from "react-icons/md";

import SideBarOption from './sideBarOption';
import React from 'react'

function Sidebar(){
    return(
        <div className='bg-slate-700 lg:w-[270px] h-full fixed top-[50px] sm:w-[170px] '>
            <SideBarOption Icon={FaHome} Title="Home" />
            <SideBarOption Icon={DiNodejsSmall} Title="Viral" />
            <SideBarOption Icon={MdOutlinePermMedia} Title="Shorts" />


            
        </div>
    )

}
export default Sidebar
