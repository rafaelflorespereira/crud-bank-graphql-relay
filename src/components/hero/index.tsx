import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-lime-300 to-lime-500">
      <section className="w-full py-32 md:py-48"></section>
    </div>
  )
}
