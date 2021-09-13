function generate(){
  var quotes = {
    "- Albert Camus": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "- Warren E.Burger": '"Free speech carries with it some freedom to listen."',
    "- Richard Back": '"If you love someone, set them free. If they come back they are yours; if they do not they never were."'
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

}