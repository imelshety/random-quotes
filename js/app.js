//immediate invoked function expression
(function() {
  var quotes = [
    {
      quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: " Albert Einstein"
    },
    {
      quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch"
    },
    {
      quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
            author: "J.K. Rowling"
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "حب ما تعمل حتي تعمل ما تحب",
      author: " mohamed Elshety"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    // to assign random quotes in Html 
    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
