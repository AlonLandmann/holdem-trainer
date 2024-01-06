import { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import RangeCard from '@/components/ranges/RangeCard'
import tutorialRanges from '@/db/tutorial-ranges.json'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/tutorial/TutorialRoot.module.scss'

export default function TutorialRoot() {
  const { isLoading, user } = useAuth()
  const [selected, setSelected] = useState([])

  const handleSelectionChange = (rangeId, isSelected) => {
    if (!isSelected) {
      setSelected([...selected, rangeId]);
    } else {
      setSelected(selected.filter((id) => id !== rangeId));
    }
  }

  if (isLoading || !user) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <h1>Hold'em Trainer Preflop Tutorial</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in. Lacinia quis vel eros donec ac odio tempor. Lacus luctus accumsan tortor posuere. Malesuada bibendum arcu vitae elementum. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Eget egestas purus viverra accumsan in nisl nisi. Sapien nec sagittis aliquam malesuada bibendum. Turpis tincidunt id aliquet risus feugiat in ante metus. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Ultrices dui sapien eget mi proin sed libero. Quis eleifend quam adipiscing vitae. A scelerisque purus semper eget. Tortor posuere ac ut consequat semper viverra nam libero. Sagittis vitae et leo duis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.

Est lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Eros donec ac odio tempor orci. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Justo donec enim diam vulputate ut pharetra. Donec enim diam vulputate ut pharetra. Sit amet porttitor eget dolor. Donec ac odio tempor orci dapibus ultrices in. Fringilla urna porttitor rhoncus dolor purus non enim. Enim facilisis gravida neque convallis a cras. Elit pellentesque habitant morbi tristique senectus et netus. Diam maecenas sed enim ut sem. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.</p>
        <h2>1. Open Raising</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'Open').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <h2>2. Facing an open raise in position</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs Open').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <h2>3. Defending the Small Blind</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'SB').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <h2>4. Defending the Big Blind</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'BB').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <h2>5. Facing a 3-bet out of position</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs IP 3-bet').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
        <h2>6. Facing a 3-bet from the blinds</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={css.folder}>
          {tutorialRanges.filter(r => r.folder === 'vs OOP 3-bet').map(range => (
            <RangeCard
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}