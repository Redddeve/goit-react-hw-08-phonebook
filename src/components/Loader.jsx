import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '500',
      }}
      wrapperClass="Oval-wrapper"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#359c54"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
