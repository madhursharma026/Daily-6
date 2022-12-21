import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Component {...pageProps} />
    </div>
  )
}
