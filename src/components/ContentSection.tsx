import '../style/ContentSection.css'
import Image from './Image'
import { BiImage } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import PaginationBar from './PaginationBar'

import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest, BsTelegram } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'
import ReadMoreLinkWithArrow from './ReadMoreLinkWithArrow'

const Title = ({ title }: { title: string }): JSX.Element => {
     return (
          <h3 className='article-header'>
               <a href="#">
                    {title}
               </a>
          </h3>
     )
}

const Avatar = ({ source }: { source: string }) => {
     return (
          <div className="avatar">
               <Image
                    source={source}
                    alt='E'
                    sx={{
                         width: '100%',
                         height: '100%',
                         borderRadius: '100%',
                         overflow: 'hidden'
                    }}
               />
          </div>
     )
}

const AuthorDescription = () => {
     return (
          <div className="auther-description">
               <h4>Ehsan TheMor</h4>
               <div className="description">
                    <div style={{ fontSize: 19, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                         <BiImage />
                    </div>
                    <p>SUBJECT</p>
                    <span className="under_line">__</span>
                    <p>DATE</p>
               </div>
          </div>
     )
}

const RenderBlogPostPreRepresentation = ({ article }: { article: any }) => {

     return (
          <div className='blog-post-holder'>


               <Image sx={{ borderRadius: '5px', overflow: 'hidden' }} source={`/images/${article.image}`} alt='post1' />

               <div className="article-holder">
                    <Title title={article.title} />

                    <div className="auther-field">
                         <Avatar source='asdf' />

                         <AuthorDescription />
                    </div>
               </div>

               <div style={{ color: '#737373' }} className="w-640 m-auto">
                    {article.description}...

                    <div style={{ paddingTop: '12px' }} className="read-more">
                         <ReadMoreLinkWithArrow link={`/actiles/${article.id}`} />
                         <ul>
                              <li>
                                   <AiFillFacebook />
                              </li>
                              <li>
                                   <AiOutlineTwitter />
                              </li>
                              <li>
                                   <BsPinterest />
                              </li>
                              <li>
                                   <BsTelegram />
                              </li>
                              <li>
                                   <GoComment />
                              </li>
                         </ul>
                    </div>
               </div>

          </div>
     )
}

export default function ContentSection() {
     const NUMBER_OF_POSTS_IN_PAGE = 5;

     const [articles, setArticles] = useState([])
     const [pages, setPages] = useState<number[]>([])
     const [activePage, setActivePage] = useState<number>(1)

     useEffect(() => {
          const getData = async () => {
               try {
                    const res = await fetch("/articles")
                    const data = await res.json()

                    setArticles(data)

                    //Catches the whole number of articles from the fetch and found out how 
                    //many pages should we have and returns the pages as array.
                    const numberOfPagesZeroBase = [...Array(Math.floor(data.length / NUMBER_OF_POSTS_IN_PAGE) + 1).keys()];
                    const numberOfPagesOneBase = numberOfPagesZeroBase.map(number => number + 1)

                    setPages(() => numberOfPagesOneBase)
               } catch (err) {
                    console.log(err)
               }

          }
          getData()

     }, [])

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
