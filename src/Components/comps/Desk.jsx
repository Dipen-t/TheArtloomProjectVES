import React from 'react'
import PageTemplates from '../Layouts/PageTemplates'
const books =[
  {
    "_id": "67bb6489bf49a767accf0e8d",
    "name": "⁠⁠⁠⁠Lush Forest | Undated Daily Planner",
    "sku": "TALUDPL007",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/KPS_4309-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/lush-forest-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e8e",
    "name": "⁠⁠⁠⁠Blooms Of Joy | Undated Daily Planner",
    "sku": "TALUDPL006",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_59191-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/blooms-of-joy-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e8f",
    "name": "⁠⁠⁠Fresh Start | Undated Daily Planner",
    "sku": "TALUDPL005",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/4-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/%e2%81%a0%e2%81%a0%e2%81%a0fresh-start-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e90",
    "name": "⁠⁠Endless Possibilities | Undated Daily Planner",
    "sku": "TALUDPL004",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/8-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/endless-possibilities-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e91",
    "name": "⁠Getting Things Done | Undated Daily Planner",
    "sku": "TALUDPL003",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5914-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/%e2%81%a0getting-things-done-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e92",
    "name": "Make It Happen | Undated Daily Planner",
    "sku": "TALUDPL001",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5918-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/make-it-happen-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb6489bf49a767accf0e93",
    "name": "Victoria | Undated Daily Planner",
    "sku": "TALUDPL002",
    "current_price": 250,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5924-700x900.jpg"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/victoria-undated-daily-planner/",
    "category": [
      "Undated Planner",
      "Undated Daily Planner"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e94",
    "name": "STICKY NOTES",
    "sku": "TALSTNO001",
    "current_price": 480,
    "original_price": 680,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2023/09/1-5-700x900.png"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/sticky-notes/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e95",
    "name": "SUNSET WAVES | ULTIMATE STICKER BOOK",
    "sku": "TALSTKR006",
    "current_price": 480,
    "original_price": 680,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2022/09/3-2-700x900.png"
    ],
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/sunset-waves-ultimate-sticker-book/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e96",
    "name": "COLOR BLOCK | ULTIMATE STICKER BOOK",
    "sku": "TALSTKR005",
    "current_price": 480,
    "original_price": 680,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2022/09/2-3-700x900.png"
    ],
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/color-block-ultimate-sticker-book/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e97",
    "name": "LILAC SKIES | ULTIMATE STICKER BOOK",
    "sku": "TALSTKR004",
    "current_price": 480,
    "original_price": 680,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2022/09/1-4-700x900.png"
    ],
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/lilac-skies-ultimate-sticker-book/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e98",
    "name": "HAPPY STICKERS | PACK OF 4",
    "sku": "TALSTKR003",
    "current_price": 280,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2022/07/1-2-700x900.png"
    ],
    "availability": "In Stock",
    "product_url": "https://www.theartloom.in/product/happy-stickers-pack-of-4/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  {
    "_id": "67bb64adbf49a767accf0e99",
    "name": "PLANNING ESSENTIAL STICKERS | PACK OF 4",
    "sku": "TALSTKR002",
    "current_price": 280,
    "original_price": 350,
    "currency": "INR",
    "image_url": [
      "https://www.theartloom.in/wp-content/uploads/2022/07/1-1-700x900.png"
    ],
    "availability": "Out of Stock",
    "product_url": "https://www.theartloom.in/product/planning-essential-stickers-pack-of-4/",
    "category": [
      "Stickers"
    ],
    "is_variable": false
  },
  ]

const Desk = () => {
  return (
    <div>
    <PageTemplates page="Desk Pads" books={books}/>
    </div>
  )
}

export default Desk

