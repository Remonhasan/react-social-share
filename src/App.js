import logo from './logo.svg';
import './App.css';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  InstapaperIcon,
  EmailIcon,
  TelegramIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Share <code>social</code> in React by Remon Hasan.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Social Share Now: &nbsp;
          <span className="mr-2">
            <FacebookShareButton url="https://www.facebook.com/" quote="Share on Facebook" hashtag={'#webinar'}>
              <FacebookIcon size={25} round={true} />
            </FacebookShareButton>
          </span>
          <span className="mr-2">
            <LinkedinShareButton url="https://www.linkedin.com/">
              <LinkedinIcon size={25} round={true} />
            </LinkedinShareButton>
          </span>
          <span className="mr-2">
            <WhatsappShareButton url="https://www.whatsapp.com/">
              <WhatsappIcon size={25} round={true} />
            </WhatsappShareButton>
          </span>
          <span className="mr-2">
            <TwitterShareButton url="https://www.twitter.com/">
              <TwitterIcon size={25} round={true} />
            </TwitterShareButton>
          </span>
          <span className="mr-2">
            <EmailShareButton url="https://www.google.com/">
              <EmailIcon size={25} round={true} />
            </EmailShareButton>
          </span>
          <span className="mr-2">
            <TelegramShareButton url="https://www.telegram.com/">
              <TelegramIcon size={25} round={true} />
            </TelegramShareButton>
          </span>
        </a>
      </header>
    </div>
  );
}

export default App;
