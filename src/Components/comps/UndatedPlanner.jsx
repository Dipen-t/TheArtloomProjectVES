import React from 'react'
import CardsCollection from '../Layouts/CardsCollection'
import PageTemplates from '../Layouts/PageTemplates'

const UndatedPlannerData = [
    {
      "name": "⁠⁠⁠⁠Lush Forest | Undated Daily Planner",
      "sku": "TALUDPL007",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/KPS_4309-700x900.jpg",
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
      "name": "⁠⁠⁠⁠Blooms Of Joy | Undated Daily Planner",
      "sku": "TALUDPL006",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_59191-700x900.jpg",
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
      "name": "⁠⁠⁠Fresh Start | Undated Daily Planner",
      "sku": "TALUDPL005",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/4-700x900.jpg",
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
      "name": "⁠⁠Endless Possibilities | Undated Daily Planner",
      "sku": "TALUDPL004",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/8-700x900.jpg",
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
      "name": "⁠Getting Things Done | Undated Daily Planner",
      "sku": "TALUDPL003",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5914-700x900.jpg",
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
      "name": "Make It Happen | Undated Daily Planner",
      "sku": "TALUDPL001",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5918-700x900.jpg",
    
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
      "name": "Victoria | Undated Daily Planner",
      "sku": "TALUDPL002",
      "current_price": "1,230.00",
      "original_price": "2,030.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/07/DSC_5924-700x900.jpg",
      ],

      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/victoria-undated-daily-planner/",
      "category": [
        "Undated Planner",
        "Undated Daily Planner"
      ],
      "is_variable": false
    }
  ]

function UndatedPlanner() {
  return (
   <>
    <div>
        <PageTemplates page="Undated Planner" books={UndatedPlannerData} />
    </div>
   </>
  )
}

export default UndatedPlanner