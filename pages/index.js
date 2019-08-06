import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout';
import Link from 'next/link';

/*export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}*/

//Method 1

//const Page = () => <p>Hello Next.js</p>;

//export default withLayout(Page);

//Method 2 - Page content as a prop

/*const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}*/

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}