
/* This page was auto-generated by the prebuild script
 * Any changes you make to it will be lost on the next (pre)build.
 *
 * If you want to make changes, update the pageTemplate in:
 *
 *   packages/freesewing.shared/prebuild/lab.mjs
 *
 */
import pattern from 'pkgs/theo/src/index.js'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTemplate from 'site/page-templates/workbench.js'

const Page = () => <PageTemplate pattern={pattern} />
export default Page

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    }
  }
}
