interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-zinc-900 h-screen flex flex-col text-center items-center gap-10 ">
      {children}
    </div>
  );
};

export default Container;
