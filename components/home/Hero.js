import Image from 'next/image'
import Link from 'next/link'
import css from '@/scss/home/Hero.module.scss'

export default function Hero() {
  const handleTryNow = () => {
    window.open('https://www.youtube.com/watch?v=z6PkfQihrUc', '_blank')
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
        <h1>Refine your game</h1>
        <h3>Create your own custom poker ranges and train them on Hold'em Trainer for free.</h3>
        <div className={css.ctas}>
          <Link href='/signup' className={css.signupCta}>
            Create an account
          </Link>
          <div className={css.tryNowCta} onClick={handleTryNow}>
            Watch user guide
          </div>
        </div>
      </div>
    </div>
  )
}