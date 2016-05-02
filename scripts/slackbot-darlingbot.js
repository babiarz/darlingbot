//Applied to Slackbot

module.exports = function(robot) {
	// Fortune Cookie 
	robot.hear(/fortune cookie/i, function(response) {
		var myFortune = ['You are cleverly disguised as responsible adult.', 'Drive like hell, you will get there.', 'He who dies with most toys, still dies.',
			'Look before you leap. Or wear a parachute.', 'Okay to look at past and future. Just don’t stare.', 'You will soon have an out of money experience.',
			'The end is near, might as well have dessert.', 'Run', 'You will find a bushel of money', 'Your smile will tell you what makes you feel good.',
			'Don’t panic', 'The best year-round temperature is a warm heart and a cool head', 'It could be better, but it’s good enough.',
			'You will find a thing. It may be important', 'Your reality check is about to bounce.', 'Two days from now, tomorrow will be yesterday.',
			'I cannot help you, for I’m just a cookie', 'The fortune you seek, is in another cookie'
		];
		var fortune = myFortune[Math.floor(Math.random() * myFortune.length)];
		response.send(fortune)
	})


// Cats
	//robot.hear(/cats/i, function(response) {
	//	console.log(robot.brain.data.users)
	//	var user = robot.brain.userForName()
	//	var like = response.match[1]
	//	response.reply(user.real_name + ', cats are so cute !')
	//})


	// What should I eat

	robot.respond(/what should i eat\?/i, function(response) {
		robot.brain.set(response.message.user.name, true)
		response.send("Are you a vegetarian?")
	 })

		robot.respond(/\b(yes|no)\b/i, function(response) {
		if (robot.brain.get(response.message.user.name) !== true) {
	 		return
	 	}
	 	var myvegFood = ['pasta', 'a cheese pizza', 'a spring roll', 'panang curry with tofu', 'a salad', 'a granola bar', 'chocolate cake', 'tacos']
	 	var mymeatFood = ['a cheeseburger', 'a philly cheese steak', 'kung pao beef', 'some chicken tacos']
	 	if (response.match[1] === 'yes') {
	 		var vegFood = myvegFood[Math.floor(Math.random() * myvegFood.length)];
	 		response.reply('You should eat ' + vegFood '.');
	 	} else {
	 		var meatFood = mymeatFood[Math.floor(Math.random() * mymeatFood.length)];
	 		response.reply('You should eat ' + meatFood + '.');
	 	}

	 })

}