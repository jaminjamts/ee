const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen max-w-[1200px] flex justify-center">
      {children}
    </div>
  );
};

export default Container;
