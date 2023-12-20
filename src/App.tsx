import './App.css'
import data from './data/yt.json'
import icon_like from './assets/icon_like.png'
import icon_view from './assets/icon_view.png'

function App() {
  return (
    <>
      <div>
        <h4 style={{textAlign: 'center'}}>Youtube熱門影片 hololive</h4>
        <div className="video-list">
          {data.map((item, index) => {
            return (
              <div className="video-card">
                <a href={item.permalink}>
                  <img className="video-thumbnail" src={item.thumbnail_image} alt={item.title} />
                </a>
                <div className="video-title">
                  <a href={item.channel_link}>
                    <strong className="from-name">{item.from_name}</strong>
                  </a>
                  <p className="title">{item.title}</p>
                </div>
                <div className="video-info">
                    <img className="icon" src={icon_like} alt="icon_like" />
                    <span>{item.like_count}</span>
                    <img className="icon" src={icon_view} alt="icon_view" />
                    <span>{item.view_count}</span>
                </div>
                <div className="video-rank">
                  <span >#{index + 1} 觀看數：{item.view_count}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
