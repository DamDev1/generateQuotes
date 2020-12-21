function changeQuotes(){
    const quotes = [
        '“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”',

        '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',

        `“How you look at it is pretty much how you'll see it”`,

        `"Don't let yesterday take up too much of today"`,

        `“You learn more from failure than from success. Don’t let it stop you. Failure builds character."`,

        `“It’s not whether you get knocked down, it’s whether you get up.”`,

        `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”`,

        `“People who are crazy enough to think they can change the world, are the ones who do.”`,

        `“Failure will never overtake me if my determination to succeed is strong enough.”`,
    ];

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("demo").innerHTML = random;
}