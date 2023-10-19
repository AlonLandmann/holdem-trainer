import Image from 'next/image'
import Button from '/components/common/Button'
import css from '@/scss/home/Hero.module.scss'

export default function Hero() {
  const handleSignUp = () => {
    location.replace('/signup')
  }

  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src='/hero.jpg'
          alt='poker-image'
          priority
          fill
          objectFit='cover'
        />
      </div>
      <div className={css.content}>
        <h1>Build your game</h1>
        <h3>Create your own custom poker ranges and train them on Holdem Trainer for free.</h3>
      </div>
    </div>
  )
}