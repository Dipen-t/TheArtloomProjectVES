import React from 'react'
import PageTemplates from '../Layouts/PageTemplates'
const books =[
    {
      "name": "PEPPY PLANS | A5 PLANNER",
      "sku": "TALA5PL009",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2022/10/6-2-700x1050.png",
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/peppy-plans-a5-planner/",
      "category": [
        "Best Seller",
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "SUNSET | A5 PLANNER",
      "sku": "TALA5PL008",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2022/10/4-2-700x1050.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/sunset-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "PINK BERRY | A5 PLANNER",
      "sku": "TALA5PL007",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2022/10/1-2-700x1050.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/pink-berry-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "DAY IN MY LIFE | A5 PLANNER",
      "sku": "TALA5PL004",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2021/07/PLANNERS-01-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/day-in-my-life-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "WORK | A5 PLANNER",
      "sku": "TALA5PL003",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2021/07/PLANNERS-05-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/work-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "AWESOME PLANS | A5 PLANNER",
      "sku": "TALA5PL002",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2021/07/PLANNERS-06-700x900.jpg"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/awesome-plans-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    },
    {
      "name": "ABOUT TODAY | A5 PLANNER",
      "sku": "TALA5PL001",
      "current_price": "250.00",
      "original_price": "350.00",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2021/07/PLANNERS-02-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/about-today-a5-planner/",
      "category": [
        "Daily Tear-Off Planner",
        "Desk Pads"
      ],
      "is_variable": false
    }
  ]

const Desk = () => {
  return (
    <div>
    <PageTemplates page="Desk Pads" books={books}/>
    </div>
  )
}

export default Desk

