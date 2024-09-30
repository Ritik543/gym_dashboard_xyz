import React from 'react';
import './Album.css';
import { color } from 'chart.js/helpers';

const TextAlbum = () => {
    const textContainers = [
        { id: 1, text: 'FitSnap: Ditch bad form, embrace perfect workouts. AI analyzes your moves in real-time for flawless fitness.', heading: 'Enhanced Focus on Individual Needs', color: "#7D8DC7" },
        { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur', heading: 'Data-driven Insights', color: "#5E9ED7" },
        { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur', heading: 'Efficient Workouts', color: "#C46DA0" },
        { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur', heading: 'Preventing Injuries', color: "#69996A" },
    ];

    const images = [
        { id: 1, url: 'https://s3-alpha-sig.figma.com/img/4305/97d8/3f044dec29199b21136f83647539e774?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PYNc0O8uBBo6aOg50Fg3Mx-~bLbgHdWVgpwwwskY07z8PoAGL5Vg9MSOLRWLlQY6lHuLirqtdqvlNUTKweISjZpwEmMA7hd378LNW2dpoeyF9S~zy2Le75gna0sWcsXo86hzoPyeZZ-cmkpT5N2hRTUGgKYFzQtGcjFZRHhd4AneW32uEYGVI~ItsNix560kmUz4Pcin4u4xEbe6VtKQoNvexRmzqnVPTKNeo7x7DHRqGa3Q~3NRqVyUc-l-To64QMN2ykSWppuC-iRSvAaifYN~stE4iGB9uC8jCBBPsHvFht5FA86O0~fVH6wsd57RmT5wPymh3AeHz36K6y51aw__', alt: 'Image 1' },
        { id: 2, url: 'https://s3-alpha-sig.figma.com/img/5e9b/083c/bf91493e569359873e53420af70f70eb?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQWSplpZjMyWh76CofpDToSKLwwkJMALVDqA3sYapXqYgUja1yOuDb65NLI3N6hjEKLILxoQRf62i~Xbl~15rvtBItAg2QIx1xNUves0NdCRQgA8koYl06dCzerOp07rMCWORckAoj2Au0ViyzTOe6dsDxE~jSLJzykddK2iCAeKSScW6LO494QW966ni5m-AOq~SFJMVbSGDzUatKSEBLBB4HFCvYYn0UkeR7aEJX1wgEW3tC9Nc0wc~C865Na9Wt2GUgefyO61SDuVDEkVGHnTIpCuBqxBzMvvVKZf81M8rsZYXVFqQ2wKUqq7K5eHhkKpDJ4y-dhlhH18OGrmHg__', alt: 'Image 2' },
        { id: 3, url: 'https://s3-alpha-sig.figma.com/img/a260/a303/b99c8e0104c45bfe796c62328409147d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFumJtA8ecHsJILwFvdSqNTwCjmAtDEIPIHmn8wz-sh9mU9xq2IpE69lOHUMs5m3Ho6XBt45Tq4GHBlEiXgZVBYzxqPHJA10YDH1YK-HCEDqG5Nc~sobmYoqPUlZyU1r1MlXwg2dY26W5IZfTjoSaXMtdl-~28FBZCewUlCri~BKiY4WxmO9uk1vVRYk7A2NlbB8~OsDYebJaSX0DP2W7VY5lYq7SNy3YgVEZKUvEXA5nfa9TztDOUkFjP21AJiDQkNyaRxWE-gEKC5LYQdgugRE68M3phunbZUT7cpkjWxSGN1iJejAJe6wmdbRd~TXKQSfKNSL3oVon~qOoc6uuQ__', alt: 'Image 3' },
    ];

    const video = { id: 1, url: '/public/video.mp4', alt: 'Video 1' };

    return (
        <div className="album-container">
            <div className="image-section">
                <div className="image-container" key={images[0].id}>
                    <img src={images[0].url} alt={images[0].alt} />
                </div>
            </div>
            {textContainers.slice(0, 2).map((container) => (
                <div className="text-container" style={{ backgroundColor: container.color }} key={container.id}>
                    <h2 className="text-heading">{container.heading}</h2>
                    <p>{container.text}</p>
                </div>
            ))}
            <div className="video-section">
                <video autoPlay muted loop>
                    <source src={video.url} type="video/mp4" />
                    {video.alt}
                </video>
            </div>
            <div className="image-section">
                <div className="image-container" key={images[1].id}>
                    <img src={images[1].url} alt={images[1].alt} />
                </div>
            </div>
            {textContainers.slice(2).map((container) => (
                <div className="text-container" style={{ backgroundColor: container.color }} key={container.id}>
                    <h2 className="text-heading">{container.heading}</h2>
                    <p>{container.text}</p>
                </div>
            ))}
            <div className="image-section">
                <div className="image-container" key={images[2].id}>
                    <img src={images[2].url} alt={images[2].alt} />
                </div>
            </div>
        </div>
    );
};

export default TextAlbum;