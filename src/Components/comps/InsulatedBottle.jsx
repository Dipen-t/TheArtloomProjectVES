import PageTemplates from '../Layouts/PageTemplates'
import { useEffect, useState } from 'react'

const data = [{
  "_id": "67bb63f4bf49a767accf0e7d",
  "name": "SAPPHIRE BLUE | PERSONALISED INSULATED BOTTLE",
  "sku": "TALINSBOT015",
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
  "current_price": "1,480.00",
  "original_price": "1,990.00",
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
},]


const InsulatedBottle = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <PageTemplates page="Insulated Bottle" books={data} />
    </div>
  )
}

export default InsulatedBottle
