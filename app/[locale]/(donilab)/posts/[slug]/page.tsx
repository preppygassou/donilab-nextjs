import Home from '@/components/site/pages/home';
import initTranslations from '../../../i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

const i18nNamespaces = ['common'];
export default async function Page({ params: { locale } }:{params: { locale:string }}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <div>test</div>
    </TranslationsProvider>
    </>
  )
}