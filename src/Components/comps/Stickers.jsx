import React from 'react'
import CardsCollection from '../Layouts/CardsCollection'
import PageTemplates from '../Layouts/PageTemplates'


const data = [
    {
      "name": "STICKY NOTES",
      "sku": "TALSTNO001",
      "current_price": "480.00",
      "original_price": "680.00",
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
      "name": "SUNSET WAVES | ULTIMATE STICKER BOOK",
      "sku": "TALSTKR006",
      "current_price": "480.00",
      "original_price": "680.00",
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
      "name": "COLOR BLOCK | ULTIMATE STICKER BOOK",
      "sku": "TALSTKR005",
      "current_price": "480.00",
      "original_price": "680.00",
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
      "name": "LILAC SKIES | ULTIMATE STICKER BOOK",
      "sku": "TALSTKR004",
      "current_price": "480.00",
      "original_price": "680.00",
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
      "name": "HAPPY STICKERS | PACK OF 4",
      "sku": "TALSTKR003",
      "current_price": "280.00",
      "original_price": "350.00",
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
      "name": "PLANNING ESSENTIAL STICKERS | PACK OF 4",
      "sku": "TALSTKR002",
      "current_price": "280.00",
      "original_price": "350.00",
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
    {
      "name": "PRODUCTIVITY STICKERS | PACK OF 2",
      "sku": "TALSTKR001",
      "current_price": "150.00",
      "original_price": "230.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2022/07/1-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/productivity-stickers-pack-of-2/",
      "category": [
        "Stickers"
      ],
      "is_variable": false
    }
  ]

const Stickers = () => {
  return (
    <div>
        <PageTemplates page="Stickers" books={data} />
    </div>
  )
}

export default Stickers
