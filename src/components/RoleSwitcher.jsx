import { useState } from "react";

function RoleSwitcher({ role, setRole }) {
  return (
    <div className="d-flex justify-content-end">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default RoleSwitcher;
