import { GetServerSideProps, NextPage } from 'next'
import { Meta } from 'src/components/meta'
import { ProfileHero } from 'src/components/ProfileHero'

const ProfilePage: NextPage<{
  params: { username: string }
}> = ({ params }) => (
  <>
    <Meta />
    <ProfileHero username={params.username} />
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context

  const username = params?.username

  if (username && typeof username === 'string' && username.startsWith('@')) {
    return {
      redirect: {
        destination: context.resolvedUrl.slice(1),
        permanent: false,
      },
    }
  }

  return {
    props: {
      params,
    },
  }
}

export default ProfilePage
