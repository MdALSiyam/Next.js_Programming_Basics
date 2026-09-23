export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <aside style={{ width: '200px', background: '#e0e0e0', padding: '15px', borderRadius: '8px' }}>
        <h3>Dashboard Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/Part-2/dashboard">Overview</a></li>
          <li><a href="/Part-2/dashboard/settings">Settings</a></li>
        </ul>
      </aside>
      <section style={{ flex: 1 }}>
        {children}
      </section>
    </div>
  );
}