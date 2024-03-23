
function Cards({title,name,views,time,children}){
    return(
        <div className="">
            <div className="w-[250px] bg-slate-200 ml-10  cursor-pointer hover:scale-[1.02] transition-[0.3sec] z-[-2]">
                <img src="https://images.unsplash.com/photo-1567965850174-8f5f68f5a1bd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="flex mt-5 gap-5 p-1">
                <img src="photo.jpg" alt=""  className="w-[60px] h-[60px] rounded-[50%] object-cover"/>
                <div className="">
                    <h2 className="font-bold">{title}</h2>
                    <h3>{name}</h3>
                    <span className="mr-4">{views}</span><span>{time}</span>
                    <button className="mr-4 text-shadow-2">{children}</button>
                    
                </div>
              </div>
            </div>
        </div>
    )
}
export default Cards