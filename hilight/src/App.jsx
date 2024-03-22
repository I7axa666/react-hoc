import { useState } from 'react'
import './App.css'
import VIDEOS from './db/videos.json'
import Wrapper from './components/Wrapper'


function App() {
  const [list, setList] = useState(VIDEOS)

  function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
  }

  function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
  }

  function List(props) {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <Wrapper Component={Video} item={item} key={index} />
                );

            case 'article':
                return (
                  <Wrapper Component={Article} item={item} key={index} />
                );
        }
    });
  }



  return (
    <>
      <List list={list} />
    </>
  )
}

export default App
