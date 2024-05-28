import Link from 'next/link'
import RangeDisplay from '@/components/article/RangeDisplay'
import Navbar from '@/components/common/Navbar'
import tutorialRanges from '@/db/data/tutorial-ranges.json'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/tutorial/TutorialRoot.module.scss'

export default function TutorialRoot() {
  const { isLoading, user } = useAuth()

  if (isLoading || !user) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <div className={css.heading}>
          <h1>Hold'em Trainer Preflop Tutorial</h1>
        </div>
        <p>
          Welcome to the Hold'em Trainer Preflop Tutorial.
          The goal of this tutorial is to introduce you to the concept of a poker range, explain why ranges are important to understand, and then to give you a good set of starting ranges that you can practice right away to get started.
        </p>
        <p>
          So, what is a poker range? In short, a poker range is a table of all possible starting hands in poker together with a legend - usually by using color - to represent the different actions you can, should, will, or might take with the different hands in a given situation.
          Such a situation is always determined by what has happened previously in the hand. For example, if you are last to act before the flop, and everyone before you folds, then which hands do you raise with, call with, fold?
        </p>
        <p>
          We often don't think about poker strategy in this way. When we sit at a poker table, we only see the hand we have right now. We think about how strong this particular hand is and worry about what our opponent might have, and we don't tend to think too much about the other cards we might have at this moment.
          But it is actually very important to consider what else we could have.
        </p>
        <p>
          The reason for this is, of course, that our opponents do not know what we have. And so if we think about what we likely could have in this given situation, then we may for example be able to come up with a very believable bluff.
          We've also all been in the situation before, where we didn't hit the flop very well, our opponent checks, we check back, and then our opponent feels that we are very weak and pounds on us on the turn.
          This situation will come about very often if a good opponent notices that you always bet your strong hands on the flop, and you always check with your weaker hands. Once you check, he knows you're weak.
          But we can very easily fall into this trap if we only think about the hand we have in front of us, and not about all of the hands that we might have.
        </p>
        <p>
          Exploring all the possible hands at once has the added benefit that we can start to formulate our overall strategies quite precisely.
          The ranges that are explored in this tutorial are preflop ranges - actions we'd want to take before the first cards are dealt in the middle of the table.
          The ones given here are specific to six player cash games with stack sizes of around one hundred big blinds.
        </p>
        <p>
          These ranges are of course only recommendations. No one has solved the game of poker, and no one likely will for quite some time. But over time we have formed quite a good understanding of what these ranges should look like, and the relevant reasons will be given in each individual section.
          With these ranges trained and understood you will feel very comfortable preflop, and beyond that you will understand how to play postflop better as well. Once the flop hits the board, you will gain a strong intuition of how well you and your opponent have connected with the flop, as you understand what cards you both are likely to have.
          The tables which follow represent all possible starting hands in Texas Hold'em. For a full description check out the <Link href='/'>home page tutorial</Link>.
        </p>
        <div className={css.heading}>
          <h2>1. Open Raising</h2>
        </div>
        <p>
          The most common situation you will likely face is when you are not in the small blind or in the big blind, and everyone who acts before you has folded.
          This is when you decide whether you want to fold as well, call the big blind or open the game with a raise.
          As you can see from the ranges below, we never choose the option to call the big blind.
          There are many reasons for that. First, this doesn't give us the possibility of winning the pot right then and there. Second, it will sweeten the pot for even more players to join the round, and we will likely end up in a multi-way pot. That's bad. In general, you will see a pattern of us playing aggressive to avoid multi-way pots in all sorts of situations.
        </p>
        <p>
          Now, the ranges below are split by position. UTG stands for 'Under the gun' and represents the first person seated after (to the left of) the big blind. The Hijack (HJ) is the person after him in a six player game, as the term denotes the second player to the right of the dealer.
          The cutoff (CO) comes right before the dealer, and BTN stands for the person with the dealer button. Position is a very important concept in Poker. Probably the most important concept.
          It really matters where in relation to the dealer button you are seated. This is also the reason why the button moves around from hand to hand, so that the game remains fair.
          In a nutshell, the dealer has the best spot, because he gets to decide last. Preflop it's actually the big blind who gets to act last, but he had to pay his blind, and after the flop he doesn't go last, the dealer does.
          Getting to decide after your opponent is always an advantage in poker, because seeing what your opponent decided to do is information - in a game where information is hard to come by.
          Think about price negotiations. When selling something on the secondary market, everyone instinctively knows to ask the other party for their best offer or price before revealing their own.
          Specifically in our scenario here, there is a further reason why it's good to be the dealer, or as close to the dealer as possible. Because the closer you are to the dealer position, the fewer players you have to worry about, who may raise you or call you and contest you in the pot.
          You don't know what hands the other players have been dealt, and the fewer players remain, the lower the chance that someone has a much stronger hand than you.
        </p>
        <p>
          Now, let's take a closer look at the ranges. The hands in dark red represent the hands we decide to raise with - to 2.50 times the big blind. The grey hands we decide to fold.
          Now, what about the light red hands in the UTG open and HJ open ranges described as 50-50? These are hands that are meant to be raised half of the time, and folded the other half of the time.
          This is what's known as a mixed strategy in poker - or in game theory in general. Why is this necessary or useful? Well, let's briefly think about another game.
          What is the optimal way to play rock, paper, scissors? Think about it for a moment. The best possible way to play rock, paper, scissors is to throw rock a third of the time, paper a third of the time, and scissors a third of the time.
          If you choose to throw any of the three more often than the other two, then your opponent will be able to beat you (on average and in the long run) by simply always throwing the counter to that.
          Of course, you can then react to that if you notice it, and change your strategy, but that is besides the point. We are not trying to play the 'he thinks that I think that he thinks that I think...' game, but we are instead looking for a solid strategy that cannot be exploited, even if our opponent knows our strategy.
          Now, let's get back to our ranges. Why are we deciding to raise the pocket pairs 55, 44, 33, and 22 half of the time, instead of simply raising 55 and 44 all of the time? Those are the same number of raises in the long run after all, and 55 and 44 are simply stronger.
          The reason is that when the flop contains a 2, we want our opponent to be unsure of whether we have hit trips with 22, rather than be 'sure' (if he knows our strategy), that we didn't.
          In other words, we want to spread ourselves out a little bit over the possible hands we can have to keep our opponents in the dark on more of the different kinds of flops that can come about. This way, he won't be able to take advantage of our rather right range as often.
          The price we pay of raising slightly weaker hands is simply outweighed by this benefit. We see that this is no longer a necessary or useful thing to do, when we get to the CO and BTN ranges.
          There, we already have plenty of starting hands we raise with covering all the different cards that come on the flop.
        </p>
        <p>
          Finally let's take a brief look at the different hands we choose to play in general. Down the diagonal are the pocket pairs. In general, these are very strong as they already give you a made hand on the flop.
          Of course, we also tend to like hands with two high cards. We also want to play suited hands more often than off suit hands. As a matter of actual winning chances, suited hands aren't actually that much better than off-suit hands, but
          getting back to the concept of trying to cover many different cards and spreading out our possible hands somewhat, we do want to play some lower cards as well, and then why not choose the suited versions of those.
          The final group of hands we also like to play are the suited connectors (JTs down to 54s). These hands have great potential to make flushes and straights, and are desirable for that reason. Note that 43s and 32s are not really true suited connectors, as there are fewer possible straights we can make with them, compared to the others.
          For example, there are five possible straights that include 98s (K-9 down to 9-5), but there are only two straights that include 32s (6-2 and 5-A).
        </p>
        <p>
          With the ranges explained, it is time to start practing them. Duplicate ( <i className='bi bi-copy'></i> ) one of the ranges below to your personal ranges to begin.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'Open').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
        <div className={css.heading}>
          <h2>2. Facing an open raise in position</h2>
        </div>
        <p>
          In this section we look at how we should play once some other player has already made the first raise, and we have to make our first decision. Again, we are not sitting in the blinds and will have position on the person who raised.
        </p>
        <p>
          You can see that we again choose to play raise or fold here as opposed to calling sometimes. This time it's not strictly better - it can indeed be a good strategy to call with some hands on the button for example.
          The reason why it's not that good to call an open raise in the earlier positions is again, that there are many players left to act who can raise with stronger hands, and we would also give them a more profitable call.
          We'd like to avoid multi-way pots and so, it's much simpler to just play raise or fold. But it wouldn't be incorrect to call with some hands when we have a good position.
        </p>
        <p>
          Since our raise will be around three times the original raise, and since the original raiser already must have some decent cards, our reraising (or 3-betting) ranges are rather tight with very few hands selected.
          Here, mixed strategies play an even more important role, exactly because there are fewer overall hands we choose, and thus a greater need to disguise and cover more of the possible card combinations.
        </p>
        <p>
          Note that the ranges for CO vs UTG and CO vs HJ are the same, and the ranges for BTN vs UTG and BTN vs HJ are as well. This should simplify things a little bit.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs Open').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
        <div className={css.heading}>
          <h2>3. Defending the Small Blind</h2>
        </div>
        <p>
          The small blind can be a tricky position to play, especially for beginners. One is inclined to call too often from this position, inviting the big blind to come along, and finding oneself first to act in a 3-way pot with very slim odds to take it down.
          It is not wrong to have a calling range in the small blind, but an equally good and much more practical approach is to simply play raise or fold again.
        </p>
        <p>
          Notice that we are laying a stronger focus on high cards as opposed to suited connectors and the like when 3-betting from the small blind. Being out of position postflop we have less flexibility and it's harder to extract value from flushes and straights.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'SB').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
        <div className={css.heading}>
          <h2>4. Defending the Big Blind</h2>
        </div>
        <p>
          As the big blind, when one player has raised and everyone has folded, we should defend with quite a wide range.
          Now, it is of course a much better idea to call, as our call will close the action preflop guaranteeing that we will see a flop, and it is already clear that there won't be any more players joining.
          We also tend to have good pot odds from this spot, having already paid a fair bit.
          Nevertheless, we obviously also want to raise some hands, and we need to think about balancing this range as well.
        </p>
        <p>
          Clearly, as the player who has raised sits in earlier positions (UTG, HJ), we want to defend fewer hands and raise less often, as their range is stronger.
          As we get to later positions of the opponent, our raising range forms a small gap so that we always raise the very strongest and then start picking again from more of the middle, so that our raising range also consists of some Jacks, Tens, and Nines.
          We also want to leave some stronger hands in our calling range to keep our opponent at bay after we call with some weaker hands.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'BB').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
        <div className={css.heading}>
          <h2>5. Facing a 3-bet out of position</h2>
        </div>
        <p>
          We now move on to what happens after we have open raised from an in-position spot (not from the blinds). If the other players all fold or call, then the flop would come.
          If someone reraises however (3-bets), then we are faced with another decision. In this section we look at what we should do, if we the 3-bettor sits after us, but not in the blinds, i.e. he has position on us.
          We will look at what happens if the 3-bettor is in the blinds in the next section.
        </p>
        <p>
          Here, we clearly want to fold most of our weaker hands, and call most of the time with our stronger hands. Only with very strong hands are we inclided to 4-bet.
          However, we need to keep in mind that there are still three more streets to come (flop, turn, and river), and if we narrow our raising range too much, then we are in trouble.
          Let's say we only raise with AA, KK, QQ, and AK. Then our opponents will have a very easy time playing against us after the flop. We therefore play a mixed strategy, where we raise about 35% of the time with some other hands as well.
          We try to cover as many cards as possible in the process. This also gives us some more chances to win the pot right away.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs IP 3-bet').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
        <div className={css.heading}>
          <h2>6. Facing a 3-bet from the blinds</h2>
        </div>
        <p>
          In this section, we have the scenario where we have made the first raise from an in-position spot, and one of the players in the blinds has reraised us.
          Because players in the blinds don't have position on us, and because they tend to raise a higher amount for exactly this reason, our calling and raising ranges are somewhat tighter now.
          Especially the raising range, because we do have position on our opponent now, and so calling is a more appealing choice.
        </p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs OOP 3-bet').map(range => (
            <RangeDisplay
              key={range.id}
              user={user}
              range={range}
            />
          ))}
        </div>
      </div>
    </div>
  )
}