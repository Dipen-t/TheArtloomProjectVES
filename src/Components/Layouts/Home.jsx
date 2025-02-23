import image from '../../../public/image.png'
import { motion, animate, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import CardsCollection from './CardsCollection';


const books = [
  {
    "name": "FRESH LEMON | NOTEBOOK",
    "sku": "TALWI017",
    "current_price": "₹1900.0",
    "original_price": "₹1900.0",
    "currency": "INR",
    "image_url": 
      "https://www.theartloom.in/wp-content/uploads/2023/11/5-700x900.png",
  
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/fresh-lemon-notebook/",
    "category": [
      "Notebook &amp; Journal",
      "Wiro Notebook"
    ],
    "is_variable": true
  },
  {
    "name": "ANIMAL KINGDOM | NOTEBOOK",
    "sku": "TALWI016",
    "current_price": "₹1900.0",
    "original_price": "₹1900.0",
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2023/11/1-700x900.png",
  
    ],
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/animal-kingdom-notebook/",
    "category": [
      "Notebook &amp; Journal",
      "Wiro Notebook"
    ],
    "is_variable": true
  },
  {
    "name": "WANDER | KRAFT NOTEBOOK",
    "sku": "TALKC015",
    "current_price": "₹1900.0",
    "original_price": "₹1900.0",
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2023/06/2-9-700x800.png"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/wander-kraft-notebook/",
    "category": [
      "Notebook &amp; Journal",
      "Kraft Cover Notebook"
    ],
    "is_variable": true
  },
  {
    "name": "UNDISCOVERED GENIUS | KRAFT NOTEBOOK",
    "sku": "TALKC014",
    "current_price": "₹19000.0",
    "original_price": "₹1900.0",
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2023/06/3-9-700x800.png"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/undiscovered-genius-kraft-notebook/",
    "category": [
      "Notebook &amp; Journal",
      "Kraft Cover Notebook"
    ],
    "is_variable": true
  }
]

const books2=[ {
  "name": "BUTTERFLIES | NOTEBOOK",
  "sku": "TALWI025",
  "current_price": "₹190.00",
  "original_price": "₹230.00",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/6-700x900.png"
  ],
  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/butterflies-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "PLAYFUL CATS | NOTEBOOK",
  "sku": "TALWI024",
  "current_price": "₹190.00",
  "original_price": "₹230.00",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/7-700x900.png",

  ],
  "availability": "In Stock",
  "product_url": "https://www.theartloom.in/product/playful-cats-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "HAVANA | NOTEBOOK",
  "sku": "TALWI023",
  "current_price": "₹190.0",
  "original_price": "₹230.00",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/2-700x900.png",

  ],
  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/havana-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "RETRO VIBES | NOTEBOOK",
  "sku": "TALWI022",
  "current_price": "₹190.00",
  "original_price": "₹230.00",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/3-700x900.png",

  ],
  "availability": "In Stock",
  "product_url": "https://www.theartloom.in/product/retro-vibes-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},]


const books3= [{
  "name": "TROPICAL ESCAPE | NOTEBOOK",
  "sku": "TALWI020",
  "current_price": "₹190.0",
  "original_price": "₹230.0",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/4-700x900.png",

  ],
  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/tropical-escape-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "OLD ROSE | NOTEBOOK",
  "sku": "TALWI019",
  "current_price": "₹190.0",
  "original_price": "₹230.0",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/9-700x900.png",

  ],
  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/old-rose-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "FLORAL MAZE | NOTEBOOK",
  "sku": "TALWI018",
  "current_price": "₹190.0",
  "original_price": "₹230.0",
  "currency": "INR",
  "image_url": [
    "https://www.theartloom.in/wp-content/uploads/2023/11/10-1-700x900.png",
    
  ],
  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/floral-maze-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
{
  "name": "FRESH LEMON | NOTEBOOK",
  "sku": "TALWI017",
  "current_price": "₹190.0",
  "original_price": "₹230.0",
  "currency": "INR",
  "image_url": 
    "https://www.theartloom.in/wp-content/uploads/2023/11/5-700x900.png",

  "availability": "Out of Stock",
  "product_url": "https://www.theartloom.in/product/fresh-lemon-notebook/",
  "category": [
    "Notebook &amp; Journal",
    "Wiro Notebook"
  ],
  "is_variable": true
},
]

