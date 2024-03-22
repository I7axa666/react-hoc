import './App.css'
import './css/index.css'
import { useState } from 'react';
import DateTime from './components/DateTime';
import DateTimePretty from './components/DateTimePretty';
import VIDEO from './db/videos.json'

function App() {
  const [list, setList] = useState(VIDEO);

  function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty Component={DateTime} date={props.date} />
        </div>
    )
}

  function VideoList(props) {
    
    return props.list.map(item => <Video url={item.url} date={item.date} />);
  }

  return (
    <>
      <VideoList list={list} />
    </>
  )
}

export default App
