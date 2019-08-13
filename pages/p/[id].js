import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

//const Post = ({ show: { name = "", summary = "", image = {}, ...rest } = {} }) => (
const Post = props => (  
  <Layout> 
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;

  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json();

    console.log('SHOW', show)
    return { show } 
  } catch (error) {
    return { show: {}, error }
  }
};

export default Post;

/*export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}*/