const product = [
  {
    "name": "SAPPHIRE BLUE | PERSONALISED INSULATED BOTTLE",
    "original_price": "₹1,990.00",
    "current_price": "₹1,480.00",
    "image_url": "https://www.theartloom.in/wp-content/uploads/2024/02/1-3-700x901.png"
  },
  {
    "name": "SUN YELLOW | PERSONALISED INSULATED BOTTLE",
    "original_price": "₹1,990.00",
    "current_price": "₹1,480.00",
    "image_url": "https://www.theartloom.in/wp-content/uploads/2024/02/1-2-700x900.png"
  },
  {
    "name": "HOT PINK | PERSONALISED INSULATED BOTTLE",
    "original_price": "₹1,990.00",
    "current_price": "₹1,480.00",
    "image_url": "https://www.theartloom.in/wp-content/uploads/2024/02/1-1-700x900.png"
  },
  {
    "name": "CHERRY RED | PERSONALISED INSULATED BOTTLE",
    "original_price": "₹1,990.00",
    "current_price": "₹1,480.00",
    "image_url": "https://www.theartloom.in/wp-content/uploads/2023/06/1-700x900.png"
  },
]


const Books = [{
  "name": "Endless Possibilities | 2025 Calendar Planner",
  "link": "https://www.theartloom.in/product/endless-possibilities-2025-calendar-planner/",
  "original_price": "₹900.00",
  "current_price": "₹630.00",
  "image_url": "https://www.theartloom.in/wp-content/uploads/elementor/thumbs/1-qtkfhsrvr9pexaoq8z7ymo8jz707mgvij883qc03t8.jpg"
},
{
  "name": "Floral Escape | 2025 Desk Calendar",
  "link": "https://www.theartloom.in/product/floral-escape-2025-desk-calendar/",
  "original_price": "₹900.00",
  "current_price": "₹630.00",
  "image_url": "https://www.theartloom.in/wp-content/uploads/elementor/thumbs/1-1-qtkfqyp8e4924fdhqfu0fuzchfu1o89asl7j6gex58.jpg"
},
{
  "name": "Lush Forest | 2025 Annual Planner",
  "link": "https://www.theartloom.in/product/lush-forest-2025-annual-planner/",
  "original_price": "₹2,299.00",
  "current_price": "₹1,380.00",
  "image_url": "https://www.theartloom.in/wp-content/uploads/elementor/thumbs/lush-forest-qtip38mhc6c28pxukw268l1vw00glc6szsg5gazz9o.jpg"
},
{
  "name": "Nature's Delight | 2025 Desk Calendar",
  "link": "https://www.theartloom.in/product/natures-delight-2025-desk-calendar/",
  "original_price": "₹1,990.00",
  "current_price": "₹1,480.00",
  "image_url": "https://www.theartloom.in/wp-content/uploads/elementor/thumbs/1-qtkfhsrvr9pexaoq8z7ymo8jz707mgvij883qc03t8.jpg"
},]

function Home() {


  const images = [
    "/heroimg1.png",
    "/heroimg2.png",
    "/heroimg3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Move to next image every 3 seconds if user doesn't click
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next image


  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="cream-bg overflow-x-hidden h-full w-screen">
      <div className="relative w-full h-[40vh] overflow-hidden">
        {/* Image Slider */}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Artwork ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Centered Shop Now Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-black text-white px-6 py-3 text-lg font-semibold mt-14  shadow-lg hover:cursor-pointer transition">
            Shop Now
          </button>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>
      <div className='p-6'>
        <CardsCollection product={product} header="2025 PLANNER Collection" />
      </div>
      <section>
        <div className="flex relative w-screen h-[450px] mt-8 p-6  items-center">
          <img src="https://theartloom.in/wp-content/uploads/2020/05/discount-banner.jpg" className='w-full h-full object-contain' alt="" />
          <div className='absolute flex m-8 p-9 gap-6 flex-col  font-taviraj'>
            <h4 className='text-[#3C3C3C] mx-[50px] uppercase text-2xl '>
              stay connected and get UPTO
            </h4>
            <h1 className='text-[#3C3C3C] font-taviraj ml-[50px] capitalize text-6xl'>
              40% DISCOUNT
            </h1>
            <p className='text-zinc-500 mx-[50px] font-taviraj'>
              Sign up to know about our new product releases and special offers.
            </p>
            <div className='flex gap-1'>
              <input type="email" className='w-full h-10 mx-[50px] m-0 bg-[#fff] font-raleway text-zinc-500 font-cabinetbutto text-sm' placeholder=' Email' />
              <button className='bg-black w-[200px] px-7 font-raleway capitalize py-2 text-white flex justify-center items-center font-bold'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className='p-6'>
        <CardsCollection product={Books} header="Undated Planner" />
      </div>
      </section>
      <section>
      <div className='p-6'>
        <CardsCollection product={books} header="BestSellerS" />
      </div>
      </section>
      <section>
      <div className='p-6'>
        <CardsCollection product={books2  } header="Gratitude Journal" />
      </div>
      </section>
      <section>
      <div className='p-6'>
        <CardsCollection product={books3} header="NOTEBOOKS" />
      </div>
      </section>
    </div>
  )
}

export default Home