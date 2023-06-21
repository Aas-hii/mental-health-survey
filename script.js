const cardContainer = document.querySelector('.card-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

let currentCardIndex = 0;
const cards = Array.from(cardContainer.querySelectorAll('.card'));
const lastCardIndex = cards.length - 1;

// Show the first card, hide the rest
cards.forEach((card, index) => {
  if (index === currentCardIndex) {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});

// Function to show the current card
function showCard(index) {
  cards.forEach((card, cardIndex) => {
    if (cardIndex === index) {
      card.classList.add('flip');
      card.style.display = 'block';
    } else {
      card.classList.remove('flip');
      card.style.display = 'none';
    }
  });
}



// Event listener for the Next button
nextBtn.addEventListener('click', () => {
  if (currentCardIndex < lastCardIndex) {
    currentCardIndex++;
    showCard(currentCardIndex);
    cardContainer.children[currentCardIndex].classList.add('card-flip'); // Add this line to trigger flip animation
  
  }

  // Show/hide buttons based on current card index
  if (currentCardIndex === lastCardIndex) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  }
  prevBtn.style.display = 'block';
});

// Event listener for the Previous button
prevBtn.addEventListener('click', () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showCard(currentCardIndex);
    cardContainer.children[currentCardIndex].classList.add('card-flip'); // Add this line to trigger flip animation
  }

  // Show/hide buttons based on current card index
  if (currentCardIndex === 0) {
    prevBtn.style.display = 'none';
  }
  nextBtn.style.display = 'block';
  submitBtn.style.display = 'none';
});

//after Submit
var submitButtonClicked = false;
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();
  submitButtonClicked = true; 
  document.getElementById("recommendationsSection").style.display = "block";// Prevent the form from submitting
  generateRecommendations();
});

// Question 1
var ratingOptionsQuestion1 = document.querySelectorAll('.rating-n.question1 li');
var selectedRatingQuestion1;

