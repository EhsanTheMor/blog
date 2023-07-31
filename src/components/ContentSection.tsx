import '../style/ContentSection.css'
import {
     // useEffect, 
     useMemo,
     useState
} from 'react'
import PaginationBar from './PaginationBar'
import { data } from '../data/data'

import RenderBlogPostPreRepresentation from './RenderBlogPostPreRepresentation'

export default function ContentSection() {
     const NUMBER_OF_POSTS_IN_PAGE = 5;

     const [articles, setArticles] = useState<typeof data.articles>([])
     const [pages, setPages] = useState<number[]>([])
     const [activePage, setActivePage] = useState<number>(1)

     useMemo(() => {
          const numberOfPagesZeroBase = [...Array(Math.floor(data.articles.length / NUMBER_OF_POSTS_IN_PAGE) + 1).keys()];
          const numberOfPagesOneBase = numberOfPagesZeroBase.map(number => number + 1)
          setPages(() => numberOfPagesOneBase)
          setArticles(() => data.articles)
          return numberOfPagesOneBase
     }, [data.articles])


     //This useEffect is for time that we has a server     
     // useEffect(() => {
     //      const getData = async () => {
     //           try {
     //                const res = await fetch("/articles")
     //                const data = await res.json()

     //                setArticles(data)

     //                //Catches the whole number of articles from the fetch and found out how 
     //                //many pages should we have and returns the pages as array.
     //                const numberOfPagesZeroBase = [...Array(Math.floor(data.length / NUMBER_OF_POSTS_IN_PAGE) + 1).keys()];
     //                const numberOfPagesOneBase = numberOfPagesZeroBase.map(number => number + 1)

     //                setPages(() => numberOfPagesOneBase)
     //           } catch (err) {
     //                console.log(err)
     //           }

     //      }
     //      getData()

     // }, [])

     return (
          <div style={{ marginBottom: '50px' }} className='container'>

               <section className='section'>

                    {
                         // This code renders the number of articles match with the constat
                         // In each page.
                         // first slices the all articles to selected part and then renders it.
                         articles.length > 0 && articles
                              .slice(
                                   (activePage - 1) * NUMBER_OF_POSTS_IN_PAGE,
                                   activePage * NUMBER_OF_POSTS_IN_PAGE
                              )
                              .map((item: any) => (
                                   <RenderBlogPostPreRepresentation key={item.id} article={item} />
                              ))
                    }

               </section>
               <PaginationBar pages={pages} activePage={activePage} setActivePage={setActivePage} />
          </div >
     )
}
