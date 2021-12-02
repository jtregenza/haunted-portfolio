import dynamic from 'next/dynamic'
import Head from "next/head"

const CMS_CONFIG = {}
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-gray-500 font-semibold text-xl">Loading...</p>
  </div>
)

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((CMS) => {
      CMS.init({ CMS_CONFIG })
    }),
  { ssr: false, loading: Loading }
)

const Admin = () => {
  return (
    <>
    <Head>
      <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <div className="cms">
      <CMS />
    </div>
    </>
  )
  
}

export default Admin