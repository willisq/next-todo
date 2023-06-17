import Layout from '../components/layout';
import { getSession } from 'next-auth/react';

export default function Home({session}) {
  return (
    <Layout siteTitle="Bienvenido" >
      <div className='row'>
        <h1>Lista de tareas</h1>
        <p>En esta aplicacion puedes crear, editar y eliminar proyectos y asignar tareas a estos</p>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) return {
    redirect: {
      destination: '/api/auth/signin',
      permanent: false
    }
  }
  return {
    props: {
      session
    }
  }
}
