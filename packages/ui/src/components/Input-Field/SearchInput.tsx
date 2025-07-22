export const SearchInput = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: '16px',
        padding: '12px 10px',
        width: 'fit-content',
        boxShadow: "0px 12px 40px -4px rgba(0, 0, 0, 0.20)",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          color: '#000',
          fontSize: '18px',
          fontWeight: '400',
          fontFamily: 'sans-serif',
          marginRight: '2px',
          padding: 0,
          width: '100px',
        }}
      />
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};