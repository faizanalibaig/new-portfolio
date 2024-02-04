import React from 'react'

function Main() {
  return (
    <main className='mt-[124px] px-10'>
    <div className='md:h-[450px] xl:h-[550px] md:px-5 xl:px-20 py-10 flex flex-col gap-4 md:flex-row'>
      <div className='w-full md:w-2/6 lg:h-2/5 xl:2/5 py-4'>
        <h1 className='text-7xl md:text-[55px] lg:text-7xl xl:text-8xl font-bold flex flex-col'>
        <span>{`hey, I'm`}</span>
        <span>faizan</span>
        </h1>
      </div>
  
      <div className='w-full md:w-[65%] lg:w-3/5 xl:3/5 md:flex justify-between'>
        <div className='w-[25%] border-b-2 border-black/30 hidden sm:hidden md:block md:h-72 xl:h-80' />
  
        <div className='w-full md:w-[70%] flex md:items-end'>
          <p className='text-base sm:text-lg md:text-xs lg:text-sm xl:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita culpa veniam fugit dolores laboriosam repudiandae sed adipisci ipsum quaerat consectetur eligendi inventore suscipit nostrum pariatur libero, officia sit non architecto molestias ea voluptatum tenetur? Facilis deserunt vero pariatur quas, quisquam minima totam eos tempore blanditiis, asperiores dolores dolor ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum atque vitae doloremque? Cumque adipisci qui ratione ex consequatur voluptate aspernatur omnis facilis placeat labore voluptatem, aliquid temporibus nostrum ducimus! Doloremque fugit doloribus inventore, ullam quod necessitatibus asperiores deleniti. Corporis?
          </p>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Main

