/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // Escape function to prevent cross-site scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Returning a tweet <article> element containing the entire HTML structure of the tweet
  const createTweetElement = function (tweet) {
    let time = timeago.format(tweet.created_at);

    // prevent xss
    const safeHTML = escape(tweet.content.text);

    // Generate html structure of tweet article with data
    let $tweet = $(`<article class="tweet">
  <header>
    <div class="profile"><img src="${tweet.user.avatars}" width="50px" height="50px"> &nbsp;${tweet.user.name}</div>
    <div class="at-userid">${tweet.user.handle}</div>
  </header>
  <article class="usertweet">
    ${safeHTML}
  </article>
  <footer>
    <div>${time}</div>
    <div>
      <i class="fa-solid fa-flag iconoption"></i> &nbsp;
      <i class="fa-solid fa-retweet iconoption"></i> &nbsp;
      <i class="fa-solid fa-heart iconoption"></i>'
    </div>
  </footer>
  </article>`);
    return $tweet;
  };

  // Loops through tweets, calls createTweetElement for each tweet and appends it to the tweets container
  const renderTweets = function (tweets) {
    const $tweetsContainer = $('#tweets-container');
    $tweetsContainer.empty();
    for (let t of tweets) {
      const $tweet = createTweetElement(t);
      $('#tweets-container').prepend($tweet);
    }
  };

  // Post new tweet upon clicking submition, invalid content/tweet will show alert to user
  const $form = $('#tweet-form');
  $form.on('submit', function (event) {
    event.preventDefault();
    $('#errorEmpty').slideUp(200);
    $('#errorLong').slideUp(200);

    const serializedData = $(event.target).serialize();
    const len = $('#tweet-text').val().length;

    // Display error message when tweet is empty or longer than 140 chars
    if (len === 0) {
      return $('#errorEmpty').slideDown(200);
    } else if (len > 140) {
      return $('#errorLong').slideDown(200);
    }

    // Making post request, clear text area
    $.post('/tweets', serializedData, () => {
      loadTweets();
      $('#tweet-text').val('');
    });
  });

  // Get tweets from /tweets
  const loadTweets = function () {
    $.getJSON('/tweets', function (data) {
      renderTweets(data);
    });
  };

  // Load tweets on page
  loadTweets();
});