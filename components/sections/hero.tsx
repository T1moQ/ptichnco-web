import { getImageProps, type StaticImageData } from 'next/image'
import { encodeStaticImage } from '@/lib/static-image'
import desktopPhoto from '@/public/images/Фото 06.05.2026, 12 54 33.jpg'
import mobilePhoto from '@/public/images/Фото 06.05.2026, 12 57 36.jpg'
import './hero.css'

type HeroProps =
	| { variant?: 'home' }
	| { variant: 'single-image'; image: StaticImageData; alt: string }

export function Hero(props: HeroProps = {}) {
	const singleImage = props.variant === 'single-image'
	const common = {
		alt: singleImage ? props.alt : 'Деревянные гостевые дома Ptich&Co у лесистого склона',
		// Account for the wide original cropped into a portrait container.
		sizes: singleImage
			? '(min-width: 64rem) 121vw, max(161.5vw, 90.9375rem)'
			: 'max(100vw, min(150svh, 75rem), 56.25rem)',
		loading: 'eager' as const,
		fetchPriority: 'high' as const,
	}
	const { props: desktop } = getImageProps({
		...common,
		src: encodeStaticImage(desktopPhoto),
		sizes: '120vw',
	})
	const { props: mobile } = getImageProps({
		...common,
		src: encodeStaticImage(singleImage ? props.image : mobilePhoto),
	})

	return (
		<section
			aria-labelledby={singleImage ? undefined : 'hero-heading'}
			aria-label={singleImage ? common.alt : undefined}
			className={`home-hero${singleImage ? ' home-hero--single-image' : ''}`}
		>
			{/* Native art direction downloads only the matching optimized source.
          Keep this breakpoint aligned with Header and Foundations (lg). */}
			<picture className="home-hero__picture">
				{!singleImage && (
					<source
						media="(min-width: 64rem)"
						srcSet={desktop.srcSet}
						sizes={desktop.sizes}
						width={desktop.width}
						height={desktop.height}
					/>
				)}
				<img {...mobile} alt={common.alt} className="home-hero__image" />
			</picture>

			{!singleImage && (
				<h1 id="hero-heading" className="text-display home-hero__heading">
					Место, где можно
					<br />
					никуда не спешить
				</h1>
			)}
		</section>
	)
}