ratingOptionsQuestion1.forEach(function(option) {
  option.addEventListener('click', function() {
    ratingOptionsQuestion1.forEach(function(opt) {
      opt.classList.remove('selected');
    });
    this.classList.add('selected');
    selectedRatingQuestion1 = this.querySelector('span').innerText; 
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});



// Question 4
var ratingOptionsQuestion4 = document.querySelectorAll('.rating-n.question4 li');
var selectedRatingQuestion4 ;
ratingOptionsQuestion4.forEach(function(option) {
  option.addEventListener('click', function() {
    ratingOptionsQuestion4.forEach(function(opt) {
      opt.classList.remove('selected');
    });
    this.classList.add('selected');
    selectedRatingQuestion4 = this.querySelector('span').innerText;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

//Question 5
var ratingOptionsQuestion5 = document.querySelectorAll('.rating-n.question5 li');
var selectedRatingQuestion5 ;
ratingOptionsQuestion5.forEach(function(option) {
  option.addEventListener('click', function() {
    ratingOptionsQuestion5.forEach(function(opt) {
      opt.classList.remove('selected');
    });
    this.classList.add('selected');
    selectedRatingQuestion5 = this.querySelector('span').innerText;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

var stressOptions = document.querySelectorAll('.card2 .option');
var anxietyOptions = document.querySelectorAll('.card3 .option');
var eatOptions = document.querySelectorAll('.card6 .option');
var supportOptions = document.querySelectorAll('.card7 .option');
var helpOptions = document.querySelectorAll('.card8 .option');
var selectedStressOption;
var selectedAnxietyOption;
var selectedeatOption;
var selectedSupportOption;
var selectedhelpOption;

stressOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    selectedStressOption = this.textContent;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});


anxietyOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    selectedAnxietyOption = this.textContent;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

eatOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    selectedeatOption = this.textContent;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

supportOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    selectedSupportOption = this.textContent;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

helpOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    selectedhelpOption = this.textContent;
    if (submitButtonClicked) {
      generateRecommendations();
    }
  });
});

var recommendations = [];
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var sub=document.getElementById("submitBtn");
function generateRecommendations() {
  // Get the user's responses from the survey questions
  if (!submitButtonClicked) {
    return; // Return early if the submit button hasn't been clicked
  }

  recommendations = []; 
  var moodRating = parseInt(selectedRatingQuestion1);
  var sleepQualityRating = parseInt(selectedRatingQuestion4);
  var academics = parseInt(selectedRatingQuestion5);
  var stressLevel = selectedStressOption;
  var anxietyLevel = selectedAnxietyOption;
  var eatLevel = selectedeatOption;
  var supportNetwork = selectedSupportOption;
  var help = selectedhelpOption;
   // Generate recommendations based on the user's responses
   
   if (!selectedRatingQuestion1 || !selectedRatingQuestion4 || !selectedRatingQuestion4 || !selectedStressOption || !selectedAnxietyOption ||!selectedeatOption || !selectedSupportOption || !selectedhelpOption) {
    return; // Return early if any option is missing
  }
  if (moodRating >= 4) {
    recommendations.push("Engage in activities that bring you joy and uplift your mood, such as going for a walk in nature, listening to your favorite music, or spending time with loved ones.");
  } else {
    recommendations.push("Explore relaxation techniques to improve your mood, such as practicing deep breathing exercises, trying out yoga or meditation, or indulging in a hobby you enjoy.");
  }
  
  // Recommendation logic for sleep quality rating
  if (sleepQualityRating >= 4) {
    recommendations.push("Maintain a consistent sleep schedule and create a relaxing bedtime routine. Consider incorporating soothing activities before bed, such as reading a book, taking a warm bath, or listening to calming music.");
  } else {
    recommendations.push("Improve your sleep hygiene practices for better sleep. Establish a regular sleep routine, create a comfortable sleep environment, and limit exposure to electronic devices before bedtime.");
  }
  
  // Recommendation logic for academic rating
  if (academics >= 4) {
    recommendations.push("Create a schedule or prioritize tasks to ensure you allocate enough time and energy to address the challenging issues.");
  } else {
    recommendations.push("Consider acquiring new skills or knowledge related to the challenges you're facing to increase your confidence and ability to overcome them.");
  }

  //Recommendation Logic for stressLevel rating
  switch (stressLevel) {
    case "Rarely":
      recommendations.push("Continue practicing stress management techniques for overall well-being. Find healthy ways to unwind and manage stress, such as engaging in regular physical exercise, practicing mindfulness, or pursuing hobbies that bring you joy.");
      break;
    case "Sometimes":
      recommendations.push("Explore stress-reducing activities such as meditation, deep breathing exercises, or engaging in creative outlets like painting or writing. Consider setting aside dedicated time for relaxation and self-care.");
      break;
    case "Often":
      recommendations.push("Consider seeking professional support or therapy to manage stress. A trained therapist can provide guidance and tools to help you cope with stress more effectively. Additionally, prioritize self-care activities and reach out to trusted friends or family for support.");
      break;
    default:
      break;
  }
  
  // Recommendation logic for anxiety level
  switch (anxietyLevel) {
    case "Rarely":
      recommendations.push("Incorporate relaxation techniques to reduce anxiety, such as deep breathing exercises, progressive muscle relaxation, or guided imagery. Practice self-care and engage in activities that bring you peace and tranquility.");
      break;
    case "Sometimes":
      recommendations.push("Try incorporating mindfulness practices to manage anxiety. Practice being present in the moment, engage in activities that promote mindfulness, such as yoga or meditation, and consider journaling your thoughts and feelings.");
      break;
    case "Often":
      recommendations.push("Consider seeking therapy or counseling for anxiety management. A mental health professional can provide strategies and support to help you better cope with anxiety. Prioritize self-care, maintain a healthy lifestyle, and reach out to your support network for assistance.");
      break;
    default:
      break;
  }
  
  //eat
  switch (eatLevel) {
    case "Rarely":
      recommendations.push("Continue following a balanced and nutritious diet that includes regular meals and snacks. This can help maintain stable appetite levels.");
      break;
    case "Sometimes":
      recommendations.push("Pay attention to when and why your appetite fluctuates. This awareness can help you identify potential triggers or factors influencing your eating habits.");
      break;
    case "Often":
      recommendations.push("If you are experiencing frequent and significant changes in appetite or eating habits, it is advisable to seek medical advice to rule out any underlying medical conditions.");
      break;
    default:
      break;
  }
   
  switch (help) {
    case "Rarely":
      recommendations.push("Take the initiative to explore and familiarize yourself with the various resources and counseling services offered on campus.");
      break;
    case "Sometimes":
      recommendations.push("Regularly visit your university's website, counseling center's webpage, or student portal to stay informed about available resources.");
      break;
    case "Often":
      recommendations.push("Get involved in student organizations that promote mental health awareness or well-being.");
      break;
    default:
      break;
  }

  // Recommendation logic for support network
  if (supportNetwork === "No") {
    recommendations.push("Explore ways to expand your support network, such as joining social groups or clubs that align with your interests, attending community events, or participating in volunteer activities. Building meaningful connections can provide valuable support in challenging times.");
  } else if (supportNetwork === "Yes") {
    recommendations.push("Nurture and maintain your existing support network. Reach out to your loved ones, friends, or colleagues, and make time for meaningful connections. Sharing your thoughts and feelings with a trusted support system can provide comfort and help you navigate through difficult moments.");
  }

  var lastCard = document.getElementById("lastcard");
  var recommendationsSection = document.getElementById("recommendationsSection");

  lastcard.style.display = "none";
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  sub.style.display="none";
  recommendationsSection.style.display = "block";

  toprint(recommendations);
   
}
function toprint(recommendations)
{
  var recommendationsSection = document.getElementById("recommendationsSection");
   recommendationsSection.innerHTML = "<h3>Recommendations</h3><ul><li>" + recommendations.join("</li><li>") + "</li></ul>";
}

