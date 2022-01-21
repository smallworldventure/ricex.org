import Head from 'next/head';
import TextLoop from 'react-text-loop';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RiceX Dapp Coming EOY2020</title>
        <meta name="title" content="RiceX Dapp Coming EOY2020" />
        <meta
          name="description"
          content="Rice exchange and community financing program, powered by Selendra Blockchain."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ricex.org/" />
        <meta property="og:title" content="RiceX Dapp Coming EOY2020" />
        <meta
          property="og:description"
          content="Rice exchange and community financing program, powered by Selendra Blockchain."
        />
        <meta
          property="og:image"
          content="https://www.ricex.org/thumbnial.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ricex.org/" />
        <meta property="twitter:title" content="RiceX Dapp Coming EOY2020" />
        <meta
          property="twitter:description"
          content="Rice exchange and community financing program, powered by Selendra Blockchain."
        />
        <meta
          property="twitter:image"
          content="https://www.ricex.org/thumbnial.png"
        />
      </Head>
      <div className="background-image">
        <center>
          <h1 className="ricex-logo">
            Rice<span className="x-color">X</span> Dapp
            <div className="coming-text">Coming EOY2020</div>
          </h1>
          {/* <h1 className="test">Rice Exchange </h1> */}
          <br />
          <br />
          <h2 className="rice-desc">
            Rice exchange and community financing program, powered by{' '}
            <a href="https://selendra.org">Selendra Blockchain</a>.
          </h2>
          {/* <TextLoop>
            <span>Trade faster</span>
            <span>Increase sales</span>
            <span>Stock winners</span>
          </TextLoop>{" "} */}
        </center>
      </div>
    </div>
  );
}
