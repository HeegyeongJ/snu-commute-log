const Header = ({ children }) => {
  return (
    <div>
      <p className="text-center text-3xl font-semibold mt-20">
        서울대학교 캠퍼스타운 기업 출근 LOG 분석
      </p>
      {children}
    </div>
  );
};

export default Header;
