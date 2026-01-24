import { useState } from "react";

// Define the type for our Tab object
type TabItem = {
  label: string;
  id: string;
  Component: React.ElementType; // This allows us to pass a component
};

interface TabsProps {
  items: TabItem[];
}

function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className="c-tabs-container">
      <div className="c-tabs">
        {items.map((item) => (
          <button
            key={item.id}
            className={`c-tabs__tab ${activeTab === item.id ? "c-tabs__tab--active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="c-tabs__content">
        {items.map((item) => {
          if (item.id !== activeTab) return null;

          const ActiveComp = item.Component;
          return <ActiveComp key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Tabs;
