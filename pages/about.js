import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout';

/*export default function About() {
  return (
    <Layout>
      <p> This  is the about page</p>
    </Layout>
  );
}*/

// Method 1

//const Page = () => <p>This is the about page</p>;

//export default withLayout(Page);

//Method 2

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
  return <Layout content={aboutPageContent} />;
}