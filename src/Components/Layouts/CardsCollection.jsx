import React from 'react'

function CardsCollection({product,header}) {
    return (
        <>
            <section className="line pb-[100px]">
                <header>
                    <h1 className='text-[#3C3C3C] font-taviraj p-7 uppercase text-center text-4xl '>
                        {header}
                    </h1>
                </header>
                <main className='w-full flex flex-col justify-center items-center'>
                    <div className='flex justify-center p-6 w-[80%] items-center'>
                        <div className='grid  w-full grid-cols-4 gap-4' >
                            {
                                product.map((item, index) => {
                                    return (
                                        <div key={index} className="border-bottom gap-2 font-taviraj w-full px-4 flex flex-col ease-in-out justify-center items-center hover:shadow-lg transition-all duration-300">
                                            <div className='flex object-cover '>
                                                <img src={item.image_url} className="w-full h-full object-fill" alt={item.name} />
                                            </div>
                                            <div className="mt-5 justify-between">
                                                <div className='flex  flex-row'>
                                                    <p className=' '>{item.name}</p>
                                                </div>
                                                <div className='flex w-1/2 gap-6 justify-between pricing p-2 items-center'>
                                                    <p className="text-zinc-500 opacity-35 font-cabinet text-2xl   cursor-pointer line-through">{item.original_price}</p>
                                                    <h2 className="text-[#000] font-bold font-cabinet cursor-pointer  text-2xl">{item.current_price}</h2>
                                                </div>
                                            </div>
                                            <p className='font-raleway text-zinc-500 cursor-pointer mt-2 p-2'>View Product</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </ div>
                </main>
            </section>
        </>
    )
}

export default CardsCollection