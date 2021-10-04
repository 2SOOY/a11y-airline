import Layout from '../Components/Layout';
import '../styles/util.css';

export function reportWebVitals(metric) {
  console.log(metric);
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
};

export default App;
