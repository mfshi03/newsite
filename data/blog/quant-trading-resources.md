This is a compilation of the resources I have used for interviewing with Jane Street in Fall 2022. 

The first link here:  [Useful Advice](https://www.wallstreetoasis.com/forum/trading/jane-street-capital-first-round-phone-interview) is some good general advice to read before going into these type of interview to know what to expect.

**Mental Math**
	[ZetaMac](https://arithmetic.zetamac.com/game?key=a7220a92) is a great resource for getting sharper at mental math. Unfortunately, during my interview with Jane Street there was no mental math involve.

**Expected Value + Recursion**
Problems
	[100 die-problem](https://math.stackexchange.com/questions/465651/expected-value-of-game-involving-100-sided-die/465668)
	[Actual Interview Question](https://quantnet.com/threads/jane-street-interview-questions.3039/)

In the Anna and Stairs Problem, we get a 3rd order recurrence relations

$E(n)  = \frac{1}{2}(E(n-1) + 1) + \frac{1}{2}(E(n+1) + 1)$

and 

$E(n+1)= \frac{1}{2}(E(n)+1) + \frac{1}{2}(E(n+2) + 1)$

We can get the equation

$E(n+2) - 3E(n+1) + 3E(n) - E(n-1) = 0$

We can use our initial conditions of:
$E(99) = 0$ and $E(1) = 1 + E(2)$
	
	
Dice games
Conditional Probability
Confidence Intervals 
Markov Chains



Prob + Stat
Pidgeonhole Principle 


We can use symmetry to find way to prove certain principles.

We can derive hidden rules from the initial conditions of our problem 

[150 Interview Questions](http://www.fepress.org/wp-content/uploads/2019/12/150iqs-second_ed-fifteen_questions_solutions.pdf)

[Actual Interview Question](https://quantnet.com/threads/jane-street-interview-questions.3039/)

[Compilation of Questions](https://www.glassdoor.com/Interview/quant-trading-intern-interview-questions-SRCH_KO0,20.htm) 

[Quant Job Interviews](https://github.com/geniayuan/datasciencecoursera/blob/master/%5BMark%20Joshi%5DQuant%20Job%20Interview%20Questions%20And%20Answers.pdf)

[2nd Round Questions](https://quantnet.com/threads/jane-street-capital-second-round-interview.12565/)

[100 die-problem](https://math.stackexchange.com/questions/465651/expected-value-of-game-involving-100-sided-die/465668)

[Interviews Practice](https://medium.com/@camdenko/quant-trader-intern-interview-guide-for-beginners-pt-2-first-round-fcacbc3ed3c1)

[Combinatorics Book](http://julio.staff.ipb.ac.id/files/2015/02/Ross_8th_ed_English.pdf)

[Coin-Flip Problem](https://math.stackexchange.com/questions/1839496/expected-number-of-tosses-to-get-3-consecutive-heads)

[Chess Tournament](https://math.stackexchange.com/questions/3492258/cannot-make-sense-of-chess-tournament-solution)

[On Learning Combinatorics](https://www.reddit.com/r/math/comments/ptzuvc/how_can_i_actually_go_about_learning/)

[Expected Value and Markov Chains](http://www.aquatutoring.org/ExpectedValueMarkovChains.pdf)

[Harvard Stats](https://projects.iq.harvard.edu/files/stat110/files/strategic_practice_and_homework_2.pdf)




Question Compilation:

Bidding games:

A number from 0 to 1 is put on a piece of paper. You and person X are playing a game. You must get less than the number on the paper, but above X’s guess. You know X chooses to pick a number at random. What is lowest number you can choose to maximize your probability of winning

Suppose you are given the opportunity to bid for a treasure chest, which you know with 100% confidence to be priced anywhere between $0-$1000. If you bid equal to or above the price, you win the treasure chest (at the cost of your bid). If you bid below the price, you do not earn the treasure chest. Now, also suppose you have a friend who is willing to buy the treasure chest from you for one and a half times the price of the treasure chest (should you obtain the chest). What should your bid be?

You have a drawer with an infinite number of two colors of socks, which exist in equal probability. What is the expected number of attempts at taking out socks individually from the drawer before a matching pair is found?

 There is a raffle with 80 total tickets. Three tickets win a prize. I buy 5 tickets. What is the approximate probability that I win exactly one prize?

Tips: 
Use expected value
Come up with an expression based on the random variable selected
Seek to maximize or minimze the expression.
Use probability rules
Patterns regarding the state transitions and exploiting them (HARD and need better intuition)

