import Header from "./Headers";

const DashboardLayout = ({ children, role }) => {
  return (
    <>
      <Header role={role} />
      <main className="min-h-screen bg-gray-100 p-4">
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
