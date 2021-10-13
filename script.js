function generate(){
  var quotes = {
    "- Albert Camus": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "- Warren E.Burger": '"Free speech carries with it some freedom to listen."',
    "- Richard Back": '"If you love someone, set them free. If they come back they are yours; if they do not they never were."',
    "- Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "- Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "- Mother Teresa": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "- Tomas Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "- Abraham Lincoin": "In the end, it's not the years in your life that count. It's the life in your years.",
    "- Oscar Wild": "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    "- Albert Einstein": "Only a life lived for others is a life worthwhile."
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

}