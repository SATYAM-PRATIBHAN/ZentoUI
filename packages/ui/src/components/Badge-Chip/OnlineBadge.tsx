export const OnlineBadge = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#C6F6D5', 
        color: '#38A169', 
        borderRadius: '9px',
        padding: '6px 14px',
        fontSize: '16px',
        fontWeight: '400',
        fontFamily: 'sans-serif',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#38A169',
          marginRight: '6px',
        }}
      ></span>
      Online
    </div>
  );
};
