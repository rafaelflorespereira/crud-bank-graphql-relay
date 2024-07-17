import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { LoginSection } from 'src/components/loginSection'

export default function Login() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <LoginSection />
    </>
  )
}
