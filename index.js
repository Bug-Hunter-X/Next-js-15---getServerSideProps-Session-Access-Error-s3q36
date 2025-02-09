// pages/about.js
export default function About({ session }) {
  if (!session) {
    return (
      <div>
        <p>Please log in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us.</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
