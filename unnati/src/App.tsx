import React from "react";
import Button from "./components/ui/Button";
import Card from "./components/ui/card";
import Input from "./components/ui/input";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="space-y-6 w-full max-w-md">
        <Card title="Test Card">
          <p className="text-gray-700 mb-4">This is a simple card example.</p>
          <Input placeholder="Type something..." />
          <div className="mt-4 flex gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;