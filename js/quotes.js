const quotes = [
  {
    quote: "Don't dream, Be it",
    author: "Tim curry",
  },
  {
    quote: "When they go low, we go high",
    author: "Michelle Obama",
  },
  {
    quote: "Where there is a will there is a way",
    author: "Angela Merkel",
  },
  {
    quote: "Life is a journey",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The will of man is his happiness",
    author: "Friedrich von schiller",
  },
  {
    quote: "When in doubt, choose change",
    author: "Lily Leung",
  },
  {
    quote: "It is not length of life, But depth of life",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "I find the harder I work, the more luck I have",
    author: "Thomas Jefferson",
  },
  {
    quote: "Only I can change my life, no can do it for me",
    author: "Carol Burnett",
  },
  {
    quote: "I find the harder I work, the more luck I have",
    author: "Thomas Jefferson",
  },
  {
    quote: "Seeing is believing",
    author: "Thomas Fuller",
  },
  {
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
  },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "There are better starters than me but I am a strong finisher",
    author: "Usain Bolt",
  },
  {
    quote: "Tough times never last, but tough people do",
    author: "Robert H. Schuller",
  },
  {
    quote: "Only when it is dark enough can you see the stars",
    author: "Martin Luther King. Jr",
  },
  {
    quote: "Grind Hard, Shine Hard",
    author: "Dwayne Johnson",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D.Rockefeller",
  },
  {
    quote:
      "Although the World is full of suffering, it is full also of the overcoming of it",
    author: "Helen Keller",
  },
  {
    quote: "One man with courage makes a majority",
    author: "Andrew Jackson",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random === 0과 1사이의 랜덤한 숫자
// index는 0부터 시작하므로 Math.floor을 해도 모든 경우를 포함한 결과가 나온다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
