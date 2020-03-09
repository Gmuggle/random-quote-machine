import React from 'react';
//import logo from './logo.svg';
import './App.css';

//准备好文本数据
const quoteText = [
  "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
  "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
  "If you want to lift yourself up, lift up someone else.",
  "I attribute my success to this: I never gave or took any excuse.",
  "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
  "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
  "Change your thoughts and you change your world."
];

const quoteAuthor = [
  "Erica Jong",
  "Unknown",
  "Oprah Winfrey",
  "Booker T. Washington",
  "Florence Nightingale",
  "Jesse Owens",
  "Vincent Van Gogh",
  "Norman Vincent Peale"
];

//准备好颜色数据，以便后续实现背景色与文本色的同步变化
const color = ["one", "two", "three"];
const paraColor = ["text-one", "text-two", "text-three"];
//Bootstrap布局
const QUOTE_BOX_LAYOUT = "col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 row well ";
const TEXT_LAYOUT = "text-center col-xs-12 col-md-12 ";
const AUTHOR_LAYOUT = "text-right col-xs-12 col-md-12 ";
const TWEET_LAYOUT = "col-xs-12 col-md-2 ";
const NEW_BTN_LAYOUT = "col-xs-12 col-md-3 col-md-offset-7";

class Quote extends React.Component {
/*   constructor(props) {
      super(props);
  } */

  render() {
      
      return (
          <div>
            <p id="text" className={TEXT_LAYOUT + paraColor[this.props.index.colorIndex]}>"{quoteText[this.props.index.randomIndex]}</p>
            <p id="author" className={AUTHOR_LAYOUT + paraColor[this.props.index.colorIndex]}>--{quoteAuthor[this.props.index.randomIndex]}</p>

            <p id="tweet" className={TWEET_LAYOUT + color[this.props.index.colorIndex] + " text-center"}><a id="tweet-quote" href="#twitter.com/intent/tweet" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>tweet it</a></p>

            <p id="button" className={NEW_BTN_LAYOUT}><button id="new-quote" className={color[this.props.index.colorIndex]}  onClick={this.props.handleChange}>New quote</button></p>

          </div>
      );
  }
}

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          randomIndex: 0,
          colorIndex: 0
      };
      this.newQuote = this.newQuote.bind(this);
  }
  //随机变化显示文本
  newQuote() {
      //改变文本的同时改变背景色与文本色
      this.setState({
          randomIndex: Math.floor(Math.random() * 8),
          colorIndex: Math.floor(Math.random() * 3)
      });
  }

  render() {
      return (
          <div id="app-container" className={"row " + color[this.state.colorIndex]}>
              <div id="quote-box" className={QUOTE_BOX_LAYOUT}>
                  <Quote index={this.state} handleChange={this.newQuote}/>
              </div>
          </div>
      );
  }
}

export default App;
