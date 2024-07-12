export default function Layout({ children }: { children: React.ReactNode }) {
    const ids = [{ id: '1' }, { id: '2' }, { id: '3' }];
  
    return (
      <div className="">
        <div>{children}</div>
      </div>
    );
  }