import Header from '../components/Header';


const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;