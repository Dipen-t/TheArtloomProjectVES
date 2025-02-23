import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import SizeButton from './SizeButton'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { FiArrowRight, FiDroplet, FiFeather, FiShoppingCart, FiTruck } from 'react-icons/fi'


const books=[
    {
      "_id": "67bb51333151e57d5a19f57e",
      "name": "BUTTERFLIES | NOTEBOOK",
      "sku": "TALWI025",
      "current_price": 190,
      "original_price": 230,
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
      "_id": "67bb51333151e57d5a19f57f",
      "name": "PLAYFUL CATS | NOTEBOOK",
      "sku": "TALWI024",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/7-700x900.png"
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
      "_id": "67bb51333151e57d5a19f580",
      "name": "HAVANA | NOTEBOOK",
      "sku": "TALWI023",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/2-700x900.png"
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
      "_id": "67bb51333151e57d5a19f581",
      "name": "RETRO VIBES | NOTEBOOK",
      "sku": "TALWI022",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/3-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/retro-vibes-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f582",
      "name": "WATERMELON | NOTEBOOK",
      "sku": "TALWI021",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/8-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/watermelon-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f583",
      "name": "TROPICAL ESCAPE | NOTEBOOK",
      "sku": "TALWI020",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/4-700x900.png"
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
      "_id": "67bb51333151e57d5a19f584",
      "name": "OLD ROSE | NOTEBOOK",
      "sku": "TALWI019",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/9-700x900.png"
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
      "_id": "67bb51333151e57d5a19f585",
      "name": "FLORAL MAZE | NOTEBOOK",
      "sku": "TALWI018",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/10-1-700x900.png"
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
      "_id": "67bb51333151e57d5a19f586",
      "name": "FRESH LEMON | NOTEBOOK",
      "sku": "TALWI017",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/5-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/fresh-lemon-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f587",
      "name": "ANIMAL KINGDOM | NOTEBOOK",
      "sku": "TALWI016",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/1-700x900.png"
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
      "_id": "67bb51333151e57d5a19f588",
      "name": "WANDER | KRAFT NOTEBOOK",
      "sku": "TALKC015",
      "current_price": 190,
      "original_price": 230,
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
      "_id": "67bb51333151e57d5a19f589",
      "name": "UNDISCOVERED GENIUS | KRAFT NOTEBOOK",
      "sku": "TALKC014",
      "current_price": 190,
      "original_price": 230,
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
    },
    {
      "_id": "67bb51333151e57d5a19f58a",
      "name": "BUTTERFLIES | NOTEBOOK",
      "sku": "TALWI025",
      "current_price": 190,
      "original_price": 230,
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
      "_id": "67bb51333151e57d5a19f58b",
      "name": "PLAYFUL CATS | NOTEBOOK",
      "sku": "TALWI024",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/7-700x900.png"
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
      "_id": "67bb51333151e57d5a19f58c",
      "name": "HAVANA | NOTEBOOK",
      "sku": "TALWI023",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/2-700x900.png"
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
      "_id": "67bb51333151e57d5a19f58d",
      "name": "RETRO VIBES | NOTEBOOK",
      "sku": "TALWI022",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/3-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/retro-vibes-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f58e",
      "name": "WATERMELON | NOTEBOOK",
      "sku": "TALWI021",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/8-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/watermelon-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f58f",
      "name": "TROPICAL ESCAPE | NOTEBOOK",
      "sku": "TALWI020",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/4-700x900.png"
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
      "_id": "67bb51333151e57d5a19f590",
      "name": "OLD ROSE | NOTEBOOK",
      "sku": "TALWI019",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/9-700x900.png"
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
      "_id": "67bb51333151e57d5a19f591",
      "name": "FLORAL MAZE | NOTEBOOK",
      "sku": "TALWI018",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/10-1-700x900.png"
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
      "_id": "67bb51333151e57d5a19f592",
      "name": "FRESH LEMON | NOTEBOOK",
      "sku": "TALWI017",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/5-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/fresh-lemon-notebook/",
      "category": [
        "Notebook &amp; Journal",
        "Wiro Notebook"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb51333151e57d5a19f593",
      "name": "ANIMAL KINGDOM | NOTEBOOK",
      "sku": "TALWI016",
      "current_price": 190,
      "original_price": 230,
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/11/1-700x900.png"
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
      "_id": "67bb51333151e57d5a19f594",
      "name": "WANDER | KRAFT NOTEBOOK",
      "sku": "TALKC015",
      "current_price": 190,
      "original_price": 230,
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
      "_id": "67bb51333151e57d5a19f595",
      "name": "UNDISCOVERED GENIUS | KRAFT NOTEBOOK",
      "sku": "TALKC014",
      "current_price": 190,
      "original_price": 230,
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
    },
    {
      "_id": "67bb63f4bf49a767accf0e7d",
      "name": "SAPPHIRE BLUE | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT015",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/02/1-3-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/sapphire-blue-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e7e",
      "name": "PEBBLE GREY | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT014",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/02/1-2-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/pebble-grey-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e7f",
      "name": "SUNFLOWER YELLOW | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT013",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/02/1-1-700x900.jpg"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/sunflower-yellow-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e80",
      "name": "SKY BLUE | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT012",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/02/1-1-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/sky-blue-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e81",
      "name": "HOT PINK | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT011",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2024/02/1-700x900.jpg"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/hot-pink-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e82",
      "name": "BLUSH PINK | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT010",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/blush-pink-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e83",
      "name": "CHERRY RED | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT009",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-1-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/cherry-red-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e84",
      "name": "DUSTY PINK | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT008",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-12-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/dusty-pink-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e85",
      "name": "LAVENDER | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT007",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-13-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/lavender-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e86",
      "name": "OCEAN BLUE | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT006",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-14-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/ocean-blue-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e87",
      "name": "PEARL WHITE | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT005",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-5-700x900.png"
      ],
      "availability": "Out of Stock",
      "product_url": "https://www.theartloom.in/product/pearl-white-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb63f4bf49a767accf0e88",
      "name": "OLIVE GREEN | PERSONALISED INSULATED BOTTLE",
      "sku": "TALINSBOT004",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/06/1-16-700x901.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/olive-green-personalised-insulated-bottle/",
      "category": [
        "Insulated Bottle"
      ],
      "is_variable": true
    },
    {
      "_id": "67bb6423bf49a767accf0e89",
      "name": "VINTAGE GARDEN | GRATITUDE JOURNAL",
      "sku": "TALGJ004",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/04/1-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/vintage-garden-gratitude-journal/",
      "category": [
        "Gratitude Journal"
      ],
      "is_variable": false
    },
    {
      "_id": "67bb6423bf49a767accf0e8a",
      "name": "HAPPY THOUGHTS | GRATITUDE JOURNAL",
      "sku": "TALGJ003",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/04/3-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/happy-thoughts-gratitude-journal/",
      "category": [
        "Best Seller",
        "Gratitude Journal"
      ],
      "is_variable": false
    },
    {
      "_id": "67bb6423bf49a767accf0e8b",
      "name": "BLOSSOM SPRING | GRATITUDE JOURNAL",
      "sku": "TALGJ002",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/04/2-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/blossom-spring-gratitude-journal/",
      "category": [
        "Best Seller",
        "Gratitude Journal"
      ],
      "is_variable": false
    },
    {
      "_id": "67bb6423bf49a767accf0e8c",
      "name": "HAPPY IN PINK | GRATITUDE JOURNAL",
      "sku": "TALGJ001",
      "currency": "INR",
      "image_url": [
        "https://www.theartloom.in/wp-content/uploads/2023/04/4-700x900.png"
      ],
      "availability": "In Stock",
      "product_url": "https://www.theartloom.in/product/happy-in-pink-gratitude-journal/",
      "category": [
        "Gratitude Journal"
      ],
      "is_variable": false
    },
    {
      "_id": "67bb6489bf49a767accf0e8d",
      "name": "⁠⁠⁠⁠Lush Forest | Undated Daily Planner",
      "sku": "TALUDPL007",
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
    {
      "_id": "67bb64adbf49a767accf0e9a",
      "name": "PRODUCTIVITY STICKERS | PACK OF 2",
      "sku": "TALSTKR001",
      "current_price": 150,
      "original_price": 230,
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

const ProductDetail = () => {

 
    const { _id } = useParams();
    const data = books.find(w => w._id.toString() === _id);
    const [isImageHovered, setIsImageHovered] = useState(false);

    // Corrected add to cart function
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]'); // Fix initialization
        const existingItem = cart.find(item => item._id === data._id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ 
                ...data, 
                quantity: 1,
                // Ensure required price fields exist
                current_price: data.current_price || 0,
                original_price: data.original_price || 0
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success('Added to cart');
    };

    const handleBuyNow = () => {
        toast.success('Purchased');
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Product Image Section */}
                <div className="lg:w-1/2 relative group">
                    <div className={`sticky top-24 transition-transform duration-300 ${isImageHovered ? 'scale-105' : 'scale-100'}`}>
                        <img 
                            src={data.image_url[0]} // Access first element of array
                            alt={data.category} 
                            className="w-full h-[600px] object-contain rounded-xl shadow-xl border-8 border-white"
                            onMouseEnter={() => setIsImageHovered(true)}
                            onMouseLeave={() => setIsImageHovered(false)}
                        />
                    </div>
                </div>
                <div className='lg:w-1/2 space-y-8'>
                    {/* Header Section */}
                    <div className="pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-serif font-light tracking-wide">{data.name}</h1>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="flex text-amber-500 text-lg">
                                ★★★★
                            </div>
                            <span className="text-sm text-gray-600">1 review</span>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="space-y-3 pt-6">
                        <div className="flex items-baseline gap-4">
                            <span className="text-3xl font-bold">₹{data.current_price}</span>
                            <span className="text-xl text-gray-500 line-through">₹{data.original_price}</span>
                            <span className="text-sm text-emerald-600 ml-2">17% OFF</span>
                        </div>
                        <p className="text-sm text-gray-600">Incl. of all taxes</p>
                    </div>
                    {/* Action Buttons */}
                    <div className="space-y-4 pt-4">
                        <button 
                            className="w-full py-4 border-2 border-black rounded-full hover:bg-black hover:text-white 
                            transition-all duration-300 flex items-center justify-center gap-2 group"
                            onClick={handleAddToCart}
                        >
                            <span>ADD TO CART</span>
                            <FiShoppingCart className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-900 
                            transition-all duration-300 flex items-center justify-center gap-2 group"
                            onClick={handleBuyNow}
                        >
                            <span>BUY NOW</span>
                            <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="pt-6">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                            <FiTruck className="w-5 h-5" />
                            <span><span className="underline">Shipping</span> calculated at checkout</span>
                        </p>
                    </div>

                    {/* Product Details */}
                    <div className="pt-8 space-y-6">
                        <h3 className="text-2xl font-serif font-light">Crafted for Timeless Elegance</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {data.details || "Experience premium quality with our artisan-crafted notebook. Featuring..."}
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <FiFeather className="w-6 h-6 text-gray-500" />
                                <span className="text-sm">Handmade Paper</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiDroplet className="w-6 h-6 text-gray-500" />
                                <span className="text-sm">Waterproof Cover</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default ProductDetail