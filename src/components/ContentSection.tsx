import ReactMarkDown from 'react-markdown'

import '../style/ContentSection.css'
import Image from './Image'
import { BiImage } from 'react-icons/bi'
import { useEffect, useState } from 'react'

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

export default function ContentSection() {
     const [articles, setArticles] = useState([])

     useEffect(() => {
          const getData = async () => {
               try {
                    const res = await fetch("/articles")
                    const data = await res.json()

                    setArticles(data)
               } catch (err) {
                    console.log(err)
               }

          }
          getData()

     }, [])

     return (
          <div className='container'>
               <section className='section'>
                    <article>
                         <div className="article-holder">
                              <Title title='Business Partners Work at Modern Office' />

                              <div className="auther-field">
                                   <Avatar source='asdf' />

                                   <AuthorDescription />
                              </div>
                         </div>

                         <Image sx={{ borderRadius: '5px', overflow: 'hidden' }} source='/images/post1.jpg' alt='post1' />

                         <div className="article-markdown">
                              {
                                   articles.length && articles[0].passage.map((item: any, index: number) => (
                                        <ReactMarkDown key={index}>{item}</ReactMarkDown>
                                   ))
                              }
                              <div className='tags'>
                                   {
                                        articles.length && articles[0].tags.map((item: any, index: number) => (
                                             <a key={index}>{item}</a>
                                        ))
                                   }
                              </div>
                         </div>

                    </article>
                    <div className="share-section">
                         <span>Share</span>
                         <div className="social-media-links"></div>
                    </div>
               </section>
          </div >
     )
}
