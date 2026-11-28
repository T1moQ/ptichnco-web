import { getImageProps } from 'next/image'
import { encodeStaticImage } from '@/lib/static-image'
import desktopPhoto from '@/public/images/Фото 06.05.2026, 12 54 33.jpg'
import mobilePhoto from '@/public/images/Фото 06.05.2026, 12 57 36.jpg'
import './hero.css'

export function Hero() {
	const common = {
		alt: 'Деревянные гостевые дома Ptich&Co у лесистого склона',
		// Account for the wide original cropped into a portrait container.
		sizes: 'max(100vw, min(150svh, 75rem), 56.25rem)',
		loading: 'eager' as const,
		fetchPriority: 'high' as const,
	}
	const { props: desktop } = getImageProps({
		...common,
		src: encodeStaticImage(desktopPhoto),
		sizes: '120vw',
	})
	const { props: mobile } = getImageProps({ ...common, src: encodeStaticImage(mobilePhoto) })

	return (
		<section aria-labelledby="hero-heading" className="home-hero">
			{/* Native art direction downloads only the matching optimized source.
          Keep this breakpoint aligned with Header and Foundations (lg). */}
			<picture className="home-hero__picture">
				<source
					media="(min-width: 64rem)"
					srcSet={desktop.srcSet}
					sizes={desktop.sizes}
					width={desktop.width}
					height={desktop.height}
				/>
				<img {...mobile} alt={common.alt} className="home-hero__image" />
			</picture>

			<h1 id="hero-heading" className="text-display home-hero__heading">
				Место, где можно
				<br />
				никуда не спешить
			</h1>
		</section>
	)
}
