import Button from '@components/common/Button'
import Container from '@components/common/Container'
import { motion } from 'framer-motion'
import { fadeInUp } from '@utils/animations'

/**
 * CTA — full-width call-to-action section with gradient background
 */
export default function CTA({ heading, body, primaryCta, secondaryCta, dark = true }) {
  return (
    <section
      className={`relative overflow-hidden ${dark ? 'gradient-hero' : 'bg-[#EFF3F8]'}`}
      aria-labelledby="cta-heading"
    >
      {/* Decorative accent lines */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-[#C8972B]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C8972B]/30"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="py-20 text-center relative z-10"
        >
          <h2
            id="cta-heading"
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-balance ${
              dark ? 'text-white' : 'text-[#1E3A5F]'
            }`}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto ${
                dark ? 'text-white/75' : 'text-[#5A6A7A]'
              }`}
            >
              {body}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="accent" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant={dark ? 'ghost' : 'secondary'} size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
