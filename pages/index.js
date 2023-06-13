import Layout, { siteTitle } from '../components/layout';

export default function Home({allPostsData}) {
  return (
    <Layout siteTitle="Bienvenido" >
      <section>
        <p>Web developer with experience with web technologies such HTML, CSS and Javascript</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
