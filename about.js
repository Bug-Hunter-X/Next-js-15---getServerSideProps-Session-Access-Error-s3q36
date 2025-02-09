```javascript
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
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user tries to navigate here directly
  // instead of going through the home page first. The problem is that
  // getServerSideProps is trying to access session data before the session
  // has been properly established
  const session = getSession();

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
```