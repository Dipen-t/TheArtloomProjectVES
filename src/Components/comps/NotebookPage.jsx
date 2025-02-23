import { useEffect, useState } from 'react'
import PageTemplates from '../Layouts/PageTemplates'



const NotebookPage = () => {
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
      <PageTemplates books={books} page={"Notebook & Journal"}/>
    </div>
  )
}

export default NotebookPage
