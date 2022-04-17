import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

// Video: https://www.youtube.com/watch?v=_ivIUCSOZ78&t=5s
// Code: https://github.com/adrianhajdin/nft-marketplace-showcase

const App = () => {
  return (
    <>
      <SectionWrapper
        title='Your own store of Nifty NFTs. Start Selling & Growing.'
        description='Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
    </>
  );
};

export default App;
