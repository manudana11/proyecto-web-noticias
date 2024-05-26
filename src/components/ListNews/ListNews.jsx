import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './ListNews.scss';

const ListNews = () => {
    const {news, getNews} = useContext(GlobalContext);
    useEffect(() => {
        getNews();
    }, [])
    console.log(news);
    if (news.length <= 0) {
        return <p>Loading...</p>
    }
  return (
    <div className='list-news-container'>{news.map(notice => {
        const imageUrl = notice.media && notice.media.length > 0 && notice.media[0]['media-metadata'] && notice.media[0]['media-metadata'].length > 0
                    ? notice.media[0]['media-metadata'][0].url
                    : '';
        return (
            <div key={notice.id} className='list-news-item'>
                {imageUrl && <img src={imageUrl} alt={notice.title} />}<h2>{notice.title}</h2>
                <p><strong>By:</strong> {notice.byline}</p>
                <p><strong>Published:</strong> {notice.published_date}</p>
                <p><strong>Updated:</strong> {notice.updated}</p>
                <p><strong>Source:</strong> {notice.source}</p>
                <p><strong>Section:</strong> {notice.section}</p>
                
                <p>{notice.abstract}</p>
                <a href={notice.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        )
    })}</div>
  )
}

export default ListNews