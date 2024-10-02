import Content from '../components/Content';
import Navbar from '../components/navbar/Navbar';
import ListingPage from './ListingPage';

const Home = () => {
  return (
    <div className='parent-container'>
      <Navbar />
      {/* <div className='h-20 filter-header'></div> */}
      {/* <div className='grid grid-cols-1 gap-5 mt-72 content-section lg:grid-cols-6 md:grid-cols-5'>
        {Array.from({ length: 50 }).map((_, index) => (
          <Content key={index} />
        ))}
      </div> */}
      <main>
        <ListingPage />
      </main>
    </div>
  );
};

export default Home;
