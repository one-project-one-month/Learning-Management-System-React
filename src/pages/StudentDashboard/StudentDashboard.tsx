const StudentDashboard = () => {
  return (
    <main className="flex-grow p-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Layout</h1>
      <p className="mb-4">
        I have created role based Dashboard renderning based on user role. Check
        Routes/admin.tsx for that
      </p>
      {/* Example of Long Content */}
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="bg-gray-100 p-2 rounded-lg">
            Content line {i + 1}
          </p>
        ))}
      </div>
    </main>
  );
};

export default StudentDashboard;
