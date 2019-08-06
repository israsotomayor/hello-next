import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout';

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

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}