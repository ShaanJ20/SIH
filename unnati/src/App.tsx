// src/App.tsx
import Button from "./components/ui/Button";
import Card from "./components/ui/card";
import Input from "./components/ui/input";
import "@/styles/globals.css"


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <Card title="Welcome to Unnati">
        <p className="text-gray-700 mb-4">This is a demo card.</p>
        <Input placeholder="Type here..." />
        <div className="mt-4 flex gap-2">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>
    </div>
  );
}
